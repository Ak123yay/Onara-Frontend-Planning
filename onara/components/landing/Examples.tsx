"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import MarqueeTicker from "@/components/motion/MarqueeTicker";
import { ArrowRight, Glyph } from "@/lib/icons";
import { FEATURED_SITES } from "@/lib/data";

const E_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SITES = [...FEATURED_SITES, ...FEATURED_SITES];

export default function Examples() {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Translate horizontally as user scrolls vertically through the pinned section
  const trackX = useTransform(scrollYProgress, [0, 1], ["6%", "-56%"]);
  const headlineY = useTransform(scrollYProgress, [0, 0.4, 1], [0, -16, -50]);
  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.85, 1],
    [1, 1, 0.45, 0],
  );
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="examples"
      ref={ref}
      className={`relative border-t border-[var(--rule-2)] overflow-hidden ${
        reduced ? "" : "md:h-[260vh]"
      }`}
      style={{ background: "var(--paper-2)" }}
    >
      <div
        className="md:sticky md:top-0 md:h-screen flex flex-col justify-center pt-20 md:pt-12 pb-10"
        style={{ position: reduced ? "static" : undefined }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
          <motion.div
            style={reduced ? {} : { y: headlineY, opacity: headlineOpacity }}
            className="flex items-end justify-between mb-10 md:mb-14 flex-wrap gap-4"
          >
            <div>
              <Reveal>
                <div className="eyebrow mb-3">Real generated sites</div>
                <h2 className="serif text-[clamp(34px,5vw,52px)] leading-[1.05] tracking-[-0.025em] max-w-[640px] m-0">
                  Every business gets its <span className="italic">own look</span>.
                </h2>
              </Reveal>
            </div>
            <Link href="#" className="btn btn-soft btn-sm group">
              View all 47 examples
              <motion.span
                className="inline-flex"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={13} />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Horizontal track */}
        <div className="relative">
          <motion.div
            className="flex gap-5 md:gap-6 px-6 md:px-12 will-change-transform"
            style={reduced ? {} : { x: trackX }}
          >
            {SITES.map((s, i) => (
              <ExampleCard key={`${s.name}-${i}`} site={s} index={i} />
            ))}
          </motion.div>

          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-0 w-24"
            style={{
              background: "linear-gradient(90deg, var(--paper-2), transparent)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 right-0 w-24"
            style={{
              background: "linear-gradient(270deg, var(--paper-2), transparent)",
            }}
          />
        </div>

        {/* Scroll progress + marquee row */}
        <div className="mt-10 max-w-[1200px] mx-auto w-full px-6 md:px-12">
          <div className="flex items-center gap-6 mb-6">
            <span
              className="mono"
              style={{ color: "var(--ink-4)" }}
            >
              Browse
            </span>
            <div
              className="flex-1 h-[1px] relative overflow-hidden"
              style={{ background: "var(--rule-2)" }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 origin-left"
                style={{
                  width: "100%",
                  background: "var(--accent)",
                  scaleX: reduced ? 1 : progressScale,
                }}
              />
            </div>
            <span
              className="mono tabular-nums"
              style={{ color: "var(--ink-3)" }}
            >
              {String(SITES.length).padStart(2, "0")} sites
            </span>
          </div>

          <MarqueeTicker
            duration={36}
            itemGap={48}
            items={FEATURED_SITES.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-3"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: 22,
                  letterSpacing: "-0.012em",
                  color: "var(--ink-2)",
                }}
              >
                <span
                  className="inline-flex items-center justify-center rounded-full"
                  style={{
                    width: 32,
                    height: 32,
                    background: s.color,
                    color: "white",
                  }}
                >
                  <Glyph name={s.glyph} size={16} stroke={1.5} />
                </span>
                {s.name}
                <span
                  className="mono"
                  style={{ fontSize: 10, color: "var(--ink-4)" }}
                >
                  {s.url}
                </span>
              </span>
            ))}
          />
        </div>
      </div>
    </section>
  );
}

function ExampleCard({
  site,
  index,
}: {
  site: (typeof FEATURED_SITES)[number];
  index: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 220,
    damping: 22,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 220,
    damping: 22,
  });
  const gx = useTransform(x, [-0.5, 0.5], ["20%", "80%"]);
  const gy = useTransform(y, [-0.5, 0.5], ["20%", "80%"]);
  const glareBg = useTransform(
    [gx, gy] as never,
    ([px, py]: string[]) =>
      `radial-gradient(circle at ${px} ${py}, rgba(255,255,255,0.28), transparent 55%)`,
  );

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
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
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.06,
        ease: E_OUT,
      }}
      style={{
        rotateX: reduced ? 0 : rx,
        rotateY: reduced ? 0 : ry,
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
        flex: "0 0 320px",
      }}
      className="bg-[var(--paper)] border border-[var(--rule-2)] rounded-2xl overflow-hidden cursor-pointer relative group"
    >
      <div
        className="h-[220px] flex items-center justify-center relative overflow-hidden"
        style={{ background: site.color }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), transparent 55%)",
          }}
        />
        {!reduced && (
          <motion.div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: glareBg }}
          />
        )}
        <motion.div
          className="text-white/95"
          style={{
            transformStyle: "preserve-3d",
            translateZ: 30,
            position: "relative",
            zIndex: 2,
          }}
          whileHover={
            reduced ? {} : { scale: 1.12, transition: { duration: 0.4, ease: E_OUT } }
          }
        >
          <Glyph name={site.glyph} size={72} stroke={1.4} />
        </motion.div>
        <span
          className="absolute top-3 right-3 mono text-[9px] px-2 py-1 rounded-full"
          style={{
            background: "rgba(0,0,0,0.4)",
            color: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(4px)",
            letterSpacing: "0.14em",
          }}
        >
          live
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="serif text-[20px] font-medium leading-snug">
              {site.name}
            </div>
            <div className="mono mt-1 text-[10px]">{site.type}</div>
          </div>
          <span
            className="mono shrink-0 tabular-nums"
            style={{ color: "var(--ink-4)", fontSize: 10 }}
          >
            {String((index % FEATURED_SITES.length) + 1).padStart(2, "0")}
            <span style={{ color: "var(--ink-5)" }}>
              /{FEATURED_SITES.length.toString().padStart(2, "0")}
            </span>
          </span>
        </div>
        <div className="mt-4 pt-4 border-t border-[var(--rule-2)] flex items-center justify-between">
          <span className="mono text-[9px] text-[var(--ink-3)] truncate">
            {site.url}
          </span>
          <motion.span
            className="text-[var(--ink-3)] group-hover:text-[var(--accent-ink)] transition-colors"
            whileHover={{ x: 3 }}
          >
            <ArrowRight size={12} />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
