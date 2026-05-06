"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { contact } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Section from "./Section";
import { ArrowRight, ArrowUpRight, Github, Globe, Linkedin, Mail } from "./icons";

type Status = "idle" | "loading" | "ok" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(name: string, email: string, message: string): Errors {
  const e: Errors = {};
  if (name.length < 2) e.name = "El nombre es demasiado corto.";
  if (!EMAIL_RE.test(email)) e.email = "Email no válido.";
  if (message.length < 10) e.message = "Mínimo 10 caracteres, por favor.";
  return e;
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const website = String(fd.get("website") ?? "");

    const localErrors = validate(name, email, message);
    if (Object.keys(localErrors).length) {
      setErrors(localErrors);
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
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
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Cuéntame el proyecto"
      description="Plataforma a medida, API, integración o un SaaS que necesita manos. Escríbeme y te respondo cuanto antes."
      divider
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <motion.aside
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-3"
        >
          <ContactLink icon={<Mail />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactLink icon={<Github />} label="GitHub" value={`@${contact.githubUser}`} href={contact.github} />
          <ContactLink icon={<Globe />} label="Web" value="plcromero.es" href={contact.web} />
          <ContactLink icon={<Linkedin />} label="LinkedIn" value="linkedin.com/in/manuel-jesús-romero-garcía" href={contact.linkedin} />
        </motion.aside>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={onSubmit}
          noValidate
          className="glass-card relative p-6 md:p-7"
        >
          {/* honeypot anti-bots */}
          <div aria-hidden className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
            <label>
              Website
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre" name="name" placeholder="Cómo te llamas" error={errors.name} />
            <Field label="Email" name="email" type="email" placeholder="tu@email.com" error={errors.email} />
          </div>

          <Field
            label="Mensaje"
            name="message"
            as="textarea"
            placeholder="Cuéntame en qué andas y qué necesitas…"
            error={errors.message}
            className="mt-4"
          />

          <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p
              role="status"
              aria-live="polite"
              className={`text-sm ${
                status === "ok" ? "text-success" : status === "error" ? "text-accent" : "text-fg-subtle"
              }`}
            >
              {status === "ok" && "Mensaje enviado. Recibirás copia en tu correo."}
              {status === "error" && (errorMsg ?? "Algo falló. Prueba otra vez.")}
              {status === "idle" && "Tu email no se comparte con nadie."}
              {status === "loading" && "Enviando…"}
            </p>

            <button type="submit" disabled={status === "loading"} className="btn-primary group shrink-0">
              {status === "loading" ? "Enviando…" : "Enviar mensaje"}
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
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
        <input name={name} type={type} placeholder={placeholder} aria-invalid={!!error} className={baseCls} />
      )}
      {error && <span className="mt-1.5 block text-xs text-accent">{error}</span>}
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
  const external = href.startsWith("http");
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group glass-card glass-card-hover flex items-center gap-4 p-4"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-muted bg-bg-subtle text-fg-muted transition-all group-hover:border-primary/40 group-hover:text-primary">
        {icon}
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[11px] uppercase tracking-wider text-fg-subtle">{label}</span>
        <span className="truncate text-sm text-fg">{value}</span>
      </span>
      <span className="ml-auto shrink-0 text-fg-subtle transition-colors group-hover:text-primary">
        <ArrowUpRight />
      </span>
    </motion.a>
  );
}
