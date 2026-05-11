"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  count?: number;
  className?: string;
  color?: string;
  size?: [number, number];
}

export default function Particles({
  count = 28,
  className,
  color = "rgba(247,232,218,0.55)",
  size = [2, 5],
}: Props) {
  const reduced = useReducedMotion();
  const dots = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const seed = (i * 9301 + 49297) % 233280;
      const r = (seed / 233280);
      const r2 = ((i * 1103515245 + 12345) % 2147483648) / 2147483648;
      return {
        x: r * 100,
        y: r2 * 100,
        s: size[0] + r * (size[1] - size[0]),
        d: 6 + r2 * 8,
        delay: r * 4,
        drift: 30 + r2 * 60,
      };
    });
  }, [count, size]);

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className ?? ""}`}
    >
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.s,
            height: d.s,
            background: color,
            boxShadow: `0 0 ${d.s * 2}px ${color}`,
          }}
          animate={{
            y: [0, -d.drift, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: d.d,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
