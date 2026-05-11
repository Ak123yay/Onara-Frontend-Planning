"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
}: Props) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.2, 0.7, 0.3, 1] }}
      viewport={{ once, margin: "-15%" }}
    >
      {children}
    </motion.div>
  );
}
