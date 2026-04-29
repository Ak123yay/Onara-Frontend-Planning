"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap, ScrollTrigger, prefersReducedMotion, isLowPowerDevice } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  start?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.9,
  start = "top 85%",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || isLowPowerDevice()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    gsap.set(el, { opacity: 0, y });
    const st = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
        });
      },
    });
    return () => {
      st.kill();
    };
  }, [delay, y, duration, start, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
