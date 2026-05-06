import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2)
    return NextResponse.json({ error: "Nombre demasiado corto." }, { status: 400 });
  if (!EMAIL_RE.test(email))
    return NextResponse.json({ error: "Email no válido." }, { status: 400 });
  if (message.length < 10)
    return NextResponse.json({ error: "Mensaje demasiado corto." }, { status: 400 });
  if (message.length > 5000)
    return NextResponse.json({ error: "Mensaje demasiado largo." }, { status: 400 });

  console.log("[contact] new message", {
    at: new Date().toISOString(),
    name,
    email,
    length: message.length,
  });

  return NextResponse.json({ ok: true });
}
