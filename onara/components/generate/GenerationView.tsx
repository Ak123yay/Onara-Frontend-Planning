"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/primitives/Logo";
import { StatusDot } from "@/components/primitives/StatusDot";
import { Check, Layers, Phone } from "@/lib/icons";
import { cn } from "@/lib/utils";

const AGENTS = [
  { id: 1, name: "Analyst", desc: "Reading 842 reviews, photos, and your menu", model: "gpt-oss:20b" },
  { id: 2, name: "Writer", desc: "Drafting hero copy, about page, menu descriptions", model: "qwen3:8b" },
  { id: 3, name: "Style", desc: "Picking colors, type, and rhythm from your photos", model: "qwen3:8b" },
  { id: 4, name: "Planner", desc: "Mapping the site structure", model: "glm-5.1" },
  { id: 5, name: "Prompt Engineer", desc: "Briefing the code generator", model: "glm-5.1" },
  { id: 6, name: "Code Generator", desc: "Writing your site, component by component", model: "copilot" },
  { id: 7, name: "Debugger", desc: "Catching issues before you see them", model: "minimax-m2.7" },
  { id: 8, name: "SEO", desc: "Adding metadata and schema for Google", model: "minimax-m2.5" },
  { id: 9, name: "QA", desc: "Validating accessibility and performance", model: "minimax-m2.5" },
  { id: 10, name: "Mobile", desc: "Polishing the small-screen experience", model: "minimax-m2.5" },
];

export default function GenerationView() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [elapsed, setElapsed] = useState(0);

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

  return (
    <div className="min-h-screen bg-[var(--paper-2)]">
      <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[var(--rule-2)] bg-[var(--paper)]">
        <Logo />
        <div className="text-[12px] text-[var(--ink-3)] inline-flex items-center gap-2">
          <StatusDot state="on" />
          Building Lupita&apos;s Tacos · {mm}:{ss}
        </div>
        <div className="hidden md:block text-[12px] text-[var(--ink-3)]">
          You can close this tab — we&apos;ll email when it&apos;s done
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]" style={{ minHeight: "calc(100vh - 65px)" }}>
        {/* Left — agent checklist */}
        <div className="px-6 md:px-9 py-8 md:py-10 border-r border-[var(--rule-2)] bg-[var(--paper)]">
          <div className="eyebrow mb-2">Step 4 of 4</div>
          <h2 className="serif text-[28px] m-0 mb-1.5">Ten agents, working live.</h2>
          <p className="text-[13px] text-[var(--ink-3)] mb-7">
            You&apos;ll see your site fill in as they finish.
          </p>

          <div>
            {AGENTS.map((a, i) => {
              const state = i < active ? "done" : i === active ? "running" : "pending";
              return (
                <div
                  key={a.id}
                  className={cn(
                    "flex gap-3.5 py-3 transition-opacity duration-500",
                    i ? "border-t border-[var(--rule-2)]" : "",
                    state === "pending" ? "opacity-40" : "opacity-100",
                  )}
                >
                  <div className="shrink-0 mt-0.5">
                    {state === "done" && (
                      <span className="w-[22px] h-[22px] rounded-full bg-[var(--ink)] flex items-center justify-center text-white">
                        <Check size={11} stroke={2.4} />
                      </span>
                    )}
                    {state === "running" && (
                      <span
                        className="w-[22px] h-[22px] rounded-full flex items-center justify-center"
                        style={{ background: "var(--accent-soft)", border: "2px solid var(--accent)" }}
                      >
                        <StatusDot state="on" />
                      </span>
                    )}
                    {state === "pending" && (
                      <span className="w-[22px] h-[22px] rounded-full border-[1.5px] border-[var(--rule)] flex items-center justify-center text-[10px] text-[var(--ink-4)]">
                        {a.id}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[13px] font-medium">{a.name}</span>
                      <span className="mono text-[9px]">{a.model}</span>
                    </div>
                    <div className="text-[12px] text-[var(--ink-3)] mt-0.5">{a.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-3.5 bg-[var(--paper-2)] rounded-xl text-[12px] text-[var(--ink-3)] leading-[1.5]">
            <span className="text-[var(--ink)] font-medium">Why ten?</span> Each agent does one thing well. Smaller, specialized models give you a better site than one big model trying to do everything.
          </div>
        </div>

        {/* Right — live preview */}
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
            className="flex-1 bg-white rounded-xl overflow-hidden relative"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
          >
            <div className="chrome">
              <div className="chrome-dots">
                <span className="chrome-dot" />
                <span className="chrome-dot" />
                <span className="chrome-dot" />
              </div>
              <div className="chrome-url">lupitastacos.onara.site</div>
            </div>

            <div className="relative overflow-hidden" style={{ height: "calc(100% - 45px)" }}>
              {/* Hero — fills at active >= 2 */}
              <div
                className="h-[220px] relative flex items-end p-7 transition-[background] duration-700 overflow-hidden"
                style={{
                  background:
                    active >= 2
                      ? "linear-gradient(135deg, #2a1810 0%, #5c2818 100%)"
                      : "var(--paper-2)",
                }}
              >
                {active >= 2 ? (
                  <div className="fade-up text-white relative z-10">
                    <div
                      className="mono text-white/70 mb-2.5"
                      style={{ letterSpacing: "0.15em", fontSize: 10 }}
                    >
                      SINCE 1995 · EAST LA
                    </div>
                    <div className="serif text-[44px] leading-[1] font-medium">Lupita&apos;s Tacos</div>
                    <div className="text-[14px] opacity-85 mt-1.5">
                      Slow-braised, hand-pressed, family-made.
                    </div>
                  </div>
                ) : (
                  <div className="text-[var(--ink-4)] mono" style={{ letterSpacing: "0.1em" }}>
                    WAITING FOR WRITER…
                  </div>
                )}
              </div>

              {/* Photo strip */}
              {active >= 3 && (
                <div className="fade-up grid grid-cols-4 gap-2 p-5">
                  {["AL PASTOR", "CARNITAS", "BARBACOA", "INTERIOR"].map((l) => (
                    <div key={l} className="ph h-[90px] text-[8px]">
                      {l}
                    </div>
                  ))}
                </div>
              )}

              {/* Story */}
              {active >= 4 && (
                <div className="fade-up grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 px-7 pb-5">
                  <div>
                    <div className="eyebrow mb-2">Our story</div>
                    <p className="serif text-[22px] leading-[1.3] m-0">
                      Three generations cooking the recipes my abuela brought from Jalisco — every tortilla still pressed by hand.
                    </p>
                  </div>
                  <div className="text-[11px] text-[var(--ink-3)] border-l border-[var(--rule)] pl-3.5">
                    <div className="mb-2.5">
                      <div className="mono text-[9px] mb-0.5">HOURS</div>
                      <div className="text-[var(--ink)] text-[12px]">Mon–Sat · 11–9</div>
                    </div>
                    <div>
                      <div className="mono text-[9px] mb-0.5">VISIT</div>
                      <div className="text-[var(--ink)] text-[12px]">1248 César Chávez Ave</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Menu peek */}
              {active >= 6 && (
                <div className="fade-up px-7 py-5 border-t border-[var(--rule-2)] flex justify-between items-center">
                  <div>
                    <div className="eyebrow mb-1">Menu</div>
                    <div className="serif text-[18px]">42 dishes, every one made today</div>
                  </div>
                  <span className="link-arrow">View full menu →</span>
                </div>
              )}

              {/* Shimmer */}
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
        </div>
      </div>
    </div>
  );
}
