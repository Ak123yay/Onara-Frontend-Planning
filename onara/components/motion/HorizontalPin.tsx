"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface Props {
  children: ReactNode;
  /** total horizontal track width as a multiplier of viewport width */
  track?: number;
  className?: string;
  innerClassName?: string;
}

/**
 * Pins the section while the user scrolls and translates the inner track horizontally.
 * The section's own height becomes (track * 100vh) so framer can map progress smoothly.
 */
export default function HorizontalPin({
  children,
  track = 2.4,
  className,
  innerClassName,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });

  const x = useTransform(smooth, [0, 1], ["0%", `-${(1 - 1 / track) * 100}%`]);

  return (
    <section
      ref={ref}
      className={className}
      style={{ height: reduced ? "auto" : `${track * 100}vh`, position: "relative" }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center"
        style={{ position: reduced ? "static" : "sticky" }}
      >
        <motion.div
          className={innerClassName}
          style={
            reduced
              ? { width: "100%", display: "flex" }
              : { width: `${track * 100}%`, display: "flex", x }
          }
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
