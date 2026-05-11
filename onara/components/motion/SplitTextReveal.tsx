"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  trigger?: "load" | "visible";
  as?: "span" | "div";
}

export default function SplitTextReveal({
  children,
  className,
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
  trigger = "load",
}: Props) {
  const reduced = useReducedMotion();
  const text = typeof children === "string" ? children : "";

  if (reduced || !text) {
    return <span className={className}>{children}</span>;
  }

  const words = text.split(/(\s+)/);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "108%" },
    visible: {
      y: 0,
      transition: { duration, ease: [0.2, 0.7, 0.3, 1] },
    },
  };

  const animation =
    trigger === "load"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-15%" as const },
        };

  return (
    <motion.span className={className} variants={containerVariants} {...animation}>
      {words.map((word, i) => {
        if (word.trim() === "") {
          return <span key={i}>{word}</span>;
        }
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
          >
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
