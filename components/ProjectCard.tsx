"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { fadeUp } from "@/lib/motion";
import { ArrowUpRight } from "./icons";

type Props = { project: Project; index: number };

export default function ProjectCard({ project, index }: Props) {
  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <motion.article
      variants={fadeUp}
      onMouseMove={onMouseMove}
      className="glass-card glass-card-hover group relative flex flex-col overflow-hidden p-6 md:p-7"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px 260px at var(--mx, 50%) var(--my, 50%), rgba(88,166,255,0.10), transparent 70%)",
        }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
            <span className="text-primary/70">{String(index).padStart(2, "0")}</span>
            <span className="h-px w-6 bg-border-muted" />
            <span className="truncate">{project.tagline}</span>
          </div>
          <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-fg">
            {project.title}
          </h3>
        </div>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-muted bg-bg-subtle/60 text-fg-muted transition-all group-hover:border-primary/40 group-hover:text-primary">
          <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-fg-muted">
        {project.description}
      </p>

      {project.bullets.length > 0 && (
        <ul className="mt-5 space-y-2">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm">
              <span aria-hidden className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span className="text-fg-muted">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {project.stack.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-1.5 pt-2">
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
