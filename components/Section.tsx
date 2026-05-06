"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  divider = false,
}: Props) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      {divider && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      )}
      <div className="container-page">
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <span className="section-eyebrow mb-4">{eyebrow}</span>
          <h2 className="section-title mt-2">{title}</h2>
          {description && (
            <p className="mt-3 text-balance text-fg-muted">{description}</p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
