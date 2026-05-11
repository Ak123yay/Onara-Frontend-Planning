"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  intensity?: number;
  glare?: boolean;
}

export default function Tilt3D({
  children,
  className,
  style,
  intensity = 10,
  glare = true,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 200,
    damping: 18,
    mass: 0.4,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 200,
    damping: 18,
    mass: 0.4,
  });
  const gx = useTransform(x, [-0.5, 0.5], ["20%", "80%"]);
  const gy = useTransform(y, [-0.5, 0.5], ["20%", "80%"]);

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        rotateX: reduced ? 0 : rx,
        rotateY: reduced ? 0 : ry,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
        position: "relative",
        ...style,
      }}
    >
      {children}
      {glare && !reduced && (
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity"
          style={{
            background: useTransform(
              [gx, gy] as never,
              ([px, py]: string[]) =>
                `radial-gradient(circle at ${px} ${py}, rgba(255,255,255,0.18), transparent 55%)`,
            ),
          }}
        />
      )}
    </motion.div>
  );
}
