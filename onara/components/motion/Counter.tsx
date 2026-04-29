"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, ScrollTrigger, prefersReducedMotion, isLowPowerDevice } from "@/lib/gsap";

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || isLowPowerDevice()) {
      el.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
      return;
    }
    const obj = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: to,
          duration,
          ease: "power3.out",
          onUpdate: () => {
            const formatted = decimals
              ? obj.v.toFixed(decimals)
              : Math.round(obj.v).toLocaleString("en-US");
            el.textContent = `${prefix}${formatted}${suffix}`;
          },
        });
      },
    });
    return () => {
      st.kill();
    };
  }, [to, prefix, suffix, decimals, duration]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
