import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT ?? 465);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const from = process.env.MAIL_FROM ?? `plcromero <${user ?? "no-reply@plcromero.es"}>`;
const ownerTo = process.env.OWNER_EMAIL ?? "plcromero@gmail.com";
const replyTo = process.env.MAIL_REPLY_TO ?? user ?? ownerTo;

let transporterCache: nodemailer.Transporter | null = null;

export function getTransporter() {
  if (!host || !user || !pass) return null;
  if (transporterCache) return transporterCache;
  transporterCache = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return transporterCache;
}

export const mailConfig = {
  from,
  ownerTo,
  replyTo,
  enabled: Boolean(host && user && pass),
};

export function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Payload = { name: string; email: string; message: string };

export function ownerNotificationHtml({ name, email, message }: Payload) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const date = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });

  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Nuevo mensaje en plcromero.es</title></head>
<body style="margin:0;padding:0;background:#0d1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,sans-serif;color:#e6edf3;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0d1117;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#161b22;border:1px solid #30363d;border-radius:14px;overflow:hidden;">
        <tr><td style="padding:28px 32px 0 32px;">
          <div style="display:inline-block;padding:6px 12px;background:rgba(88,166,255,0.12);border:1px solid rgba(88,166,255,0.3);border-radius:999px;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#79b8ff;">Nuevo mensaje</div>
          <h1 style="margin:18px 0 4px 0;font-size:22px;font-weight:600;color:#e6edf3;">Tienes un mensaje nuevo en plcromero.es</h1>
          <p style="margin:0;color:#8b949e;font-size:13px;">${date} · CET</p>
        </td></tr>
        <tr><td style="padding:24px 32px 8px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #21262d;">
              <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6e7681;">Nombre</span>
              <span style="display:block;color:#e6edf3;font-size:15px;margin-top:4px;">${safeName}</span>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #21262d;">
              <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6e7681;">Email</span>
              <a href="mailto:${safeEmail}" style="display:block;color:#58a6ff;font-size:15px;margin-top:4px;text-decoration:none;">${safeEmail}</a>
            </td></tr>
            <tr><td style="padding:14px 0 4px 0;">
              <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6e7681;margin-bottom:8px;">Mensaje</span>
              <div style="background:#0d1117;border:1px solid #21262d;border-radius:10px;padding:16px;color:#c9d1d9;font-size:14px;line-height:1.6;">${safeMessage}</div>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:8px 32px 28px 32px;">
          <a href="mailto:${safeEmail}?subject=Re:%20tu%20mensaje%20desde%20plcromero.es" style="display:inline-block;padding:11px 18px;background:#58a6ff;color:#0d1117;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">Responder a ${safeName}</a>
        </td></tr>
        <tr><td style="padding:18px 32px;background:#0d1117;border-top:1px solid #21262d;">
          <p style="margin:0;font-size:12px;color:#6e7681;">Recibido desde el formulario de <a href="https://plcromero.es" style="color:#58a6ff;text-decoration:none;">plcromero.es</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export function autoreplyHtml({ name }: Payload) {
  const safeName = escapeHtml(name);
  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mensaje recibido</title></head>
<body style="margin:0;padding:0;background:#0d1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,sans-serif;color:#e6edf3;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0d1117;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#161b22;border:1px solid #30363d;border-radius:14px;overflow:hidden;">
        <tr><td style="padding:32px 32px 0 32px;text-align:center;">
          <div style="display:inline-block;width:56px;height:56px;border-radius:14px;background:rgba(88,166,255,0.10);border:1px solid rgba(88,166,255,0.35);line-height:56px;font-size:26px;color:#79b8ff;">✓</div>
          <h1 style="margin:18px 0 6px 0;font-size:24px;font-weight:600;color:#e6edf3;letter-spacing:-0.3px;">Mensaje recibido, ${safeName}</h1>
          <p style="margin:0;color:#8b949e;font-size:14px;line-height:1.6;max-width:440px;margin:0 auto;">Tu mensaje ha llegado correctamente. Te respondo personalmente lo antes posible (suele ser en menos de 24-48 horas laborables).</p>
        </td></tr>
        <tr><td style="padding:28px 32px 8px 32px;">
          <div style="background:#0d1117;border:1px solid #21262d;border-radius:10px;padding:18px;">
            <p style="margin:0 0 10px 0;font-size:13px;color:#6e7681;text-transform:uppercase;letter-spacing:1px;">Mientras tanto</p>
            <p style="margin:0;color:#c9d1d9;font-size:14px;line-height:1.6;">Si quieres ver más sobre lo que hago, puedes echar un vistazo a mis proyectos o conectar conmigo en redes:</p>
            <div style="margin-top:16px;display:block;">
              <a href="https://plcromero.es/#proyectos" style="display:inline-block;margin:4px 6px 4px 0;padding:9px 14px;background:#161b22;border:1px solid #30363d;border-radius:8px;color:#e6edf3;text-decoration:none;font-size:13px;">Proyectos</a>
              <a href="https://github.com/plcromero" style="display:inline-block;margin:4px 6px 4px 0;padding:9px 14px;background:#161b22;border:1px solid #30363d;border-radius:8px;color:#e6edf3;text-decoration:none;font-size:13px;">GitHub</a>
              <a href="https://www.linkedin.com/in/plcromero/" style="display:inline-block;margin:4px 6px 4px 0;padding:9px 14px;background:#161b22;border:1px solid #30363d;border-radius:8px;color:#e6edf3;text-decoration:none;font-size:13px;">LinkedIn</a>
            </div>
          </div>
        </td></tr>
        <tr><td style="padding:18px 32px 28px 32px;">
          <p style="margin:0;font-size:14px;color:#c9d1d9;line-height:1.6;">Un saludo,<br><strong style="color:#e6edf3;">Manuel Jesús Romero García</strong><br><span style="color:#8b949e;">Fullstack Developer · plcromero</span></p>
        </td></tr>
        <tr><td style="padding:18px 32px;background:#0d1117;border-top:1px solid #21262d;">
          <p style="margin:0;font-size:12px;color:#6e7681;">Este es un correo automático de confirmación. No respondas a este mensaje, te escribiré directamente desde mi correo personal.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}
