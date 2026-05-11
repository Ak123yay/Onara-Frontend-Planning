"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import TopNav from "@/components/nav/TopNav";
import Footer from "@/components/landing/Footer";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/motion/MagneticButton";
import ScrollProgress from "@/components/motion/ScrollProgress";
import PricingTiers from "@/components/pricing/PricingTiers";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import { Sparkles, ArrowRight, Check, X } from "@/lib/icons";

const COMPARE: { label: string; free: boolean | string; starter: boolean | string; pro: boolean | string }[] = [
  { label: "Live publishing", free: false, starter: true, pro: true },
  { label: "Custom domain", free: false, starter: true, pro: true },
  { label: "Revisions / month", free: "3", starter: "10", pro: "Unlimited" },
  { label: "Live sites", free: "1 preview", starter: "1", pro: "3" },
  { label: "Onara branding", free: "Yes", starter: "No", pro: "No" },
  { label: "Code export (ZIP)", free: false, starter: false, pro: true },
  { label: "Priority queue", free: false, starter: false, pro: true },
  { label: "Email support", free: false, starter: true, pro: true },
];

export default function PricingPage() {
  const reduced = useReducedMotion();

  return (
    <main className="min-h-screen bg-warm-grad relative">
      <ScrollProgress />
      <TopNav />

      {/* Hero */}
      <section className="px-6 md:px-12 py-20 md:py-28 text-center relative overflow-hidden">
        {/* Single backdrop orb — quieter than the previous double-orb + shapes combo */}
        <motion.div
          aria-hidden
          className="absolute -z-10 pointer-events-none"
          style={{
            top: -140,
            left: "50%",
            marginLeft: -260,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(177,90,58,0.22), transparent 65%)",
            filter: "blur(50px)",
          }}
          animate={reduced ? {} : { scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <Reveal>
          <div className="eyebrow mb-4 inline-flex items-center gap-2">
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
              animate={
                reduced
                  ? {}
                  : {
                      scale: [1, 1.6, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(177,90,58,0.45)",
                        "0 0 0 6px rgba(177,90,58,0)",
                        "0 0 0 0 rgba(177,90,58,0)",
                      ],
                    }
              }
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
            Pricing
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1
            className="serif tracking-[-0.025em] m-0 max-w-[920px] mx-auto font-normal"
            style={{
              fontSize: "clamp(44px, 7.5vw, 88px)",
              lineHeight: 1.0,
            }}
          >
            Build for free.{" "}
            <span className="italic relative inline-block">
              Pay to publish.
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left"
                style={{ background: "var(--accent)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
              />
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 text-[15px] md:text-[16px] text-[var(--ink-3)] max-w-[540px] mx-auto leading-[1.55]">
            Every new account starts with 14 days of Pro, no card required. Cancel anytime — your code stays yours.
          </p>
        </Reveal>
      </section>

      <PricingTiers />

      {/* Comparison */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <div className="mono mb-3">Side-by-side</div>
              <h2 className="serif text-[clamp(28px,4vw,48px)] leading-[1.05] m-0 font-normal">
                What you get on each plan.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-0 overflow-hidden">
              <div
                className="grid text-[12px] mono py-3 px-5 border-b border-[var(--rule-2)]"
                style={{
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  background: "var(--paper-2)",
                }}
              >
                <span></span>
                <span className="text-center text-[var(--ink-3)]">Free</span>
                <span
                  className="text-center"
                  style={{ color: "var(--accent-ink)" }}
                >
                  Starter ★
                </span>
                <span className="text-center text-[var(--ink-3)]">Pro</span>
              </div>
              {COMPARE.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className={`grid items-center py-3 px-5 text-[13px] hover:bg-[var(--paper-2)] transition-colors ${
                    i ? "border-t border-[var(--rule-2)]" : ""
                  }`}
                  style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
                >
                  <span className="text-[var(--ink-2)]">{row.label}</span>
                  {[
                    { v: row.free, j: 0 },
                    { v: row.starter, j: 1 },
                    { v: row.pro, j: 2 },
                  ].map(({ v, j }) => (
                    <span
                      key={j}
                      className="text-center inline-flex items-center justify-center"
                      style={{
                        color:
                          v === false
                            ? "var(--ink-4)"
                            : j === 1
                              ? "var(--accent-ink)"
                              : "var(--ink)",
                      }}
                    >
                      {v === true ? (
                        <span
                          className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                          style={{
                            background:
                              j === 1 ? "var(--accent-soft)" : "var(--paper-2)",
                            color: j === 1 ? "var(--accent-ink)" : "var(--ink)",
                          }}
                        >
                          <Check size={11} stroke={2.6} />
                        </span>
                      ) : v === false ? (
                        <span className="text-[var(--ink-4)]">
                          <X size={12} />
                        </span>
                      ) : (
                        <span className="text-[13px]">{v}</span>
                      )}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <PricingFAQ />

      {/* Dark CTA banner */}
      <section className="px-6 md:px-12 pb-24">
        <Reveal>
          <div
            className="rounded-[28px] p-10 md:p-16 max-w-[1100px] mx-auto relative overflow-hidden text-center"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            <motion.div
              aria-hidden
              className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(177,90,58,0.5), transparent 65%)",
                filter: "blur(40px)",
              }}
              animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <div className="eyebrow mb-3" style={{ color: "#f7c8a8" }}>
                Not sure yet?
              </div>
              <h2
                className="serif tracking-[-0.02em] m-0 max-w-[720px] mx-auto font-normal"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 64px)",
                  lineHeight: 1.0,
                }}
              >
                Build it first.{" "}
                <motion.span
                  className="italic"
                  animate={
                    reduced
                      ? {}
                      : {
                          color: ["#faf7f2", "#c97552", "#faf7f2"],
                        }
                  }
                  transition={{
                    duration: 3.0,
                    repeat: Infinity,
                    repeatDelay: 2.4,
                    ease: "easeInOut",
                  }}
                >
                  Decide later.
                </motion.span>
              </h2>
              <p
                className="text-[14px] md:text-[15px] mt-5 max-w-[480px] mx-auto leading-[1.6]"
                style={{ color: "rgba(250,247,242,0.7)" }}
              >
                See your finished site in 90 seconds. No card. No risk. Pay only if you want to keep it online.
              </p>
              <div className="mt-8 inline-flex flex-col items-center gap-3">
                <MagneticButton
                  href="/build"
                  className="btn btn-accent btn-lg"
                  strength={0.3}
                >
                  <Sparkles size={14} /> Build my site — free
                  <ArrowRight size={14} />
                </MagneticButton>
                <Link
                  href="/auth/sign-in"
                  className="mono text-[10px] hover:text-[var(--paper)] transition-colors"
                  style={{ color: "rgba(250,247,242,0.55)" }}
                >
                  Already have an account? Sign in →
                </Link>
              </div>
              <div
                className="mt-6 mono text-[10px] inline-flex items-center gap-2"
                style={{ color: "rgba(250,247,242,0.5)" }}
              >
                <span>Built by 10 agents</span>
                <span style={{ opacity: 0.4 }}>·</span>
                <span>90 seconds</span>
                <span style={{ opacity: 0.4 }}>·</span>
                <span>no card required</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
