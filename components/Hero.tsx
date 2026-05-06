"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden pt-10 md:pt-16"
    >
      {/* Parallax + ambient backgrounds */}
      <motion.div
        style={{ y: yBg }}
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-radial-glow" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-accent-glow" />

      {/* Floating ambient blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-120px] top-24 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[-100px] top-44 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />

      <motion.div
        style={{ y: yContent, opacity }}
        className="container-page relative pb-16 md:pb-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="section-eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Disponible para nuevos proyectos
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="gradient-text gradient-animate">plcromero</span>
            <span className="block text-fg-muted text-2xl md:text-3xl font-medium mt-3">
              Manuel Jesús Romero — Fullstack Developer
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-balance text-lg md:text-xl text-fg-muted"
          >
            Construyo{" "}
            <span className="text-fg">APIs</span>,{" "}
            <span className="text-fg">plataformas SaaS</span> y{" "}
            <span className="text-fg">aplicaciones web modernas</span>.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base text-fg-subtle"
          >
            +2 años trabajando en producción sobre sistemas multi-tenant,
            integraciones y plataformas con tráfico real.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#proyectos" className="btn-primary group">
              Ver proyectos
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </MagneticButton>
            <MagneticButton href="#contacto" className="btn-ghost group">
              Contacto
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-fg-muted transition-colors group-hover:text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid w-full grid-cols-2 gap-3 md:grid-cols-4"
          >
            {[
              { k: "+2 años", v: "en producción" },
              { k: "API-first", v: "metodología" },
              { k: "Multi-tenant", v: "SaaS" },
              { k: "Fullstack", v: "back + front" },
            ].map((s, i) => (
              <motion.div
                key={s.k}
                whileHover={{ y: -3, borderColor: "rgba(88,166,255,0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-xl border border-border-muted bg-bg-elevated/40 px-4 py-3 backdrop-blur-sm"
              >
                <div className="text-sm font-semibold text-fg">{s.k}</div>
                <div className="text-xs text-fg-subtle">{s.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-fg-subtle"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
