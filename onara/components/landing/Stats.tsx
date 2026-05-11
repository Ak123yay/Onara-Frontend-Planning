"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Counter from "@/components/motion/Counter";

const E_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STATS: { n: string; number: ReactNode; label: string }[] = [
  {
    n: "01",
    number: (
      <>
        <Counter to={90} />s
      </>
    ),
    label: "name to live site",
  },
  { n: "02", number: <Counter to={10} />, label: "specialised AI agents" },
  { n: "03", number: "$0", label: "first-site cost" },
  {
    n: "04",
    number: (
      <>
        <Counter to={3} /> plans
      </>
    ),
    label: "free, $12, $29",
  },
];

export default function Stats() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 py-24 md:py-28 border-t border-[var(--rule-2)] relative overflow-hidden"
    >
      {/* sparse vertical rule pattern, slowly drifting */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,0,0,0.025) 0 1px, transparent 1px 120px)",
          backgroundPositionX: bgX,
          opacity: 0.55,
        }}
      />

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-10">
        {STATS.map((s, i) => (
          <Stat key={s.n} indexLabel={s.n} number={s.number} label={s.label} index={i} />
        ))}
      </div>
    </section>
  );
}

function Stat({
  indexLabel,
  number,
  label,
  index,
}: {
  indexLabel: string;
  number: ReactNode;
  label: string;
  index: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={reduced ? {} : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: E_OUT }}
      whileHover={reduced ? {} : { y: -3, transition: { duration: 0.25 } }}
      className="relative cursor-default group"
    >
      <div
        className="mono mb-3 flex items-center gap-2"
        style={{ color: "var(--ink-4)" }}
      >
        <span
          className="inline-block w-3 h-[1px]"
          style={{ background: "var(--accent)" }}
        />
        {indexLabel}
      </div>

      <div className="serif text-[44px] md:text-[60px] leading-[0.95] tracking-[-0.025em] font-normal relative inline-block">
        {number}
        <motion.span
          aria-hidden
          className="absolute -bottom-1.5 left-0 h-[2px] origin-left"
          style={{
            width: "55%",
            background:
              "linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 50%, var(--accent) 100%)",
            backgroundSize: "200% 100%",
          }}
          initial={{ scaleX: 0, backgroundPositionX: "0%" }}
          animate={
            inView
              ? { scaleX: 1, backgroundPositionX: ["0%", "200%"] }
              : {}
          }
          transition={{
            scaleX: { duration: 0.8, delay: 0.4 + index * 0.08, ease: E_OUT },
            backgroundPositionX: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      </div>
      <div
        className="mt-4 text-[13.5px] leading-[1.4]"
        style={{ color: "var(--ink-3)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}
