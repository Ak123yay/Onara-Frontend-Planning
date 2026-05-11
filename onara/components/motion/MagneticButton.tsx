"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className,
  strength = 0.32,
  href,
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const innerX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 });
  const innerY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 });

  const onMove = (e: MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={{ x: innerX, y: innerY, display: "inline-flex", alignItems: "center", gap: 8 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.span
        style={{ x: springX, y: springY, display: "inline-flex" }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onClick={onClick}
          className={cn("inline-flex items-center justify-center", className)}
        >
          {inner}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("inline-flex items-center justify-center", className)}
      style={{ x: springX, y: springY }}
    >
      {inner}
    </motion.button>
  );
}
