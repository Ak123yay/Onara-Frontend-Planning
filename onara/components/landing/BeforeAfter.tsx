"use client";

import { useEffect, useRef, useState } from "react";
import { registerGsap, gsap, prefersReducedMotion, isLowPowerDevice } from "@/lib/gsap";
import { Star } from "@/lib/icons";

export default function BeforeAfterCards() {
  const [stage, setStage] = useState(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const beforeRef = useRef<HTMLDivElement | null>(null);
  const afterRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<SVGPathElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion() || isLowPowerDevice()) return;

    // Initial entrance
    gsap.from(beforeRef.current, {
      opacity: 0,
      y: 30,
      rotation: -6,
      duration: 1.1,
      delay: 0.6,
      ease: "power3.out",
    });
    gsap.from(afterRef.current, {
      opacity: 0,
      y: 60,
      rotation: 8,
      duration: 1.2,
      delay: 1,
      ease: "power3.out",
    });
    gsap.from(labelRef.current, {
      opacity: 0,
      x: -12,
      duration: 0.8,
      delay: 1.6,
      ease: "power2.out",
    });

    const path = arrowRef.current;
    if (path) {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.2,
        delay: 1.5,
        ease: "power2.inOut",
      });
    }

    const t = setInterval(() => setStage((s) => (s + 1) % 2), 3400);
    return () => clearInterval(t);
  }, []);

  // Drive depth per stage
  useEffect(() => {
    if (prefersReducedMotion() || isLowPowerDevice()) return;
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!before || !after) return;

    const beforeProps =
      stage === 0
        ? { rotation: -2, scale: 1, x: 0, y: 0, opacity: 1, zIndex: 2 }
        : { rotation: -5, scale: 0.92, x: -20, y: -8, opacity: 0.5, zIndex: 1 };
    const afterProps =
      stage === 1
        ? { rotation: 2, scale: 1, x: 0, y: 0, opacity: 1, zIndex: 2 }
        : { rotation: 5, scale: 0.92, x: 18, y: 12, opacity: 0.5, zIndex: 1 };

    gsap.to(before, { ...beforeProps, duration: 0.95, ease: "power3.inOut" });
    gsap.to(after, { ...afterProps, duration: 0.95, ease: "power3.inOut" });
  }, [stage]);

  return (
    <div ref={wrapRef} className="relative h-full w-full">
      {/* BEFORE — Google card */}
      <div
        ref={beforeRef}
        className="absolute top-0 right-4 sm:right-10 w-[320px] sm:w-[360px] bg-white rounded-xl overflow-hidden"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="px-3 py-2 border-b border-[#eee] text-[11px] text-[#5f6368] flex items-center gap-2">
          <span
            className="w-3.5 h-3.5 rounded-sm"
            style={{
              background:
                "conic-gradient(from 0deg, #4285f4, #ea4335, #fbbc04, #34a853, #4285f4)",
            }}
          />
          Google
        </div>
        <div className="p-4">
          <div className="text-[18px] text-[#202124] mb-1" style={{ fontFamily: "arial, sans-serif" }}>
            Lupita&apos;s Tacos
          </div>
          <div className="text-[12px] text-[#70757a] mb-1.5 flex items-center gap-1">
            4.7 <Star size={11} fill="#fbbc04" stroke={0} /> (842) · Mexican · $$
          </div>
          <div className="text-[12px] text-[#70757a] mb-3.5">Open · Closes 9 PM</div>
          <div className="ph h-[100px] mb-3 text-[9px]">STOREFRONT</div>
          <div className="flex gap-1.5 mb-3">
            <div className="ph flex-1 h-[50px] text-[8px]">FOOD</div>
            <div className="ph flex-1 h-[50px] text-[8px]">FOOD</div>
            <div className="ph flex-1 h-[50px] text-[8px]">INTERIOR</div>
          </div>
          <div className="text-[11px] text-[#5f6368] leading-[1.5]">
            “Best al pastor in the neighborhood, hands down. Family-run for 30 years.”
          </div>
        </div>
      </div>

      {/* AFTER — generated site */}
      <div
        ref={afterRef}
        className="absolute bottom-0 left-0 w-[420px] sm:w-[460px] bg-white rounded-xl overflow-hidden"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="chrome">
          <div className="chrome-dots">
            <span className="chrome-dot" />
            <span className="chrome-dot" />
            <span className="chrome-dot" />
          </div>
          <div className="chrome-url">lupitastacos.com</div>
        </div>
        <div className="bg-white">
          <div
            className="relative overflow-hidden h-[220px] flex items-end p-8 text-white"
            style={{ background: "linear-gradient(135deg, #2a1810 0%, #5c2818 100%)" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent 0, transparent 12px, rgba(255,255,255,0.04) 12px, rgba(255,255,255,0.04) 13px)",
              }}
            />
            <div className="relative z-10">
              <div className="mono text-white/70 mb-3" style={{ letterSpacing: "0.15em", fontSize: 10 }}>
                SINCE 1995 · EAST LA
              </div>
              <h2 className="serif text-[38px] leading-[1] m-0">Lupita&apos;s Tacos</h2>
              <div className="text-[13px] opacity-80 mt-1">Slow-braised, hand-pressed, family-made.</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 p-5">
            <div className="ph h-[70px] text-[8px]">AL PASTOR</div>
            <div className="ph h-[70px] text-[8px]">CARNITAS</div>
            <div className="ph h-[70px] text-[8px]">BARBACOA</div>
          </div>
          <div className="px-6 pb-5 mt-1.5 pt-3.5 border-t border-[var(--rule-2)] text-[11px] text-[var(--ink-3)] flex justify-between">
            <span>Mon–Sat · 11–9</span>
            <span>(323) 555-0142</span>
          </div>
        </div>
      </div>

      {/* Arrow + label */}
      <div
        ref={labelRef}
        className="absolute top-[228px] left-[260px] sm:left-[280px] flex items-center gap-2 mono"
        style={{ color: "var(--accent)" }}
      >
        <span>92 seconds</span>
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none" aria-hidden="true">
          <path
            ref={arrowRef}
            d="M2 14 Q 30 -2 56 14 M 50 8 L 56 14 L 50 20"
            stroke="var(--accent)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
