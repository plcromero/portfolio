import { NextResponse } from "next/server";
import {
  getTransporter,
  mailConfig,
  ownerNotificationHtml,
  autoreplyHtml,
} from "@/lib/mail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  name?: string;
  email?: string;
  message?: string;
  // honeypot — bots fill anything; humans never see it
  website?: string;
};

// Simple in-memory rate limit per IP (best-effort)
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimit(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos. Inténtalo en unos minutos." },
      { status: 429 }
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  // honeypot
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2)
    return NextResponse.json({ error: "Nombre demasiado corto." }, { status: 400 });
  if (name.length > 120)
    return NextResponse.json({ error: "Nombre demasiado largo." }, { status: 400 });
  if (!EMAIL_RE.test(email))
    return NextResponse.json({ error: "Email no válido." }, { status: 400 });
  if (message.length < 10)
    return NextResponse.json({ error: "Mensaje demasiado corto." }, { status: 400 });
  if (message.length > 5000)
    return NextResponse.json({ error: "Mensaje demasiado largo." }, { status: 400 });

  const transporter = getTransporter();

  if (!transporter || !mailConfig.enabled) {
    console.warn(
      "[contact] SMTP no configurado — el mensaje se registra solo en logs."
    );
    console.log("[contact] message", {
      at: new Date().toISOString(),
      name,
      email,
      length: message.length,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const payload = { name, email, message };
    const subject = `Nuevo mensaje en plcromero.es — ${name}`;

    await transporter.sendMail({
      from: mailConfig.from,
      to: mailConfig.ownerTo,
      replyTo: `${name} <${email}>`,
      subject,
      text: `Nuevo mensaje de ${name} <${email}>\n\n${message}`,
      html: ownerNotificationHtml(payload),
    });

    // Auto-reply (best effort, no bloquear si falla)
    try {
      await transporter.sendMail({
        from: mailConfig.from,
        to: `${name} <${email}>`,
        replyTo: mailConfig.replyTo,
        subject: "Hemos recibido tu mensaje · plcromero.es",
        text: `Hola ${name},\n\nTu mensaje ha llegado correctamente. Te respondo personalmente cuanto antes (suele ser en menos de 24-48 h laborables).\n\nUn saludo,\nManuel Jesús Romero García\nplcromero · Fullstack Developer`,
        html: autoreplyHtml(payload),
      });
    } catch (e) {
      console.error("[contact] auto-reply failed", e);
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] sendMail failed", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo más tarde." },
      { status: 502 }
    );
  }
}
