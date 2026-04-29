"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, prefersReducedMotion, isLowPowerDevice } from "@/lib/gsap";

const AGENTS = [
  { id: 1, name: "Analyst", desc: "Reads your reviews, photos, and menu." },
  { id: 2, name: "Writer", desc: "Drafts hero copy, about page, menu descriptions." },
  { id: 3, name: "Style", desc: "Picks colors and type from your photos." },
  { id: 4, name: "Planner", desc: "Maps the site structure." },
  { id: 5, name: "Prompt Engineer", desc: "Briefs the code generator." },
  { id: 6, name: "Code Generator", desc: "Writes your site, component by component." },
  { id: 7, name: "Debugger", desc: "Catches issues before you see them." },
  { id: 8, name: "SEO", desc: "Adds metadata and schema for Google." },
  { id: 9, name: "QA", desc: "Validates accessibility and performance." },
  { id: 10, name: "Mobile", desc: "Polishes the small-screen experience." },
];

export default function AgentReveal() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const items = itemRefs.current;
    const progress = progressRef.current;
    if (!section || items.length === 0) return;

    if (prefersReducedMotion() || isLowPowerDevice()) {
      items.forEach((el) => gsap.set(el, { opacity: 1, y: 0 }));
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(eyebrowRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.8,
        scrollTrigger: { trigger: eyebrowRef.current, start: "top 85%" },
      });
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 24,
        duration: 1,
        scrollTrigger: { trigger: headlineRef.current, start: "top 85%" },
      });

      items.forEach((el) => {
        gsap.set(el, { opacity: 0.18, x: -10, willChange: "transform, opacity" });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2400",
          scrub: 0.6,
          pin: stickyRef.current,
          anticipatePin: 1,
        },
      });

      items.forEach((el) => {
        tl.to(el, { opacity: 1, x: 0, duration: 0.6 }, ">-=0.2");
        tl.to(progress, { width: `${((items.indexOf(el) + 1) / items.length) * 100}%`, duration: 0.4 }, "<");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[var(--paper-2)]/40">
      <div ref={stickyRef} className="relative min-h-screen px-6 md:px-12 py-16 md:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        {/* Left — sticky title */}
        <div>
          <div ref={eyebrowRef} className="eyebrow mb-5">
            How it works
          </div>
          <h2
            ref={headlineRef}
            className="serif text-[clamp(36px,5.5vw,72px)] leading-[1.02] tracking-[-0.025em] m-0"
          >
            Ten small agents.<br />
            <span className="text-[var(--accent)] italic">One finished site.</span>
          </h2>
          <p className="mt-6 text-[15px] text-[var(--ink-2)] leading-[1.55] max-w-[420px]">
            Smaller, specialized models give you a better site than one big model trying to do everything. Scroll to meet them.
          </p>
          <div className="mt-9 max-w-[360px]">
            <div className="h-[3px] bg-[var(--rule-2)] rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-[var(--accent)] rounded-full"
                style={{ width: "0%" }}
              />
            </div>
            <div className="mono mt-2 text-[10px]">progress</div>
          </div>
        </div>

        {/* Right — agent list */}
        <div className="space-y-6">
          {AGENTS.map((a, i) => (
            <div
              key={a.id}
              ref={(el) => {
                if (el) itemRefs.current[i] = el;
              }}
              className="flex gap-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-full border border-[var(--rule)] bg-[var(--paper)] flex items-center justify-center serif text-[18px] text-[var(--accent-ink)]">
                {a.id}
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="serif text-[22px] md:text-[26px]">{a.name}</span>
                  <span className="mono text-[10px]">agent {a.id}/10</span>
                </div>
                <p className="mt-1 text-[14px] text-[var(--ink-2)] leading-[1.55]">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
