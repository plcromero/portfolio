"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import SectionHeader from "./SectionHeader";

const facts = [
  {
    title: "Backend con CakePHP",
    body:
      "Trabajo a diario con CakePHP en SaaS multi-tenant: modelado de dominio, validaciones, eventos, hooks de ciclo de vida y queries optimizadas.",
  },
  {
    title: "APIs REST de verdad",
    body:
      "Diseño endpoints con paginación, filtros, versionado y contratos estables. La API se documenta y se respeta como producto.",
  },
  {
    title: "SaaS multi-tenant",
    body:
      "Aislamiento por tenant, permisos, cuotas y precios dinámicos. Lógica compleja sin perder claridad en el código.",
  },
  {
    title: "Optimización de rendimiento",
    body:
      "Profiling, índices, caché y rediseño de queries en hot-paths. Mejorar p95 sin reescribirlo todo.",
  },
  {
    title: "Frontend moderno",
    body:
      "Next.js, TypeScript y React Native cuando toca. UI consistente, accesible y rápida en dispositivos reales.",
  },
  {
    title: "Producción real",
    body:
      "+2 años manteniendo y evolucionando sistemas en uso, incluyendo entornos de eventos de gran volumen tipo FITUR.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container-page">
        <SectionHeader
          eyebrow="Sobre mí"
          title="Fullstack con foco en producto"
          description="Lo que sé hacer está construido sobre proyectos reales que pisan tráfico todos los días. Esta es la versión sin frases vacías."
        />

        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card p-6 md:p-8"
          >
            <p className="text-fg-muted leading-relaxed">
              Soy <span className="text-fg font-medium">Manuel Jesús Romero García</span>{" "}
              <span className="font-mono text-fg-subtle">(plcromero)</span>, fullstack developer con más de
              dos años trabajando en producción. Mi día a día está repartido entre
              backend en CakePHP, APIs REST y plataformas SaaS multi-tenant donde la
              lógica de negocio importa tanto como la performance.
            </p>
            <p className="mt-4 text-fg-muted leading-relaxed">
              He construido <span className="text-fg">Metalendario</span>, una
              plataforma de eventos API-first con backend, API REST y app móvil en
              React Native. He desarrollado funcionalidades críticas en SaaS de
              ticketing, integraciones contra APIs externas y webs a medida para
              clientes. Cuando un endpoint va lento, lo perfilo. Cuando un dato no
              cuadra, lo normalizo.
            </p>
            <p className="mt-4 text-fg-muted leading-relaxed">
              Me importa que el código sea legible meses después, que los errores
              salgan pronto y que el producto se pueda iterar sin miedo. Frontend
              y backend, sin elegir bando.
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
                <p className="mt-1.5 text-sm text-fg-muted leading-relaxed">
                  {f.body}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
