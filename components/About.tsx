"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import Section from "./Section";

const facts = [
  {
    title: "Backend en CakePHP",
    body:
      "Es mi entorno de trabajo principal: dominio, validaciones, eventos del ciclo de vida y queries con cabeza.",
  },
  {
    title: "Diseño de APIs REST",
    body:
      "Paginación, filtros, versionado y contratos estables. La API se documenta y se mantiene como un producto más.",
  },
  {
    title: "SaaS multi-tenant",
    body:
      "Trabajo con permisos, tenants, disponibilidad, precios y reglas de negocio que cambian según el contexto.",
  },
  {
    title: "Optimización",
    body:
      "Me fijo en endpoints lentos, datos sucios, índices, caché y queries que necesitan bajar tiempos de respuesta.",
  },
  {
    title: "Frontend moderno",
    body:
      "Next.js, TypeScript y React Native cuando toca. UI consistente, accesible y rápida en dispositivos reales.",
  },
  {
    title: "Producción",
    body:
      "+2 años manteniendo y evolucionando sistemas en uso, con experiencia en entornos de eventos como FITUR.",
  },
];

export default function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Desarrollo software que se mantiene"
      description="Mi perfil mezcla backend, APIs, datos y frontend cuando el producto lo necesita."
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
            <span className="font-mono text-fg-subtle">(plcromero)</span>, desarrollador
            fullstack en España. En mi día a día trabajo sobre backend en CakePHP,
            APIs REST, MySQL y plataformas SaaS multi-tenant donde la lógica de
            negocio importa tanto como el rendimiento.
          </p>
          <p className="mt-4 text-fg-muted leading-relaxed">
            He construido <span className="text-fg">Metalendario</span>, una plataforma
            de eventos API-first con backend, API y app móvil en React Native. También
            he trabajado en SaaS de ticketing, integraciones con APIs externas, webs
            a medida para clientes y flujos relacionados con ventas, reservas y eventos.
          </p>
          <p className="mt-4 text-fg-muted leading-relaxed">
            Me siento cómodo entrando en código existente, entendiendo reglas de
            negocio y haciendo cambios sin convertirlo todo en una reescritura. Cuido
            que el código se entienda meses después, que los errores aparezcan pronto
            y que la solución encaje con lo que realmente necesita el producto.
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
