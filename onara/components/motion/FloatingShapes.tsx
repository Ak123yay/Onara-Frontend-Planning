"use client";

import { motion, useReducedMotion } from "framer-motion";

type Shape = {
  type: "circle" | "square" | "ring";
  x: string;
  y: string;
  size: number;
  color: string;
  delay: number;
  duration: number;
};

const DEFAULT_SHAPES: Shape[] = [
  { type: "circle", x: "8%", y: "20%", size: 14, color: "var(--accent)", delay: 0, duration: 9 },
  { type: "ring", x: "92%", y: "12%", size: 28, color: "var(--accent-ink)", delay: 0.5, duration: 11 },
  { type: "square", x: "12%", y: "78%", size: 10, color: "var(--ink)", delay: 1.2, duration: 8 },
  { type: "circle", x: "88%", y: "70%", size: 18, color: "var(--accent)", delay: 0.8, duration: 12 },
  { type: "ring", x: "20%", y: "45%", size: 36, color: "var(--rule)", delay: 0.3, duration: 14 },
  { type: "circle", x: "78%", y: "40%", size: 8, color: "var(--accent-ink)", delay: 1.6, duration: 10 },
];

export default function FloatingShapes({
  shapes = DEFAULT_SHAPES,
  opacity = 0.5,
}: {
  shapes?: Shape[];
  opacity?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: s.y,
            left: s.x,
            width: s.size,
            height: s.size,
            opacity,
            borderRadius: s.type === "circle" ? "50%" : s.type === "ring" ? "50%" : 2,
            background: s.type === "ring" ? "transparent" : s.color,
            border: s.type === "ring" ? `1.5px solid ${s.color}` : undefined,
          }}
          animate={{
            y: [0, -22, 0, 22, 0],
            x: [0, 14, -10, 6, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [opacity * 0.6, opacity, opacity * 0.6],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
