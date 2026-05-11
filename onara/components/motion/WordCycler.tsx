"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface Props {
  words: string[];
  interval?: number;
  className?: string;
  /** color override for the cycling word — defaults to accent ink */
  accent?: boolean;
}

export default function WordCycler({
  words,
  interval = 2200,
  className,
  accent = true,
}: Props) {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval, reduced]);

  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
      }}
    >
      {/* invisible spacer to reserve max width */}
      <span style={{ visibility: "hidden", display: "inline-block" }}>
        {longest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          className="hand-u"
          initial={reduced ? false : { y: "100%", opacity: 0, rotate: -3 }}
          animate={{ y: "0%", opacity: 1, rotate: 0 }}
          exit={reduced ? { opacity: 0 } : { y: "-100%", opacity: 0, rotate: 3 }}
          transition={{ duration: 0.55, ease: [0.2, 0.7, 0.3, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            display: "inline-block",
            color: accent ? "var(--accent-ink)" : "inherit",
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
