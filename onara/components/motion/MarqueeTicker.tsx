"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  items: ReactNode[];
  /** seconds to traverse one full set */
  duration?: number;
  className?: string;
  reverse?: boolean;
  separator?: ReactNode;
  itemGap?: number;
}

/**
 * Seamless marquee — renders 2 copies of the items in a single flat row and
 * animates x from 0% to -50% so exactly one copy width is travelled, making
 * the loop visually continuous with no blank tail.
 */
export default function MarqueeTicker({
  items,
  duration = 28,
  className,
  reverse = false,
  separator,
  itemGap = 40,
}: Props) {
  const reduced = useReducedMotion();
  const sep = separator ?? (
    <span
      aria-hidden
      className="inline-block rounded-full"
      style={{ width: 4, height: 4, background: "currentColor", opacity: 0.5 }}
    />
  );

  // Flatten: items, sep, items, sep, ... rendered twice
  const renderRow = (key: string) => (
    <div
      key={key}
      className="flex items-center shrink-0"
      style={{ gap: itemGap }}
    >
      {items.map((it, i) => (
        <div key={`${key}-${i}`} className="flex items-center shrink-0" style={{ gap: itemGap }}>
          {it}
          {sep}
        </div>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden
      className={`overflow-hidden whitespace-nowrap relative ${className ?? ""}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <motion.div
        className="flex"
        style={{ gap: itemGap }}
        animate={
          reduced
            ? {}
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {renderRow("a")}
        {renderRow("b")}
      </motion.div>
    </div>
  );
}
