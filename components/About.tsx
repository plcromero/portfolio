"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import Section from "./Section";

const facts = [
  {
    title: "Backend en CakePHP",
    body:
      "Modelado de dominio, validaciones, eventos del ciclo de vida y queries afinadas. Es lo que más toco a diario.",
  },
  {
    title: "Diseño de APIs REST",
    body:
      "Paginación, filtros, versionado y contratos estables. La API se documenta y se mantiene como un producto más.",
  },
  {
    title: "SaaS multi-tenant",
    body:
      "Aislamiento por tenant, permisos, cuotas y precios dinámicos. Lógica compleja sin perder claridad.",
  },
  {
    title: "Optimización",
    body:
      "Profiling, índices, caché y rediseño de queries cuando hace falta. Bajar p95 sin reescribir el mundo.",
  },
  {
    title: "Frontend moderno",
    body:
      "Next.js, TypeScript y React Native cuando toca. UI consistente, accesible y rápida en dispositivos reales.",
  },
  {
    title: "Producción",
    body:
      "+2 años manteniendo y evolucionando sistemas en uso, incluyendo entornos de eventos como FITUR.",
  },
];

export default function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Fullstack con foco en producto"
      description="Llevo +2 años desarrollando software que se usa todos los días en producción. Esto es lo que toco."
      divider
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card p-6 md:p-8"
        >
          <p className="text-fg-muted leading-relaxed">
            Soy{" "}
            <span className="font-medium text-fg">Manuel Jesús Romero García</span>{" "}
            <span className="font-mono text-fg-subtle">(plcromero)</span>, fullstack
            developer afincado en España. Mi día a día se reparte entre backend en
            CakePHP, APIs REST y plataformas SaaS multi-tenant en las que la lógica
            de negocio pesa tanto como el rendimiento.
          </p>
          <p className="mt-4 text-fg-muted leading-relaxed">
            He construido <span className="text-fg">Metalendario</span>: plataforma
            de eventos API-first con backend, API y app móvil en React Native. He
            metido mano en SaaS de ticketing con CakePHP, integraciones contra APIs
            externas y webs a medida para clientes. Pongo foco en endpoints lentos,
            datos sucios y queries que escalan mal.
          </p>
          <p className="mt-4 text-fg-muted leading-relaxed">
            Me preocupo de que el código se entienda meses después y de que los
            errores aparezcan pronto. Backend o frontend, según lo que necesite el
            producto.
          </p>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-3"
        >
          {facts.map((f) => (
            <motion.li
              key={f.title}
              variants={fadeUp}
              className="glass-card glass-card-hover p-5"
            >
              <h4 className="text-sm font-semibold text-fg">{f.title}</h4>
              <p className="mt-1.5 text-sm text-fg-muted leading-relaxed">{f.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
