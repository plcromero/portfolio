"use client";

import { motion } from "framer-motion";
import { techs, type Tech } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import Section from "./Section";

const dotByLevel: Record<Tech["level"], string> = {
  Diario: "bg-success",
  Sólido: "bg-primary",
  Familiar: "bg-accent",
};

const order: Tech["category"][] = [
  "Lenguajes",
  "Frontend",
  "Backend",
  "API",
  "Datos",
  "DevOps",
];

function groupByCategory(items: Tech[]) {
  const map = new Map<Tech["category"], Tech[]>();
  for (const t of items) {
    if (!map.has(t.category)) map.set(t.category, []);
    map.get(t.category)!.push(t);
  }
  return map;
}

export default function Stack() {
  const grouped = groupByCategory(techs);

  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Herramientas con las que trabajo"
      description="Lo que ya he llevado a producción. Si pongo algo aquí es porque lo conozco a fondo."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {order
          .filter((c) => grouped.get(c)?.length)
          .map((cat) => {
            const items = grouped.get(cat)!;
            return (
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
                    {items.length} items
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {items.map((t) => (
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
            );
          })}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="mt-8 flex flex-wrap items-center gap-3 text-xs text-fg-subtle"
      >
        <Legend color="bg-success" label="Diario" />
        <Legend color="bg-primary" label="Sólido" />
        <Legend color="bg-accent" label="Familiar" />
      </motion.div>
    </Section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}
