"use client";

import { motion } from "framer-motion";
import { techs } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import SectionHeader from "./SectionHeader";

const dotByLevel: Record<string, string> = {
  Diario: "bg-success",
  Sólido: "bg-primary",
  Familiar: "bg-accent",
};

export default function Stack() {
  const grouped = techs.reduce<Record<string, typeof techs>>((acc, t) => {
    (acc[t.category] ||= []).push(t);
    return acc;
  }, {});

  const order: (keyof typeof grouped)[] = [
    "Lenguajes",
    "Frontend",
    "Backend",
    "API",
    "Datos",
    "DevOps",
  ];

  return (
    <section id="stack" className="relative py-16 md:py-20">
      <div className="container-page">
        <SectionHeader
          eyebrow="Stack"
          title="Herramientas con las que trabajo"
          description="Lo que ya he llevado a producción. Si pongo algo aquí es porque lo conozco a fondo."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {order
            .filter((c) => grouped[c]?.length)
            .map((cat) => (
              <motion.div
                key={cat}
                variants={fadeUp}
                className="glass-card glass-card-hover p-5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold tracking-tight text-fg">
                    {cat}
                  </h4>
                  <span className="font-mono text-[11px] text-fg-subtle">
                    {grouped[cat].length} items
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {grouped[cat].map((t) => (
                    <li
                      key={t.name}
                      className="group flex items-center justify-between rounded-lg border border-border-muted/60 bg-bg-elevated/40 px-3 py-2 text-sm transition-all hover:border-primary/30 hover:bg-bg-subtle"
                    >
                      <span className="flex items-center gap-2.5 text-fg">
                        <span
                          aria-hidden
                          className={`inline-block h-1.5 w-1.5 rounded-full ${dotByLevel[t.level]}`}
                        />
                        {t.name}
                      </span>
                      <span className="font-mono text-[11px] text-fg-subtle">
                        {t.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-3 text-xs text-fg-subtle"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> Diario
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Sólido
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Familiar
          </span>
        </motion.div>
      </div>
    </section>
  );
}
