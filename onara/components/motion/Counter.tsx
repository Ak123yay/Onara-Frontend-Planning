"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";

interface Props {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const value = useMotionValue(0);
  const reduced = useReducedMotion();
  const formatted = useTransform(value, (v) =>
    decimals
      ? v.toFixed(decimals)
      : Math.round(v).toLocaleString("en-US"),
  );

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, {
      duration,
      ease: [0.2, 0.7, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, reduced, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{formatted}</motion.span>
      {suffix}
    </span>
  );
}
