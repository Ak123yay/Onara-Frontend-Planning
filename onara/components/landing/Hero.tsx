"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import { ArrowRight } from "@/lib/icons";
import { registerGsap, gsap, prefersReducedMotion, isLowPowerDevice } from "@/lib/gsap";

export default function Hero() {
  const blobRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const ctasRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    registerGsap();
    const eyebrow = eyebrowRef.current;
    const sub = subRef.current;
    const ctas = ctasRef.current;
    if (prefersReducedMotion() || isLowPowerDevice()) {
      gsap.set([eyebrow, sub, ctas], { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }

    const ctx = gsap.context(() => {
      // Eyebrow + sub fade
      gsap.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.9, delay: 0.2, ease: "power3.out" });
      gsap.to(subRef.current, { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power3.out" });
      gsap.to(ctasRef.current, { opacity: 1, y: 0, duration: 1, delay: 1.45, ease: "power3.out" });

      // Animated terracotta blob
      const blob = blobRef.current;
      if (blob) {
        gsap.to(blob, {
          rotation: 360,
          duration: 60,
          repeat: -1,
          ease: "none",
        });
        gsap.to(blob, {
          scale: 1.08,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Mouse parallax on hero decorations
      const hero = heroRef.current;
      if (hero && blob) {
        const setBlobX = gsap.quickTo(blob, "x", { duration: 1.1, ease: "power3.out" });
        const setBlobY = gsap.quickTo(blob, "y", { duration: 1.1, ease: "power3.out" });
        const onMove = (e: MouseEvent) => {
          const r = hero.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          setBlobX(x * 30);
          setBlobY(y * 30);
        };
        hero.addEventListener("mousemove", onMove);
        return () => hero.removeEventListener("mousemove", onMove);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative px-6 md:px-12 pt-8 md:pt-16 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Terracotta blob */}
      <div
        ref={blobRef}
        aria-hidden="true"
        className="absolute -z-10 pointer-events-none"
        style={{
          right: "-8%",
          top: "0%",
          width: 540,
          height: 540,
          background:
            "radial-gradient(circle at 35% 35%, rgba(177,90,58,0.18) 0%, rgba(177,90,58,0.04) 50%, transparent 70%)",
          filter: "blur(20px)",
          willChange: "transform",
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center max-w-[1400px] mx-auto">
        {/* Left — copy */}
        <div className="relative">
          <div
            ref={eyebrowRef}
            className="eyebrow mb-5"
            style={{ opacity: 0, transform: "translate3d(0, 20px, 0)" }}
          >
            For independent restaurants &amp; cafés
          </div>

          <h1 className="serif font-normal m-0 leading-[0.98] tracking-[-0.03em] text-[clamp(40px,7vw,80px)]">
            <SplitTextReveal as="span" className="block" stagger={0.05} duration={0.95}>
              Your Google listing,
            </SplitTextReveal>
            <SplitTextReveal as="span" className="block" delay={0.45} stagger={0.05} duration={0.95}>
              turned into a real
            </SplitTextReveal>
            <span className="block relative">
              <SplitTextReveal as="span" delay={0.95} stagger={0.05} duration={0.95}>
                website.
              </SplitTextReveal>
              <Underline />
            </span>
          </h1>

          <p
            ref={subRef}
            className="mt-7 max-w-[480px] text-[17px] leading-[1.55] text-[var(--ink-2)]"
            style={{ opacity: 0, transform: "translate3d(0, 18px, 0)" }}
          >
            Type your business name. Watch ten agents read your reviews, photos, hours and menu — and build you a custom site in 90 seconds. No templates. No drag-and-drop.
          </p>

          <div
            ref={ctasRef}
            className="mt-9 flex items-center gap-4 flex-wrap"
            style={{ opacity: 0, transform: "translate3d(0, 18px, 0)" }}
          >
            <MagneticButton href="/build" className="btn btn-accent btn-lg">
              Build mine free
              <ArrowRight size={14} />
            </MagneticButton>
            <Link href="#examples" className="text-[13px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors">
              No card. See it before you sign up.
            </Link>
          </div>
        </div>

        {/* Right — before/after slot. Imported from BeforeAfter so this hero stays compositional */}
        <div className="relative h-[460px] sm:h-[520px] md:h-[560px]">
          <BeforeAfterCards />
        </div>
      </div>
    </section>
  );
}

function Underline() {
  const pathRef = useRef<SVGPathElement | null>(null);
  useLayoutEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const p = pathRef.current;
    if (!p) return;
    p.style.opacity = "1";
    const len = p.getTotalLength();
    p.style.strokeDasharray = `${len}`;
    p.style.strokeDashoffset = `${len}`;
    gsap.to(p, {
      strokeDashoffset: 0,
      duration: 1.4,
      delay: 1.95,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 18"
      preserveAspectRatio="none"
      className="absolute -bottom-3 left-0 w-[60%] h-[12px]"
    >
      <path
        ref={pathRef}
        d="M2 12 Q 80 0, 160 8 T 318 6"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        style={{ opacity: 0 }}
      />
    </svg>
  );
}

import BeforeAfterCards from "./BeforeAfter";
