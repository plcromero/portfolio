"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      className="glass-card glass-card-hover group relative overflow-hidden p-6 md:p-7"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px 240px at var(--mx, 50%) 0%, rgba(88,166,255,0.08), transparent 70%)",
        }}
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-fg-subtle">
            {project.tagline}
          </p>
          <h3 className="mt-1 text-xl md:text-2xl font-semibold tracking-tight text-fg">
            {project.title}
          </h3>
        </div>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-muted bg-bg-subtle/60 text-fg-muted transition-all group-hover:border-primary/40 group-hover:text-primary">
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-fg-muted">
        {project.description}
      </p>

      {project.bullets?.length > 0 && (
        <ul className="mt-5 space-y-2">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-fg">
              <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span className="text-fg-muted">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {project.stack?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="badge">
              {s}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
