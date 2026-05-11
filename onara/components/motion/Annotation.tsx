"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
  accent?: boolean;
  delay?: number;
}

export default function Annotation({
  children,
  rotate = 0,
  className,
  style,
  accent = true,
  delay = 0.5,
}: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, rotate: rotate - 6, y: 8 }}
      whileInView={reduced ? {} : { opacity: 1, rotate, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.3, 1] }}
      className={className}
      style={{
        fontFamily: "var(--font-caveat), 'Caveat', cursive",
        color: accent ? "var(--accent-ink)" : "var(--ink-2)",
        fontWeight: 500,
        lineHeight: 1.05,
        pointerEvents: "none",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
