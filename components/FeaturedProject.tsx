"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

type Props = { project: Project };

export default function FeaturedProject({ project }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      className="glass-card relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(900px 360px at 90% 0%, rgba(255,148,114,0.10), transparent 60%), radial-gradient(900px 360px at 10% 100%, rgba(88,166,255,0.10), transparent 60%)",
        }}
      />

      <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
        <div className="p-6 md:p-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Proyecto destacado
            </span>
            <span className="badge">API-first</span>
            <span className="badge">Producción</span>
          </div>

          <h3 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="gradient-text">{project.title}</span>
          </h3>
          <p className="mt-2 text-fg-muted">{project.tagline}</p>

          <p className="mt-6 max-w-xl text-fg-muted leading-relaxed">
            {project.description}
          </p>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-7 grid gap-2 sm:grid-cols-2"
          >
            {project.bullets.map((b) => (
              <motion.li
                key={b}
                variants={fadeUp}
                className="flex items-start gap-2.5 rounded-lg border border-border-muted bg-bg-elevated/50 p-3 text-sm"
              >
                <span aria-hidden className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-fg-muted">{b}</span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="badge">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="relative border-t border-border-muted md:border-l md:border-t-0">
          <div className="relative h-full p-6 md:p-8">
            <div className="rounded-xl border border-border-muted bg-bg-inset overflow-hidden shadow-card">
              <div className="flex items-center gap-2 border-b border-border-muted bg-bg-elevated/70 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[11px] text-fg-subtle">
                  GET /api/v1/events?city=mad&type=concert&page=1
                </span>
              </div>
              <pre className="p-4 text-[12.5px] leading-relaxed font-mono text-fg-muted overflow-x-auto">
{`{
  "meta": {
    "page": 1,
    "perPage": 20,
    "total": 1284,
    "filtersApplied": ["city", "type"]
  },
  "data": [
    {
      "id": "evt_8f3a",
      "title": "Concierto en sala Riviera",
      "city": "Madrid",
      "type": "concert",
      "startsAt": "2026-06-12T20:30:00Z",
      "venue": { "name": "Riviera", "lat": 40.41, "lng": -3.71 },
      "source": "metalendario.aggregator.v3"
    }
  ]
}`}
              </pre>
            </div>

            {project.meta && (
              <dl className="mt-5 grid grid-cols-3 gap-3">
                {project.meta.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border-muted bg-bg-elevated/50 p-3"
                  >
                    <dt className="text-[11px] uppercase tracking-wider text-fg-subtle">
                      {m.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-fg">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
