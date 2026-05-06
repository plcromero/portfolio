"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { contact } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import SectionHeader from "./SectionHeader";

type Status = "idle" | "loading" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const localErrors: Record<string, string> = {};
    if (name.length < 2) localErrors.name = "El nombre es demasiado corto.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      localErrors.email = "Email no válido.";
    if (message.length < 10)
      localErrors.message = "Mínimo 10 caracteres, por favor.";

    if (Object.keys(localErrors).length) {
      setErrors(localErrors);
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Error al enviar el mensaje.");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error al enviar.");
    }
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container-page">
        <SectionHeader
          eyebrow="Contacto"
          title="Hablemos"
          description="¿Tienes una idea, un proyecto o necesitas un fullstack para una integración seria? Escríbeme."
        />

        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <motion.aside
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-3"
          >
            <ContactLink
              icon={<MailIcon />}
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactLink
              icon={<GithubIcon />}
              label="GitHub"
              value={`@${contact.githubUser}`}
              href={contact.github}
            />
            <ContactLink
              icon={<GlobeIcon />}
              label="Web"
              value="plcromero.es"
              href={contact.web}
            />
            <ContactLink
              icon={<LinkedinIcon />}
              label="LinkedIn"
              value="linkedin.com/in/plcromero"
              href={contact.linkedin}
            />
          </motion.aside>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={onSubmit}
            noValidate
            className="glass-card p-6 md:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Nombre"
                name="name"
                placeholder="Tu nombre"
                error={errors.name}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                error={errors.email}
              />
            </div>

            <Field
              label="Mensaje"
              name="message"
              as="textarea"
              placeholder="Cuéntame en qué andas trabajando…"
              error={errors.message}
              className="mt-4"
            />

            <div className="mt-6 flex items-center justify-between gap-4">
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  status === "ok"
                    ? "text-success"
                    : status === "error"
                    ? "text-accent"
                    : "text-fg-subtle"
                }`}
              >
                {status === "ok" && "Mensaje enviado. Te responderé pronto."}
                {status === "error" && (errorMsg ?? "Algo falló. Inténtalo de nuevo.")}
                {status === "idle" && "Respondo en 24-48h."}
                {status === "loading" && "Enviando…"}
              </p>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary group"
              >
                {status === "loading" ? "Enviando…" : "Enviar mensaje"}
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  placeholder,
  error,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  placeholder?: string;
  error?: string;
  className?: string;
}) {
  const baseCls =
    "w-full rounded-lg border border-border-muted bg-bg-inset/60 px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-subtle outline-none transition-all focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(88,166,255,0.18)]";

  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-fg-subtle">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={5}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={`${baseCls} resize-y min-h-32`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={baseCls}
        />
      )}
      {error && (
        <span className="mt-1.5 block text-xs text-accent">{error}</span>
      )}
    </label>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group glass-card glass-card-hover flex items-center gap-4 p-4"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-muted bg-bg-subtle text-fg-muted transition-all group-hover:border-primary/40 group-hover:text-primary">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[11px] uppercase tracking-wider text-fg-subtle">
          {label}
        </span>
        <span className="text-sm text-fg">{value}</span>
      </span>
      <span className="ml-auto text-fg-subtle transition-colors group-hover:text-primary">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
    </motion.a>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.79.55C20.21 21.4 23.5 17.1 23.5 12.02 23.5 5.66 18.35.5 12 .5z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20" />
      <path d="M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8h4.54v14H.22V8zm7.39 0h4.35v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.54v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V22H7.61V8z" />
    </svg>
  );
}
