"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Close, Logo, Menu } from "./icons";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border-muted/80 bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="#top" className="group flex items-center gap-2.5 font-medium tracking-tight">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-border-muted bg-bg-elevated text-primary shadow-card transition-all group-hover:border-primary/50 group-hover:shadow-glow">
            <Logo />
          </span>
          <span className="text-fg">plcromero</span>
          <span className="hidden text-fg-subtle sm:inline">·</span>
          <span className="hidden font-mono text-xs text-fg-muted sm:inline">fullstack</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-bg-elevated hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-3 inline-flex h-9 items-center rounded-lg border border-border-muted bg-bg-elevated px-3 text-sm font-medium text-fg transition-all hover:border-primary/50 hover:text-primary"
          >
            Contactar
          </a>
        </nav>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-muted bg-bg-elevated text-fg-muted md:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-border-muted bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base text-fg-muted hover:bg-bg-elevated hover:text-fg"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
