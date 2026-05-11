"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const INTERACTIVE =
  "a, button, [role='button'], .btn, .chip, input, textarea, select, [data-cursor='interactive']";

/**
 * Minimalist editorial cursor — a single thin ring that grows on interactive elements.
 * No mix-blend-mode, no inner dot, no pulsing — designed to feel premium and ignored.
 */
export default function CursorFollower() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-50);
  const y = useMotionValue(-50);
  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.5 });

  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      setInteractive(!!t?.closest(INTERACTIVE));
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerenter", onEnter);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerenter", onEnter);
    };
  }, [reduced, x, y]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full"
      style={{
        x: ringX,
        y: ringY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: interactive ? 44 : 22,
        height: interactive ? 44 : 22,
        borderWidth: 1,
        borderColor: interactive
          ? "rgba(177, 90, 58, 0.55)"
          : "rgba(26, 24, 21, 0.35)",
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 240, damping: 26 }}
    />
  );
}
