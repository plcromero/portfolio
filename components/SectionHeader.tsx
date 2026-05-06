"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="mb-10 max-w-2xl"
    >
      <span className="section-eyebrow mb-4">{eyebrow}</span>
      <h2 className="section-title mt-2">{title}</h2>
      {description && (
        <p className="mt-3 text-fg-muted text-balance">{description}</p>
      )}
    </motion.div>
  );
}
