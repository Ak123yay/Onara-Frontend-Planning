"use client";

import { useState, use } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import DashboardShell from "@/components/dashboard/DashboardShell";
import Reveal from "@/components/motion/Reveal";
import BrowserMock from "@/components/site-preview/BrowserMock";
import MikesPizzaPreview from "@/components/site-preview/MikesPizzaPreview";
import { Check, Plus, X, Sparkles, ArrowLeft, Edit } from "@/lib/icons";

const QUICK = [
  "Change phone",
  "Update hours",
  "Add a service",
  "Change address",
  "Edit hero text",
  "Swap a photo",
];

const TOUCH_PLAN = [
  { type: "edit" as const, label: "Hours component", time: "~ 8s" },
  { type: "add" as const, label: "New “Catering” section", time: "~ 22s" },
  { type: "untouched" as const, label: "Hero, menu, contact, footer (untouched)" },
];

export default function RevisionsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [text, setText] = useState(
    "Change our weekend hours to 11am–midnight and add a “catering” section just under the menu. Keep everything else the same.",
  );
  const [running, setRunning] = useState(false);

  return (
    <DashboardShell>
      <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--rule-2)] flex-wrap gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <Link
            href={`/dashboard/site/${id}`}
            className="mono hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft size={11} /> {id}
          </Link>
          <span className="serif text-[24px]">Request a revision</span>
        </div>
        <div className="mono text-[10px]">7 of 10 used this month</div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_400px]">
        <div className="p-8">
          <Reveal>
            <div className="mono mb-2">Tell us what to change · plain English</div>
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="input text-[14px] leading-[1.55] min-h-[180px] resize-y"
                rows={6}
                placeholder="Describe the change in your own words. The more specific, the better."
              />
              <div className="absolute bottom-2 right-3 mono text-[10px] text-[var(--ink-4)]">
                {text.length} chars
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mono mt-7 mb-2.5">Or pick a quick change</div>
            <div className="flex flex-wrap gap-2">
              {QUICK.map((q) => (
                <motion.button
                  key={q}
                  type="button"
                  whileTap={{ scale: 0.96 }}
                  onClick={() =>
                    setText((t) => (t ? `${t}\n\n${q}: ` : `${q}: `))
                  }
                  className="chip"
                >
                  {q}
                </motion.button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mono mt-7 mb-2.5">What we&apos;ll touch</div>
            <div className="card-tight">
              {TOUCH_PLAN.map((p) => (
                <div
                  key={p.label}
                  className={`flex items-center gap-2.5 py-1.5 ${
                    p.type === "untouched" ? "text-[var(--ink-4)]" : ""
                  }`}
                >
                  <span
                    style={{
                      color:
                        p.type === "untouched" ? undefined : "var(--accent-ink)",
                    }}
                  >
                    {p.type === "edit" && <Check size={12} />}
                    {p.type === "add" && <Plus size={12} />}
                    {p.type === "untouched" && <X size={12} />}
                  </span>
                  <span className="text-[13px] flex-1">{p.label}</span>
                  {p.time && <span className="mono text-[10px]">{p.time}</span>}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex justify-between items-center mt-7 flex-wrap gap-3">
            <span className="text-[12px] text-[var(--ink-3)] max-w-[400px] leading-[1.5]">
              Only the changed components rerun. Token use ~80% lower than a full rebuild.
            </span>
            <motion.button
              type="button"
              onClick={() => {
                setRunning(true);
                setTimeout(() => setRunning(false), 4000);
              }}
              className="btn btn-accent btn-lg"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 14px 32px -10px rgba(177,90,58,0.65)",
              }}
              whileTap={{ scale: 0.98 }}
              disabled={running}
            >
              <AnimatePresence mode="wait">
                {running ? (
                  <motion.span
                    key="running"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles size={14} />
                    </motion.span>
                    Running…
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Sparkles size={14} /> Run revision
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <div
          className="border-l border-[var(--rule-2)] p-6 space-y-5"
          style={{ background: "var(--paper-2)" }}
        >
          <div>
            <div className="mono mb-2">Live preview</div>
            <BrowserMock url={`${id}-a3f2.pages.dev`} className="w-full">
              <MikesPizzaPreview height={300} />
            </BrowserMock>
            <div className="text-[11px] text-[var(--ink-3)] mt-2 italic">
              Updates here when revision runs
            </div>
          </div>

          <div>
            <div className="mono mb-2">Why &ldquo;incremental&rdquo;?</div>
            <p className="text-[12px] text-[var(--ink-2)] leading-[1.55] m-0">
              Onara doesn&apos;t rebuild your whole site every time. Each component is generated atomically — we only rerun the agents needed for what changed. Faster, cheaper, no surprises.
            </p>
          </div>

          <div>
            <div className="mono mb-2">Latest revisions</div>
            <ul className="m-0 p-0 list-none text-[12px] space-y-2">
              <li className="border-l-2 border-[var(--accent)] pl-3 py-1">
                <div>Updated weekend hours</div>
                <div className="text-[var(--ink-3)] text-[10px]">v7 · 2 days ago</div>
              </li>
              <li className="border-l-2 border-[var(--rule)] pl-3 py-1">
                <div>Added catering section</div>
                <div className="text-[var(--ink-3)] text-[10px]">v6 · 5 days ago</div>
              </li>
              <li className="border-l-2 border-[var(--rule)] pl-3 py-1">
                <div>Changed phone number</div>
                <div className="text-[var(--ink-3)] text-[10px]">v5 · Mar 14</div>
              </li>
            </ul>
          </div>

          <Link
            href={`/dashboard/site/${id}`}
            className="inline-flex items-center gap-1.5 text-[12px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors"
          >
            <Edit size={11} /> See full history
          </Link>
        </div>
      </div>
    </DashboardShell>
  );
}
