"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import MagneticButton from "@/components/motion/MagneticButton";
import { ArrowRight } from "@/lib/icons";
import { registerGsap, gsap, prefersReducedMotion, isLowPowerDevice } from "@/lib/gsap";

export default function CTABanner() {
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion() || isLowPowerDevice()) return;
    const word = wordRef.current;
    if (!word) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        word,
        { backgroundSize: "0% 78%" },
        {
          backgroundSize: "100% 78%",
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: word, start: "top 70%", once: true },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 py-24 md:py-32 text-center relative overflow-hidden"
    >
      <h2 className="serif text-[clamp(40px,7vw,84px)] leading-[1] tracking-[-0.03em] m-0 max-w-[1000px] mx-auto">
        Don&apos;t start from a{" "}
        <span
          ref={wordRef}
          className="italic"
          style={{
            backgroundImage: "linear-gradient(transparent 22%, var(--accent-soft) 22%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "0% 78%",
            paddingInline: "0.1em",
          }}
        >
          blank page
        </span>
        .
      </h2>
      <p className="mt-7 max-w-[520px] mx-auto text-[16px] text-[var(--ink-3)] leading-[1.55]">
        Start where you already are — your Google listing — and have a finished site in 90 seconds.
      </p>
      <div className="mt-10 inline-flex items-center gap-5 flex-wrap justify-center">
        <MagneticButton href="/build" className="btn btn-accent btn-lg">
          Build mine free
          <ArrowRight size={14} />
        </MagneticButton>
        <Link href="/pricing" className="text-[13px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors">
          See pricing →
        </Link>
      </div>
    </section>
  );
}
