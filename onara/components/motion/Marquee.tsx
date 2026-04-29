"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap, prefersReducedMotion, isLowPowerDevice } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  speed = 60,
  pauseOnHover = true,
  className,
}: {
  children: ReactNode;
  speed?: number; // pixels per second
  pauseOnHover?: boolean;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerGsap();
    const t = track.current;
    if (!t) return;
    if (prefersReducedMotion() || isLowPowerDevice()) return;

    const half = t.scrollWidth / 2;
    const duration = half / speed;
    const tween = gsap.to(t, {
      x: -half,
      duration,
      ease: "none",
      repeat: -1,
    });

    if (pauseOnHover && wrap.current) {
      const w = wrap.current;
      const onEnter = () => tween.timeScale(0.25);
      const onLeave = () => tween.timeScale(1);
      w.addEventListener("mouseenter", onEnter);
      w.addEventListener("mouseleave", onLeave);
      return () => {
        w.removeEventListener("mouseenter", onEnter);
        w.removeEventListener("mouseleave", onLeave);
        tween.kill();
      };
    }
    return () => {
      tween.kill();
    };
  }, [speed, pauseOnHover]);

  return (
    <div ref={wrap} className={cn("overflow-hidden", className)}>
      <div ref={track} className="flex w-max gap-12 will-change-transform">
        <div className="flex shrink-0 gap-12">{children}</div>
        <div className="flex shrink-0 gap-12" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
