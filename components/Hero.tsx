"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import MagneticButton from "./MagneticButton";
import Counter from "./Counter";
import { ArrowRight, Mail, ChevronDown } from "./icons";

const stats = [
  { value: 2, suffix: "+", label: "años en producción" },
  { value: 4, label: "proyectos en uso" },
  { value: 100, suffix: "%", label: "fullstack real" },
  { value: 24, suffix: "h", label: "tiempo de respuesta" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden pt-12 md:pt-20"
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

      <div className="container-page relative pb-14 md:pb-36">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <span className="section-eyebrow mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Disponible para nuevos proyectos
            </span>

            <h1 className="max-w-full text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              <span className="gradient-text gradient-animate">plcromero</span>
              <span className="mt-3 block text-2xl font-medium text-fg-muted md:text-3xl">
                Manuel Jesús Romero — Fullstack Developer
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-fg-muted md:text-xl">
              Desarrollador fullstack con base fuerte en{" "}
              <span className="text-fg">CakePHP</span>,{" "}
              <span className="text-fg">APIs REST</span>,{" "}
              <span className="text-fg">MySQL</span> y frontend moderno.
            </p>

            <p className="mt-4 max-w-2xl text-base text-fg-subtle">
              Me gusta trabajar cerca del producto: entender el problema, ordenar la
              lógica de negocio y dejar sistemas mantenibles que aguanten uso real.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton href="#proyectos" className="btn-primary group">
                Ver proyectos
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
              <MagneticButton href="#contacto" className="btn-ghost group">
                Contacto
                <Mail className="text-fg-muted transition-colors group-hover:text-primary" />
              </MagneticButton>
            </div>

            <div className="mt-8 lg:hidden">
              <HeroConsole compact />
            </div>

            <HeroStats />
          </div>

          <div className="hidden lg:block">
            <HeroConsole />
          </div>
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

function HeroConsole({ compact = false }: { compact?: boolean }) {
  const lines = [
    { label: "api", value: "GET /events?city=mad", tone: "text-primary" },
    { label: "db", value: "MySQL · indexes · cache", tone: "text-success" },
    { label: "app", value: "React Native build ready", tone: "text-accent" },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ y: compact ? 0 : [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="glass-card relative min-w-0 overflow-hidden p-4 sm:p-5"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(88,166,255,0.12),transparent_42%,rgba(255,148,114,0.10))]"
      />
      <div className="flex items-center justify-between border-b border-border-muted pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
          production console
        </span>
      </div>

      <div className={`${compact ? "mt-4" : "mt-5"} space-y-3 font-mono text-xs`}>
        {lines.map((line, i) => (
          <motion.div
            key={line.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.12 }}
            className="flex min-w-0 items-center gap-3 rounded-lg border border-border-muted/70 bg-bg-inset/60 px-3 py-2"
          >
            <span className={`shrink-0 ${line.tone}`}>●</span>
            <span className="shrink-0 text-fg-subtle">{line.label}</span>
            <span className="truncate text-fg-muted">{line.value}</span>
          </motion.div>
        ))}
      </div>

      <div className={`${compact ? "mt-4" : "mt-5"} grid grid-cols-3 gap-2`}>
        <ConsoleMetric label="p95" value="-38%" />
        <ConsoleMetric label="tenants" value="multi" />
        <ConsoleMetric label="deploy" value="ready" />
      </div>

      <div className={`${compact ? "mt-4" : "mt-5"} overflow-hidden rounded-lg border border-border-muted bg-bg-inset/80 p-3`}>
        <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-fg-subtle">
          <span>pipeline</span>
          <span>live</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-border-muted">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary via-success to-accent"
            animate={{ x: ["-70%", "110%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "70%" }}
          />
        </div>
      </div>
    </motion.aside>
  );
}

function ConsoleMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-lg border border-border-muted bg-bg-elevated/60 p-3">
      <div className="truncate font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
        {label}
      </div>
      <div className="mt-1 truncate text-sm font-semibold text-fg">{value}</div>
    </div>
  );
}

function HeroStats() {
  return (
    <motion.div
      variants={fadeUp}
      className="mt-8 grid w-full min-w-0 grid-cols-2 gap-3 md:mt-14 md:grid-cols-4"
    >
      {stats.map((s) => (
        <motion.div
          key={s.label}
          whileHover={{ y: -3, borderColor: "rgba(88,166,255,0.4)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="min-w-0 rounded-xl border border-border-muted bg-bg-elevated/40 px-4 py-3 backdrop-blur-sm"
        >
          <div className="text-lg font-semibold text-fg md:text-xl">
            <CounterText to={s.value} suffix={s.suffix} />
          </div>
          <div className="break-words text-xs text-fg-subtle">{s.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function CounterText({ to, suffix }: { to: number; suffix?: string }) {
  return <Counter to={to} suffix={suffix} />;
}

function ScrollHint() {
  return (
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
        <ChevronDown />
      </motion.div>
    </motion.div>
  );
}
