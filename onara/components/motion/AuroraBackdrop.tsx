"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  className?: string;
  intensity?: number;
}

export default function AuroraBackdrop({ className, intensity = 0.55 }: Props) {
  const reduced = useReducedMotion();

  const blobs = [
    {
      color: "rgba(177, 90, 58, 0.55)",
      x: ["-10%", "20%", "-5%"],
      y: ["10%", "30%", "0%"],
      size: 520,
      delay: 0,
      duration: 14,
    },
    {
      color: "rgba(207, 174, 131, 0.55)",
      x: ["80%", "60%", "85%"],
      y: ["10%", "40%", "5%"],
      size: 480,
      delay: 1,
      duration: 16,
    },
    {
      color: "rgba(106, 140, 95, 0.32)",
      x: ["50%", "30%", "60%"],
      y: ["70%", "50%", "75%"],
      size: 560,
      delay: 2,
      duration: 18,
    },
    {
      color: "rgba(201, 117, 82, 0.45)",
      x: ["10%", "40%", "5%"],
      y: ["80%", "60%", "85%"],
      size: 440,
      delay: 0.5,
      duration: 13,
    },
  ];

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className ?? ""}`}
      style={{ opacity: intensity }}
    >
      {/* base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, rgba(247,232,218,0.9) 0%, transparent 60%)",
        }}
      />
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            background: b.color,
            filter: "blur(80px)",
            mixBlendMode: "multiply",
          }}
          initial={false}
          animate={
            reduced
              ? { left: b.x[0], top: b.y[0] }
              : { left: b.x, top: b.y, scale: [1, 1.12, 1] }
          }
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
            repeatType: "mirror",
          }}
        />
      ))}
      {/* grain shimmer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 5px)",
          mixBlendMode: "soft-light",
        }}
        animate={reduced ? {} : { backgroundPositionX: ["0%", "200%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
