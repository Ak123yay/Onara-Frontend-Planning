"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Check, Sparkles, ArrowRight } from "@/lib/icons";
import { cn } from "@/lib/utils";

type Tier = {
  tier: string;
  monthly: number;
  yearly: number;
  freePrice?: string;
  sub: string;
  tagline: string;
  items: string[];
  cta: string;
  href: string;
  highlight?: boolean;
  muted?: boolean;
};

const TIERS: Tier[] = [
  {
    tier: "Free",
    monthly: 0,
    yearly: 0,
    freePrice: "$0",
    sub: "forever",
    tagline: "See your finished site, decide later.",
    items: [
      "1 site · preview only",
      "3 revisions / month",
      "Onara branding in footer",
      "Dashboard access",
    ],
    cta: "Start free",
    href: "/build",
    muted: true,
  },
  {
    tier: "Starter",
    monthly: 12,
    yearly: 10,
    sub: "/month",
    tagline: "One business. One live site. Done.",
    items: [
      "1 live site",
      "10 revisions / month",
      "Custom domain",
      "No Onara branding",
      "Email support",
    ],
    cta: "Pick Starter",
    href: "/auth/sign-up",
    highlight: true,
  },
  {
    tier: "Pro",
    monthly: 29,
    yearly: 24,
    sub: "/month",
    tagline: "Multiple locations or sites you manage.",
    items: [
      "3 live sites",
      "Unlimited revisions",
      "Code download (ZIP)",
      "Priority queue",
      "Email support",
    ],
    cta: "Go Pro",
    href: "/auth/sign-up",
  },
];

export default function PricingTiers() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  return (
    <section id="pricing" className="px-6 md:px-12 py-12 md:py-16 relative">
      <div className="max-w-[1200px] mx-auto">
        <BillingToggle billing={billing} setBilling={setBilling} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch text-left mt-14">
          {TIERS.map((p, i) => (
            <PricingCard key={p.tier} tier={p} billing={billing} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center text-[12px] text-[var(--ink-3)]">
          Year of Starter for $99 · custom domain $10 add-on · human revision $20
        </div>
      </div>
    </section>
  );
}

function BillingToggle({
  billing,
  setBilling,
}: {
  billing: "monthly" | "yearly";
  setBilling: (b: "monthly" | "yearly") => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative inline-flex items-center justify-center p-1 rounded-full border border-[var(--rule-2)] bg-[var(--paper-2)]"
        style={{ width: 280 }}
      >
        <motion.span
          aria-hidden
          className="absolute top-1 bottom-1 rounded-full"
          style={{
            background: "var(--ink)",
            width: "calc(50% - 4px)",
          }}
          animate={{ left: billing === "monthly" ? 4 : "calc(50%)" }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
        />
        <button
          type="button"
          onClick={() => setBilling("monthly")}
          className={cn(
            "relative z-10 flex-1 px-4 py-2 text-[13px] rounded-full transition-colors duration-300",
            billing === "monthly" ? "text-[var(--paper)]" : "text-[var(--ink-3)]",
          )}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBilling("yearly")}
          className={cn(
            "relative z-10 flex-1 px-4 py-2 text-[13px] rounded-full transition-colors duration-300",
            billing === "yearly" ? "text-[var(--paper)]" : "text-[var(--ink-3)]",
          )}
        >
          Yearly
        </button>
      </div>
      <AnimatePresence mode="wait">
        {billing === "yearly" && (
          <motion.span
            key="save"
            initial={{ opacity: 0, y: -4, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="mono text-[10px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{
              background: "var(--accent-soft)",
              color: "var(--accent-ink)",
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            save 20% — that&apos;s ~2 free months
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function PricingCard({
  tier,
  billing,
  index,
}: {
  tier: Tier;
  billing: "monthly" | "yearly";
  index: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 22,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 22,
  });

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

  const price =
    tier.freePrice ?? `$${billing === "monthly" ? tier.monthly : tier.yearly}`;

  const isDark = !!tier.highlight;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.2, 0.7, 0.3, 1] }}
      whileHover={reduced ? {} : { y: -6, transition: { duration: 0.25 } }}
      style={{
        rotateX: reduced ? 0 : rx,
        rotateY: reduced ? 0 : ry,
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
        background: isDark ? "var(--ink)" : "var(--paper)",
        color: isDark ? "var(--paper)" : "var(--ink)",
        borderColor: isDark ? "transparent" : "var(--rule-2)",
        boxShadow: isDark
          ? "0 24px 56px -16px rgba(26,24,21,0.32), 0 0 0 1px rgba(177,90,58,0.18) inset"
          : "0 12px 30px -18px rgba(26,24,21,0.18)",
      }}
      className={cn(
        "relative h-full flex flex-col rounded-2xl p-7 border",
      )}
    >
      {/* Badge — sits in flow at the top of the highlighted card */}
      {isDark && (
        <motion.span
          className="self-start mb-4 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-[0.08em] uppercase inline-flex items-center gap-1.5"
          style={{
            background: "var(--accent)",
            color: "white",
            fontFamily: "var(--font-jetbrains), monospace",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 240, damping: 14 }}
        >
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.9)" }}
          />
          Most chosen
        </motion.span>
      )}

      <div
        className="mono"
        style={{
          color: isDark ? "var(--accent-soft)" : "var(--ink-3)",
        }}
      >
        {tier.tier}
      </div>

      <div className="flex items-baseline gap-1.5 mt-3 relative">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={`${tier.tier}-${price}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="serif font-medium"
            style={{
              fontSize: 56,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: isDark ? "var(--paper)" : "var(--ink)",
            }}
          >
            {price}
          </motion.span>
        </AnimatePresence>
        <span
          className="text-[13px]"
          style={{
            color: isDark ? "rgba(250,247,242,0.6)" : "var(--ink-3)",
          }}
        >
          {tier.sub}
        </span>
      </div>

      <p
        className="text-[12.5px] mt-2 mb-5"
        style={{
          color: isDark ? "rgba(250,247,242,0.7)" : "var(--ink-3)",
        }}
      >
        {tier.tagline}
      </p>

      <div
        className="h-[1px] -mx-7"
        style={{
          background: isDark
            ? "rgba(255,255,255,0.08)"
            : "var(--rule-2)",
        }}
      />

      <ul className="m-0 p-0 list-none flex flex-col gap-2.5 flex-1 mt-5">
        {tier.items.map((it, i) => (
          <motion.li
            key={it}
            initial={reduced ? {} : { opacity: 0, x: -6 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.35 }}
            className="flex items-start gap-2.5 text-[13.5px]"
          >
            <span
              className="w-4 h-4 rounded-full inline-flex items-center justify-center shrink-0 mt-[2px]"
              style={{
                background: isDark ? "rgba(255,255,255,0.08)" : "var(--accent-soft)",
                color: isDark ? "var(--accent-soft)" : "var(--accent-ink)",
              }}
            >
              <Check size={9} stroke={2.6} />
            </span>
            <span
              style={{
                color: isDark ? "rgba(250,247,242,0.92)" : "var(--ink-2)",
              }}
            >
              {it}
            </span>
          </motion.li>
        ))}
      </ul>

      <Link
        href={tier.href}
        className={cn(
          "btn w-full mt-7 relative",
          isDark ? "btn-accent" : tier.muted ? "btn-ghost" : "btn-soft",
        )}
        style={{ width: "100%" }}
      >
        {isDark && <Sparkles size={13} />}
        {tier.cta}
        <ArrowRight size={13} />
      </Link>
    </motion.div>
  );
}
