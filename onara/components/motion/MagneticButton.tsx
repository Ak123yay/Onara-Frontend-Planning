"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap, prefersReducedMotion, isLowPowerDevice } from "@/lib/gsap";

export default function MagneticButton({
  children,
  className,
  strength = 0.35,
  radius = 130,
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    if (prefersReducedMotion() || isLowPowerDevice()) return;

    const setOuterX = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const setOuterY = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });
    const setInnerX = gsap.quickTo(inner, "x", { duration: 0.35, ease: "power3.out" });
    const setInnerY = gsap.quickTo(inner, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        const f = (1 - dist / radius) * strength;
        setOuterX(dx * f);
        setOuterY(dy * f);
        setInnerX(dx * f * 0.4);
        setInnerY(dy * f * 0.4);
      } else {
        setOuterX(0);
        setOuterY(0);
        setInnerX(0);
        setInnerY(0);
      }
    };

    const onEnter = () => {
      window.addEventListener("pointermove", onMove);
    };
    const onLeave = () => {
      window.removeEventListener("pointermove", onMove);
      setOuterX(0);
      setOuterY(0);
      setInnerX(0);
      setInnerY(0);
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [radius, strength]);

  const inner = (
    <span ref={innerRef} className="inline-flex items-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        className={className}
        style={{ display: "inline-flex", willChange: "transform" }}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={className}
      style={{ display: "inline-flex", willChange: "transform" }}
    >
      {inner}
    </button>
  );
}
