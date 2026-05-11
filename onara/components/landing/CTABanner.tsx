"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/motion/MagneticButton";
import MarqueeTicker from "@/components/motion/MarqueeTicker";
import { ArrowRight, Glyph } from "@/lib/icons";
import { FEATURED_SITES } from "@/lib/data";

const E_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CTABanner() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();

  return (
    <section
      className="px-6 md:px-12 pt-28 md:pt-32 pb-16 md:pb-20 text-center relative overflow-hidden"
      style={{ background: "var(--ink)", color: "var(--paper)" }}
    >
      {/* slow conic ambient */}
      {!reduced && (
        <motion.div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            width: 1400,
            height: 1400,
            marginLeft: -700,
            marginTop: -700,
            background:
              "conic-gradient(from 0deg, rgba(177,90,58,0.14), transparent 28%, rgba(207,174,131,0.10) 60%, transparent 80%, rgba(177,90,58,0.14))",
            filter: "blur(80px)",
            opacity: 0.7,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Floating sparkle motes */}
      {!reduced && (
        <>
          {[
            { top: "18%", left: "12%", size: 5, delay: 0, dur: 7 },
            { top: "30%", left: "82%", size: 4, delay: 1.4, dur: 8 },
            { top: "62%", left: "18%", size: 6, delay: 2.6, dur: 9 },
            { top: "70%", left: "76%", size: 4, delay: 0.8, dur: 7.5 },
            { top: "44%", left: "8%", size: 3, delay: 3.2, dur: 6.5 },
            { top: "12%", left: "62%", size: 4, delay: 2.0, dur: 8.5 },
          ].map((s, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute pointer-events-none rounded-full"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                background: "var(--accent-2)",
                boxShadow: "0 0 12px rgba(207,174,131,0.8)",
              }}
              animate={{
                y: [0, -22, 0],
                opacity: [0, 0.9, 0],
                scale: [0.6, 1, 0.6],
              }}
              transition={{
                duration: s.dur,
                repeat: Infinity,
                delay: s.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}

      <div ref={ref} className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="mono mb-6"
          style={{ color: "var(--ink-4)" }}
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: E_OUT }}
        >
          The simplest way to start
        </motion.div>

        <h2
          className="serif font-light tracking-[-0.03em] m-0"
          style={{ fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 1.0 }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, ease: E_OUT }}
          >
            Stop staring at a
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.18, ease: E_OUT }}
          >
            <motion.span
              className="serif italic relative inline-block"
              style={
                reduced
                  ? { color: "var(--paper)" }
                  : {
                      backgroundImage:
                        "linear-gradient(90deg, #faf7f2 0%, #ff9d72 45%, #c97552 60%, #faf7f2 100%)",
                      backgroundSize: "220% 100%",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }
              }
              animate={
                inView && !reduced
                  ? { backgroundPositionX: ["0%", "220%"] }
                  : {}
              }
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              blank page
              {!reduced && (
                <motion.span
                  aria-hidden
                  className="absolute left-0 right-0 origin-left"
                  style={{
                    bottom: "-0.06em",
                    height: 2.5,
                    background: "var(--accent)",
                    borderRadius: 2,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1.0, delay: 1.4, ease: E_OUT }}
                />
              )}
            </motion.span>
            .
          </motion.span>
        </h2>

        <motion.p
          className="mt-7 max-w-[480px] mx-auto text-[16px] md:text-[17px] leading-[1.55]"
          style={{ color: "var(--ink-4)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: E_OUT }}
        >
          Onara starts where you already are — your Google Business Profile.
        </motion.p>

        <motion.div
          className="mt-10 inline-flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: E_OUT }}
        >
          <MagneticButton href="/build" className="btn btn-accent btn-lg">
            Try it with your business
            <ArrowRight size={15} />
          </MagneticButton>
          <span className="mono" style={{ color: "var(--ink-4)" }}>
            14 days of Pro · No card required
          </span>
        </motion.div>
      </div>

      {/* ticker — restrained colour, hairline rules above and below */}
      <div
        className="mt-20 relative"
        style={{ color: "rgba(247,232,218,0.55)" }}
      >
        <div
          aria-hidden
          className="absolute left-0 right-0 top-0 h-px"
          style={{ background: "rgba(247,232,218,0.10)" }}
        />
        <div
          aria-hidden
          className="absolute left-0 right-0 bottom-0 h-px"
          style={{ background: "rgba(247,232,218,0.10)" }}
        />
        <MarqueeTicker
          duration={42}
          itemGap={48}
          items={FEATURED_SITES.concat(FEATURED_SITES).map((s, i) => (
            <span
              key={`${s.name}-${i}`}
              className="inline-flex items-center gap-3 py-5"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <span style={{ color: "var(--accent-2)" }}>
                <Glyph name={s.glyph} size={14} stroke={1.5} />
              </span>
              {s.name}
            </span>
          ))}
        />
      </div>

      {/* ambient warm floor */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: -180,
          left: "50%",
          width: 760,
          height: 380,
          marginLeft: -380,
          background:
            "radial-gradient(ellipse at center, rgba(177,90,58,0.28) 0%, transparent 65%)",
          filter: "blur(24px)",
        }}
        animate={reduced ? {} : { opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
