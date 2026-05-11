"use client";

import { useRef, useState, type FormEvent, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useVelocity,
  useReducedMotion,
} from "framer-motion";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Magnetic from "@/components/motion/Magnetic";
import AuroraBackdrop from "@/components/motion/AuroraBackdrop";
import WordCycler from "@/components/motion/WordCycler";
import BrowserMock from "@/components/site-preview/BrowserMock";
import MikesPizzaPreview from "@/components/site-preview/MikesPizzaPreview";
import { SearchIcon, ArrowRight, Sparkles } from "@/lib/icons";

const CYCLES = ["pizza shop", "florist", "salon", "cafe", "clinic", "studio"];
const E_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const router = useRouter();
  const [q, setQ] = useState("Mike's Pizza Austin TX");
  const [focused, setFocused] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const mockRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const blobX = useSpring(mx, { stiffness: 50, damping: 20 });
  const blobY = useSpring(my, { stiffness: 50, damping: 20 });
  const blob2X = useSpring(useTransform(mx, (v) => -v * 0.6), {
    stiffness: 50,
    damping: 20,
  });
  const blob2Y = useSpring(useTransform(my, (v) => -v * 0.6), {
    stiffness: 50,
    damping: 20,
  });

  // Floating chip parallax (different strengths)
  const chipAX = useTransform(mx, (v) => v * 0.6);
  const chipAY = useTransform(my, (v) => v * 0.6);
  const chipBX = useTransform(mx, (v) => -v * 0.7);
  const chipBY = useTransform(my, (v) => -v * 0.7);
  const chipCX = useTransform(mx, (v) => v * 0.4);
  const chipCY = useTransform(my, (v) => v * 0.4);

  // Mock tilt
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const sTiltX = useSpring(tiltX, { stiffness: 200, damping: 20 });
  const sTiltY = useSpring(tiltY, { stiffness: 200, damping: 20 });

  // Mock scroll
  const { scrollYProgress } = useScroll({
    target: mockRef,
    offset: ["start end", "end start"],
  });
  const mockRotate = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -4]);
  const mockY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const mockScale = useTransform(scrollYProgress, [0, 0.4], [0.96, 1]);
  const composedRotateX = useTransform(
    [mockRotate, sTiltY] as never,
    ([a, b]: number[]) => a + b,
  );

  // Page scroll & velocity for editorial parallax
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 60]);
  const headlineScale = useTransform(scrollY, [0, 600], [1, 0.96]);
  const headlineBlur = useTransform(scrollY, [0, 600], [0, 1.5]);
  const headlineFilter = useTransform(headlineBlur, (v) => `blur(${v}px)`);

  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
  });
  const skew = useTransform(smoothVelocity, [-3000, 0, 3000], [3, 0, -3]);

  const onMouseMove = (e: MouseEvent) => {
    if (reduced || !heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 30);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 30);
  };

  const onMockMove = (e: MouseEvent) => {
    if (reduced || !mockRef.current) return;
    const r = mockRef.current.getBoundingClientRect();
    tiltX.set(((e.clientX - r.left) / r.width - 0.5) * -8);
    tiltY.set(((e.clientY - r.top) / r.height - 0.5) * 6);
  };
  const onMockLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/build?q=${encodeURIComponent(q)}`);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      className="relative px-6 md:px-10 pt-[70px] md:pt-[110px] pb-[60px] text-center overflow-hidden"
    >
      <AuroraBackdrop intensity={0.5} />

      {/* Warm orb */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none -z-10"
        style={{
          top: -100,
          right: -50,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "var(--accent-soft)",
          filter: "blur(48px)",
          opacity: 0.6,
          x: blobX,
          y: blobY,
        }}
        animate={reduced ? {} : { scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute pointer-events-none -z-10"
        style={{
          top: 120,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(207,174,131,0.42), transparent 70%)",
          filter: "blur(36px)",
          opacity: 0.55,
          x: blob2X,
          y: blob2Y,
        }}
        animate={reduced ? {} : { scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating decorative chips — parallax with mouse */}
      {!reduced && (
        <>
          <motion.div
            aria-hidden
            className="hidden md:flex absolute z-0 mono items-center gap-2 px-3 py-1.5 rounded-full pointer-events-none"
            style={{
              top: 180,
              left: 60,
              background: "var(--paper)",
              border: "1px solid var(--rule-2)",
              boxShadow: "0 6px 20px -10px rgba(0,0,0,0.18)",
              fontSize: 10,
              color: "var(--ink-3)",
              x: chipAX,
              y: chipAY,
            }}
            initial={{ opacity: 0, y: 30, rotate: -8 }}
            animate={{ opacity: 1, y: [0, -8, 0], rotate: -6 }}
            transition={{
              opacity: { duration: 0.8, delay: 1.6, ease: E_OUT },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 0.8, delay: 1.6, ease: E_OUT },
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            312 reviews scanned
          </motion.div>
          <motion.div
            aria-hidden
            className="hidden md:flex absolute z-0 mono items-center gap-2 px-3 py-1.5 rounded-full pointer-events-none"
            style={{
              top: 240,
              right: 80,
              background: "var(--paper)",
              border: "1px solid var(--rule-2)",
              boxShadow: "0 6px 20px -10px rgba(0,0,0,0.18)",
              fontSize: 10,
              color: "var(--ink-3)",
              x: chipBX,
              y: chipBY,
            }}
            initial={{ opacity: 0, y: 30, rotate: 8 }}
            animate={{ opacity: 1, y: [0, 8, 0], rotate: 5 }}
            transition={{
              opacity: { duration: 0.8, delay: 1.8, ease: E_OUT },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              rotate: { duration: 0.8, delay: 1.8, ease: E_OUT },
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "#3a8c5f" }}
            />
            deployed live
          </motion.div>
          <motion.div
            aria-hidden
            className="hidden md:flex absolute z-0 mono items-center gap-2 px-3 py-1.5 rounded-full pointer-events-none"
            style={{
              top: 460,
              left: 110,
              background: "var(--paper)",
              border: "1px solid var(--rule-2)",
              boxShadow: "0 6px 20px -10px rgba(0,0,0,0.18)",
              fontSize: 10,
              color: "var(--ink-3)",
              x: chipCX,
              y: chipCY,
            }}
            initial={{ opacity: 0, y: 30, rotate: 4 }}
            animate={{ opacity: 1, y: [0, -10, 0], rotate: 3 }}
            transition={{
              opacity: { duration: 0.8, delay: 2.0, ease: E_OUT },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
              rotate: { duration: 0.8, delay: 2.0, ease: E_OUT },
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent-2)" }}
            />
            10 agents working
          </motion.div>
        </>
      )}

      <motion.div
        className="relative z-10 max-w-[1100px] mx-auto"
        style={{ y: heroY }}
      >
        <motion.div
          className="mono mb-7"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: E_OUT }}
        >
          <motion.span
            className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle"
            style={{ background: "var(--accent)" }}
            animate={
              reduced
                ? {}
                : {
                    scale: [1, 1.6, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(177,90,58,0.4)",
                      "0 0 0 6px rgba(177,90,58,0)",
                      "0 0 0 0 rgba(177,90,58,0)",
                    ],
                  }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
          For small businesses · No code, no decisions
        </motion.div>

        <motion.h1
          className="serif font-normal m-0"
          style={{
            fontSize: "clamp(44px, 8vw, 84px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            scale: headlineScale,
            filter: reduced ? undefined : headlineFilter,
          }}
        >
          <SplitTextReveal className="block" stagger={0.05} duration={0.85}>
            Your
          </SplitTextReveal>
          <motion.span
            className="block relative"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.45, ease: E_OUT }}
            style={{ display: "inline-block", padding: "0 0.1em" }}
          >
            <WordCycler words={CYCLES} interval={2600} />
            <span>,</span>
            {!reduced && (
              <motion.span
                aria-hidden
                className="absolute left-[0.1em] right-[0.4em] origin-left"
                style={{
                  bottom: "-0.05em",
                  height: 4,
                  background:
                    "linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent))",
                  backgroundSize: "200% 100%",
                  borderRadius: 4,
                }}
                initial={{ scaleX: 0, backgroundPositionX: "0%" }}
                animate={{
                  scaleX: 1,
                  backgroundPositionX: ["0%", "200%"],
                }}
                transition={{
                  scaleX: { duration: 0.9, delay: 1.1, ease: E_OUT },
                  backgroundPositionX: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />
            )}
          </motion.span>
          <SplitTextReveal className="block" stagger={0.05} duration={0.85} delay={0.55}>
            already built from your
          </SplitTextReveal>
          <SplitTextReveal className="block" stagger={0.05} duration={0.85} delay={1.0}>
            Google Business Profile.
          </SplitTextReveal>
        </motion.h1>

        <motion.p
          className="text-[16px] md:text-[18px] max-w-[560px] mx-auto mt-7 leading-[1.5]"
          style={{ color: "var(--ink-3)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: E_OUT }}
        >
          Type your business name. We&apos;ll have a complete, deployable site in 90 seconds. Nothing
          to drag, nothing to write.
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          className="max-w-[640px] mx-auto mt-10 flex items-center gap-2 p-2 relative"
          style={{
            background: "var(--paper)",
            border: "1px solid var(--ink)",
            borderRadius: 999,
            boxShadow: focused
              ? "0 16px 48px -12px rgba(177,90,58,0.32)"
              : "0 8px 30px rgba(0,0,0,0.06)",
            transition: "box-shadow 0.4s ease",
          }}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.7, ease: E_OUT }}
        >
          <motion.div
            className="pl-3.5 text-[var(--ink-3)] relative z-10"
            animate={focused && !reduced ? { rotate: [0, -8, 8, -4, 0] } : {}}
            transition={{ duration: 0.6 }}
          >
            <SearchIcon size={18} />
          </motion.div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="e.g. Mike's Pizza Austin TX"
            className="flex-1 text-[15px] py-3.5 bg-transparent outline-none border-none relative z-10"
            style={{ color: "var(--ink)" }}
            aria-label="Business name"
          />
          <Magnetic strength={0.18}>
            <motion.button
              type="submit"
              className="btn btn-accent relative z-10 overflow-hidden"
              style={{ padding: "14px 22px", borderRadius: 999 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {!reduced && (
                <motion.span
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)",
                    transform: "translateX(-110%)",
                  }}
                  whileHover={{ x: ["-110%", "110%"] }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
              )}
              <Sparkles size={15} /> Build my site <ArrowRight size={15} />
            </motion.button>
          </Magnetic>
        </motion.form>

        <motion.div
          className="mono mt-4 inline-flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          14-day Pro trial · No card required
        </motion.div>

        <div
          ref={mockRef}
          onMouseMove={onMockMove}
          onMouseLeave={onMockLeave}
          className="mt-[80px] md:mt-[120px] relative"
          style={{ perspective: 1600 }}
        >
          {!reduced && (
            <motion.div
              aria-hidden
              className="absolute -inset-12 -z-10"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 40%, rgba(177,90,58,0.16), transparent 70%)",
                filter: "blur(40px)",
              }}
              animate={{ opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <motion.div
            style={{
              rotateX: reduced ? 0 : composedRotateX,
              rotateY: reduced ? 0 : sTiltX,
              y: reduced ? 0 : mockY,
              scale: reduced ? 1 : mockScale,
              skewY: reduced ? 0 : skew,
              transformPerspective: 1600,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.9, ease: E_OUT }}
          >
            <BrowserMock url="mikes-pizza.pages.dev" className="max-w-[1080px] mx-auto">
              <MikesPizzaPreview height={500} />
            </BrowserMock>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="mt-12 inline-flex flex-col items-center gap-2 text-[var(--ink-4)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: reduced ? 1 : 0.7 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <span className="mono text-[10px]">scroll</span>
          <motion.span
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block w-[1px] h-7"
            style={{ background: "var(--ink-3)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
