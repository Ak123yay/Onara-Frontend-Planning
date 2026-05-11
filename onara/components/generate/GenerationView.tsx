"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Logo from "@/components/primitives/Logo";
import { StatusDot } from "@/components/primitives/StatusDot";
import { Check, Layers, Phone, ChevronDown } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { AGENTS } from "@/lib/data";

export default function GenerationView() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [showLog, setShowLog] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const tick = setInterval(() => setElapsed((e) => e + 1), 1000);
    const adv = setInterval(() => setActive((a) => Math.min(AGENTS.length, a + 1)), 1500);
    return () => {
      clearInterval(tick);
      clearInterval(adv);
    };
  }, []);

  useEffect(() => {
    if (active >= AGENTS.length) {
      const t = setTimeout(() => router.push("/build/ready"), 1800);
      return () => clearTimeout(t);
    }
  }, [active, router]);

  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");
  const progress = Math.min(active / AGENTS.length, 1);

  return (
    <div className="min-h-screen" style={{ background: "var(--paper-2)" }}>
      <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[var(--rule-2)] bg-[var(--paper)]">
        <Logo />
        <div className="text-[12px] text-[var(--ink-3)] inline-flex items-center gap-2">
          <StatusDot state="on" />
          Building Mike&apos;s Pizza · {mm}:{ss}
        </div>
        <div className="hidden md:block text-[12px] text-[var(--ink-3)]">
          You can close this tab — we&apos;ll email when it&apos;s done
        </div>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-[420px_1fr_300px]"
        style={{ minHeight: "calc(100vh - 65px)" }}
      >
        {/* Left — agent checklist */}
        <div className="px-6 md:px-9 py-8 md:py-10 border-r border-[var(--rule-2)] bg-[var(--paper)]">
          <div className="eyebrow mb-2">Step 4 of 4</div>
          <h2 className="serif text-[28px] m-0 mb-1.5 font-normal">Ten agents, working live.</h2>
          <p className="text-[13px] text-[var(--ink-3)] mb-6">
            You&apos;ll see your site fill in as they finish.
          </p>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="mono">Progress</span>
              <span className="text-[11px] text-[var(--ink-3)] font-mono">
                {Math.min(active, AGENTS.length)} / {AGENTS.length}
              </span>
            </div>
            <div className="agent-progress-bar">
              <motion.div
                className="agent-progress-bar-fill"
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          <div>
            {AGENTS.map((a, i) => {
              const state = i < active ? "done" : i === active ? "running" : "pending";
              return (
                <motion.div
                  key={a.id}
                  layout
                  className={cn(
                    "flex gap-3.5 py-3 transition-opacity duration-500",
                    i ? "border-t border-[var(--rule-2)]" : "",
                    state === "pending" ? "opacity-40" : "opacity-100",
                  )}
                  animate={{
                    backgroundColor:
                      state === "running" ? "var(--accent-softer)" : "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    borderRadius: state === "running" ? 12 : 0,
                    paddingLeft: state === "running" ? 12 : 0,
                    paddingRight: state === "running" ? 12 : 0,
                  }}
                >
                  <div className="shrink-0 mt-0.5">
                    <AnimatePresence mode="wait">
                      {state === "done" && (
                        <motion.span
                          key="done"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 18 }}
                          className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-white"
                          style={{ background: "var(--ink)" }}
                        >
                          <Check size={11} stroke={2.4} />
                        </motion.span>
                      )}
                      {state === "running" && (
                        <motion.span
                          key="running"
                          initial={{ scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="w-[22px] h-[22px] rounded-full flex items-center justify-center"
                          style={{
                            background: "var(--accent-soft)",
                            border: "2px solid var(--accent)",
                          }}
                        >
                          <StatusDot state="on" />
                        </motion.span>
                      )}
                      {state === "pending" && (
                        <span
                          key="pending"
                          className="w-[22px] h-[22px] rounded-full border-[1.5px] border-[var(--rule)] flex items-center justify-center text-[10px] text-[var(--ink-4)]"
                        >
                          {a.id}
                        </span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span
                        className="text-[13px] font-medium"
                        style={{ color: state === "running" ? "var(--accent-ink)" : undefined }}
                      >
                        {a.name}
                      </span>
                      <span className="mono text-[9px]">{a.model}</span>
                    </div>
                    <div className="text-[12px] text-[var(--ink-3)] mt-0.5">{a.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div
            className="mt-6 p-4 rounded-2xl text-[12px] leading-[1.5]"
            style={{ background: "var(--paper-2)", color: "var(--ink-3)" }}
          >
            <span className="text-[var(--ink)] font-medium">Why ten?</span> Each agent does one thing
            well. Smaller, specialized models give you a better site than one big model trying to do
            everything.
          </div>
        </div>

        {/* Center — live preview */}
        <div className="p-6 md:p-10 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="mono">Live preview</span>
            <div className="flex gap-2">
              <button className="chip">
                <Layers size={11} /> Desktop
              </button>
              <button className="chip">
                <Phone size={11} /> Mobile
              </button>
            </div>
          </div>

          <div
            className="flex-1 bg-white rounded-2xl overflow-hidden relative"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
          >
            <div className="chrome">
              <div className="chrome-dots">
                <span className="chrome-dot" />
                <span className="chrome-dot" />
                <span className="chrome-dot" />
              </div>
              <div className="chrome-url">mikes-pizza.pages.dev</div>
            </div>

            <div
              className="relative overflow-hidden"
              style={{ height: "calc(100% - 45px)", color: "#f7f0e2" }}
            >
              {/* Hero — fills at active >= 2 */}
              <div
                className="h-[260px] relative flex items-end p-7 transition-[background] duration-700 overflow-hidden"
                style={{
                  background:
                    active >= 2
                      ? "linear-gradient(135deg, #1a1410 0%, #5c2818 100%)"
                      : "var(--paper-2)",
                }}
              >
                <AnimatePresence>
                  {active >= 2 ? (
                    <motion.div
                      key="hero"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
                      className="relative z-10"
                    >
                      <div
                        className="mono mb-2.5"
                        style={{ letterSpacing: "0.15em", fontSize: 10, color: "#ff8a4c" }}
                      >
                        WOOD-FIRED · SINCE 2008
                      </div>
                      <div className="serif text-[44px] leading-[1] font-medium">
                        Austin&apos;s slowest<br />pizza dough.
                      </div>
                      <div className="text-[14px] mt-1.5" style={{ color: "#bcb0a0" }}>
                        72-hour cold ferment, hand-stretched.
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-[var(--ink-4)] mono" style={{ letterSpacing: "0.1em" }}>
                      WAITING FOR WRITER…
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Photo strip */}
              <AnimatePresence>
                {active >= 3 && (
                  <motion.div
                    key="photos"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-3 gap-2 p-5"
                    style={{ background: "#1a1410" }}
                  >
                    {["MARGHERITA $14", "PEPPERONI $16", "FUNGHI $17"].map((t) => (
                      <div
                        key={t}
                        className="rounded-xl flex items-center justify-center text-[10px]"
                        style={{
                          height: 90,
                          background: "rgba(255,138,76,0.10)",
                          color: "#ff8a4c",
                          fontFamily: "var(--font-jetbrains), monospace",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {t}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Visit */}
              <AnimatePresence>
                {active >= 6 && (
                  <motion.div
                    key="visit"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="px-5 py-4 border-t border-[rgba(255,255,255,0.08)] text-[12px] flex justify-between"
                    style={{ background: "#1a1410", color: "#bcb0a0" }}
                  >
                    <span>Mon–Sat · 11–10pm</span>
                    <span>(512) 555-0182</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* SEO confirmation */}
              <AnimatePresence>
                {active >= 8 && (
                  <motion.div
                    key="seo"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-5 py-3 flex items-center gap-2 text-[11px]"
                    style={{
                      background: "var(--accent-softer)",
                      color: "var(--accent-ink)",
                    }}
                  >
                    <Check size={12} stroke={2.2} /> SEO meta added · LocalBusiness schema embedded
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Shimmer line */}
              {active < AGENTS.length && (
                <div
                  className="absolute bottom-0 left-0 right-0 shimmer-bar"
                  style={{ height: 3 }}
                />
              )}
            </div>
          </div>

          <div className="mt-3.5 text-[11px] text-[var(--ink-3)] text-center">
            {active < AGENTS.length
              ? `${active}/10 agents complete · approx. ${Math.max(0, 92 - elapsed)}s remaining`
              : "Done. Polishing final touches…"}
          </div>

          {/* Collapsible technical log */}
          <button
            type="button"
            onClick={() => setShowLog((v) => !v)}
            className="mt-4 inline-flex items-center justify-center gap-2 text-[11px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors"
          >
            <motion.span animate={{ rotate: showLog ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={12} />
            </motion.span>
            {showLog ? "Hide technical log" : "Show technical log"}
          </button>
          <AnimatePresence>
            {showLog && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className="mt-3 p-4 rounded-xl text-[11px] leading-[1.7]"
                  style={{
                    background: "var(--paper-3)",
                    fontFamily: "var(--font-jetbrains), monospace",
                    color: "var(--ink-3)",
                  }}
                >
                  {AGENTS.slice(0, Math.min(active + 1, AGENTS.length)).map((a, i) => (
                    <div key={a.id}>
                      <span style={{ color: "var(--ink-3)" }}>
                        00:{String(i * 9 + 2).padStart(2, "0")}
                      </span>{" "}
                      <span style={{ color: i < active ? "var(--ink)" : "var(--accent-ink)" }}>
                        {i < active ? `✓ ${a.name.toLowerCase()}` : `→ ${a.name.toLowerCase()}`}
                      </span>{" "}
                      <span>{i < active ? "complete" : "running…"}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right — Decisions so far */}
        <div className="hidden lg:block border-l border-[var(--rule-2)] p-6 bg-[var(--paper)] overflow-y-auto">
          <div className="mono mb-3">Decisions so far</div>

          <AnimatePresence>
            {active >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card-tight mb-3"
              >
                <div className="mono text-[9px] mb-1">Industry</div>
                <div className="text-[13px]">Pizzeria · neighborhood spot</div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {active >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-tight mb-3"
              >
                <div className="mono text-[9px] mb-1">Tone</div>
                <div className="text-[13px]">Friendly, family-run</div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {active >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="card-tight mb-3"
              >
                <div className="mono text-[9px] mb-2">Palette</div>
                <div className="flex gap-1">
                  {["#1a1410", "#ff8a4c", "#f7ede0"].map((c) => (
                    <div
                      key={c}
                      className="flex-1 h-6 rounded-md"
                      style={{ background: c, border: "1px solid rgba(0,0,0,0.06)" }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {active >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="card-tight mb-3"
              >
                <div className="mono text-[9px] mb-1">Type</div>
                <div className="serif text-[18px]">Fraunces</div>
                <div className="text-[12px] text-[var(--ink-3)]">+ Inter for body</div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {active >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card-tight mb-3"
              >
                <div className="mono text-[9px] mb-1">Sections</div>
                <div className="text-[12px] text-[var(--ink-2)] leading-[1.6]">
                  Hero · Menu · Story · Visit · Reviews
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mono mt-6 mb-2">Heads up</div>
          <div
            className="card-tight text-[12px] text-[var(--ink-2)] leading-[1.5]"
            style={{ background: "var(--paper-2)" }}
          >
            We&apos;ll publish at{" "}
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11 }}>
              mikes-pizza-a3f2.pages.dev
            </span>
            . Your custom domain can be added on the next screen.
          </div>
        </div>
      </div>
    </div>
  );
}
