"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { SearchIcon, Sparkle, Globe } from "@/lib/icons";

const E_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STEPS = [
  {
    n: "01",
    icon: SearchIcon,
    title: "Find your business",
    body: "Type your business name. We pull your real address, hours, photos and reviews from Google Maps.",
  },
  {
    n: "02",
    icon: Sparkle,
    title: "10 agents build it",
    body: "Analyst, writer, designer, debugger, QA — ten small AIs collaborate on your site, live.",
  },
  {
    n: "03",
    icon: Globe,
    title: "Ship to a real URL",
    body: "We deploy to Cloudflare Pages. Share your link in 90 seconds, no DNS skills required.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-25%" });
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const orbX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const orbOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0],
  );
  // Backdrop numeral scroll parallax
  const numeralY = useTransform(sectionProgress, [0, 1], ["10%", "-30%"]);
  const numeralRotate = useTransform(sectionProgress, [0, 1], [-3, 3]);
  const numeralOpacity = useTransform(
    sectionProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.55, 0.55, 0],
  );

  return (
    <section
      ref={sectionRef}
      id="how"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--rule-2)] relative overflow-hidden"
    >
      {/* Massive background numeral that drifts on scroll */}
      {!reduced && (
        <motion.div
          aria-hidden
          className="absolute pointer-events-none select-none -z-10 hidden md:block serif"
          style={{
            top: "10%",
            right: "-2%",
            fontSize: "clamp(280px, 36vw, 520px)",
            lineHeight: 0.8,
            letterSpacing: "-0.05em",
            color: "var(--rule-2)",
            opacity: numeralOpacity,
            y: numeralY,
            rotate: numeralRotate,
          }}
        >
          03
        </motion.div>
      )}
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="eyebrow mb-3">How it works</div>
          <h2 className="serif text-[clamp(34px,5vw,56px)] leading-[1.05] tracking-[-0.025em] m-0 max-w-[700px]">
            Three steps. <span className="italic text-[var(--ink-3)]">One coffee.</span>
          </h2>
        </Reveal>

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative"
          style={{ perspective: 1600 }}
        >
          {/* Connector dotted line — desktop */}
          <svg
            aria-hidden
            className="absolute hidden md:block pointer-events-none"
            style={{
              top: 70,
              left: "16%",
              right: "16%",
              width: "68%",
              height: 2,
            }}
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="var(--accent)"
              strokeWidth="1.2"
              strokeDasharray="3 7"
              style={{ pathLength: reduced ? 1 : lineProgress }}
            />
          </svg>

          {/* traveling orb */}
          {!reduced && (
            <motion.div
              aria-hidden
              className="absolute hidden md:block"
              style={{
                top: 64,
                left: "16%",
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "var(--accent)",
                boxShadow: "0 0 18px rgba(177,90,58,0.6)",
                x: orbX,
                opacity: orbOpacity,
                translateX: "-50%",
              }}
            />
          )}

          {STEPS.map((s, i) => (
            <StepCard key={s.n} step={s} index={i} inView={inView} reduced={!!reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  inView,
  reduced,
}: {
  step: (typeof STEPS)[number];
  index: number;
  inView: boolean;
  reduced: boolean;
}) {
  const Icon = step.icon;
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 22,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 22,
  });
  const spotX = useTransform(mx, [-0.5, 0.5], ["10%", "90%"]);
  const spotY = useTransform(my, [-0.5, 0.5], ["10%", "90%"]);
  const spot = useTransform(
    [spotX, spotY] as never,
    ([x, y]: string[]) =>
      `radial-gradient(360px circle at ${x} ${y}, rgba(177,90,58,0.16), transparent 60%)`,
  );

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };
  // alternating slide-in direction for variety
  const fromX = index % 2 === 0 ? -28 : 28;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={
        reduced
          ? {}
          : { opacity: 0, y: 50, x: fromX, rotateX: -10, scale: 0.96 }
      }
      animate={
        inView ? { opacity: 1, y: 0, x: 0, rotateX: 0, scale: 1 } : {}
      }
      transition={{
        duration: 0.95,
        delay: 0.15 + index * 0.16,
        ease: E_OUT,
      }}
      whileHover={
        reduced ? {} : { y: -6, transition: { duration: 0.3, ease: E_OUT } }
      }
      style={{
        rotateX: reduced ? 0 : rx,
        rotateY: reduced ? 0 : ry,
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
      }}
      className="card h-full p-8 hover:shadow-[0_24px_50px_-26px_rgba(0,0,0,0.18)] relative group cursor-default overflow-hidden"
    >
      {/* mouse-tracked spotlight */}
      {!reduced && (
        <motion.span
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spot }}
        />
      )}

      {/* subtle background numeral — sits behind text */}
      <motion.span
        aria-hidden
        className="absolute serif font-medium select-none pointer-events-none"
        style={{
          bottom: -18,
          right: -8,
          fontSize: 110,
          lineHeight: 1,
          color: "var(--rule-2)",
          opacity: 0.7,
          letterSpacing: "-0.04em",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 0.7, y: 0 } : {}}
        transition={{ delay: 0.6 + index * 0.16, duration: 0.8, ease: E_OUT }}
      >
        {step.n}
      </motion.span>

      {/* Hover bottom rule */}
      <motion.span
        className="absolute bottom-0 left-8 right-8 h-[1.5px] origin-left"
        style={{ background: "var(--accent)" }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: E_OUT }}
      />

      <div
        className="mono mb-5 flex items-baseline gap-2 relative z-10"
        style={{ color: "var(--accent-ink)" }}
      >
        step
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.16 }}
          className="serif text-[20px] not-italic font-medium leading-none"
          style={{ color: "var(--ink)" }}
        >
          {step.n}
        </motion.span>
      </div>

      <motion.div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-5 relative z-10"
        style={{
          background: "var(--accent-soft)",
          color: "var(--accent-ink)",
        }}
        initial={reduced ? {} : { scale: 0.6, opacity: 0, rotate: -20 }}
        animate={inView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
        transition={{
          delay: 0.45 + index * 0.16,
          duration: 0.8,
          ease: E_OUT,
        }}
        whileHover={
          reduced
            ? {}
            : { rotate: [0, -8, 8, 0], scale: 1.06, transition: { duration: 0.6 } }
        }
      >
        <Icon size={20} />
        {!reduced && (
          <>
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{ border: "1px solid var(--accent)" }}
              animate={{
                scale: [1, 1.45],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: 1.2 + index * 0.4,
                ease: "easeOut",
              }}
            />
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{ border: "1px solid var(--accent)" }}
              animate={{
                scale: [1, 1.7],
                opacity: [0.35, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: 1.6 + index * 0.4,
                ease: "easeOut",
              }}
            />
          </>
        )}
      </motion.div>

      <h3 className="serif text-[22px] m-0 leading-[1.2] font-medium relative z-10">
        {step.title}
      </h3>
      <p className="mt-2.5 text-[13.5px] text-[var(--ink-3)] leading-[1.6] relative z-10">
        {step.body}
      </p>
    </motion.div>
  );
}
