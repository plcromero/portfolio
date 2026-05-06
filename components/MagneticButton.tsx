"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.25,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Comp: React.ElementType = href ? motion.a : motion.button;
  const props = href
    ? { href, onMouseMove: handleMove, onMouseLeave: handleLeave }
    : { onClick, onMouseMove: handleMove, onMouseLeave: handleLeave, type: "button" as const };

  return (
    <Comp ref={ref as never} style={{ x: sx, y: sy }} className={className} {...props}>
      {children}
    </Comp>
  );
}
