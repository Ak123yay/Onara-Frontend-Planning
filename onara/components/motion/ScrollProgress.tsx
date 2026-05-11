"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress({
  color = "var(--accent)",
}: {
  color?: string;
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.4,
  });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] origin-left"
      style={{
        height: 2,
        background: color,
        scaleX,
      }}
    />
  );
}
