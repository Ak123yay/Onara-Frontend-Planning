"use client";

import { useState } from "react";
import { use } from "react";
import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import { Check, Plus, X, Sparkle } from "@/lib/icons";

const QUICK = [
  "Change phone",
  "Update hours",
  "Add a service",
  "Change address",
  "Edit hero text",
  "Swap a photo",
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

  return (
    <DashboardShell>
        <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--rule-2)] flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Link href={`/dashboard/site/${id}`} className="mono hover:text-[var(--ink)] transition-colors">
              {id} /
            </Link>
            <span className="serif text-[22px]">Request a revision</span>
          </div>
          <div className="mono">7 of 10 used this month</div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_380px]">
          <div className="p-8">
            <div className="mono mb-2">Tell us what to change · plain English</div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="input text-[14px] leading-[1.5] min-h-[200px] resize-y"
              rows={6}
            />

            <div className="mono mt-6 mb-2">Or pick a quick change</div>
            <div className="flex flex-wrap gap-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() =>
                    setText((t) => (t ? `${t}\n\n${q}: ` : `${q}: `))
                  }
                  className="chip"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="mono mt-6 mb-2.5">What we&apos;ll touch</div>
            <div className="card-tight">
              <div className="flex items-center gap-2.5 py-1.5">
                <span style={{ color: "var(--accent-ink)" }}>
                  <Check size={12} />
                </span>
                <span className="text-[13px]">Hours component</span>
                <span className="mono ml-auto">~ 8s</span>
              </div>
              <div className="flex items-center gap-2.5 py-1.5">
                <span style={{ color: "var(--accent-ink)" }}>
                  <Plus size={12} />
                </span>
                <span className="text-[13px]">New “Catering” section</span>
                <span className="mono ml-auto">~ 22s</span>
              </div>
              <div className="flex items-center gap-2.5 py-1.5 text-[var(--ink-4)]">
                <X size={12} />
                <span className="text-[13px]">Hero, menu, contact, footer (untouched)</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 flex-wrap gap-3">
              <span className="text-[12px] text-[var(--ink-3)] max-w-[380px]">
                Only the changed components rerun. Token use ~80% lower than a full rebuild.
              </span>
              <button type="button" className="btn btn-accent btn-lg">
                <Sparkle size={14} /> Run revision
              </button>
            </div>
          </div>

          <div
            className="border-l border-[var(--rule-2)] p-6"
            style={{ background: "var(--paper-2)" }}
          >
            <div className="mono mb-2.5">Why &quot;incremental&quot;?</div>
            <p className="text-[12px] text-[var(--ink-2)] leading-[1.55] m-0 mb-5">
              Onara doesn&apos;t rebuild your whole site every time. Each component is generated atomically — we only rerun the agents needed for what changed. Faster, cheaper, no surprises.
            </p>
            <div className="mono mb-2.5">Latest revisions</div>
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
        </div>
    </DashboardShell>
  );
}
