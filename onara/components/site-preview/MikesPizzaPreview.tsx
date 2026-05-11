"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, Pizza } from "@/lib/icons";

interface Props {
  height?: number;
  compact?: boolean;
}

export default function MikesPizzaPreview({ height = 500, compact = false }: Props) {
  const innerH = height - 60;
  const reduced = useReducedMotion();

  return (
    <div style={{ background: "#1a1410", color: "#f7f0e2", height }}>
      <div className="flex items-center justify-between px-6 sm:px-10 pt-5 pb-4">
        <div className="serif text-[20px] sm:text-[22px] font-semibold" style={{ color: "#ff8a4c" }}>
          Mike&apos;s Pizza
        </div>
        <div className="hidden sm:flex gap-5 text-[12px]" style={{ color: "#bcb0a0" }}>
          <span>Menu</span>
          <span>Hours</span>
          <span>Visit</span>
          <span style={{ color: "#ff8a4c" }}>Order →</span>
        </div>
      </div>
      <div
        className="grid sm:grid-cols-[1.1fr_1fr] gap-6 sm:gap-10 px-6 sm:px-10 items-center"
        style={{ height: innerH }}
      >
        <div>
          <div
            className="mb-3.5 inline-flex items-center"
            style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#ff8a4c",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            Wood-fired · since 2008
          </div>
          <div
            className="serif font-medium"
            style={{
              fontSize: compact ? 36 : "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Austin&apos;s slowest<br />pizza dough.
          </div>
          <div
            className="text-[12px] sm:text-[13px] mt-3 sm:mt-4 max-w-[380px] leading-[1.6]"
            style={{ color: "#bcb0a0" }}
          >
            72-hour cold ferment, San Marzano tomatoes, fior di latte. Open till 10 — walk in or order online.
          </div>
          <div className="mt-5 sm:mt-7 flex gap-2.5 flex-wrap">
            <span
              className="px-4 sm:px-5 py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-semibold rounded-xl"
              style={{ background: "#ff8a4c", color: "#1a1410" }}
            >
              See the menu
            </span>
            <span
              className="px-4 sm:px-5 py-2.5 sm:py-3 text-[12px] sm:text-[13px] rounded-xl"
              style={{ border: "1px solid #46382a", color: "#f7f0e2" }}
            >
              (512) 555-0182
            </span>
          </div>
          <div
            className="mt-6 sm:mt-8 flex gap-4 text-[10px] sm:text-[11px] flex-wrap"
            style={{ color: "#857762", fontFamily: "var(--font-jetbrains), monospace" }}
          >
            <span className="inline-flex items-center gap-1">
              <Star size={11} fill="#ff8a4c" stroke={0} /> 4.6 · 312 reviews
            </span>
            <span>218 Congress Ave</span>
          </div>
        </div>
        <div
          className="rounded-2xl relative overflow-hidden hidden sm:flex items-center justify-center"
          style={{
            height: Math.min(innerH - 60, 360),
            background: "radial-gradient(circle at 50% 50%, #d96838, #8a2f10)",
          }}
        >
          {/* ambient glow — sits behind the pizza */}
          <motion.div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,180,120,0.25), transparent 65%)",
              zIndex: 0,
            }}
            animate={reduced ? {} : { opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            initial={reduced ? {} : { rotate: -8, scale: 0.92 }}
            animate={reduced ? {} : { rotate: [-8, -4, -8], scale: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "#1a1410", position: "relative", zIndex: 1 }}
          >
            <Pizza size={compact ? 130 : 180} stroke={1.4} />
          </motion.div>
          <div
            className="absolute bottom-4 left-4 right-4 px-3.5 py-2.5 rounded-xl text-[11px] flex justify-between"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", color: "#f7f0e2" }}
          >
            <span>Margherita Classic</span>
            <span>$14</span>
          </div>
        </div>
      </div>
    </div>
  );
}
