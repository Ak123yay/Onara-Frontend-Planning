"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { StatusDot } from "@/components/primitives/StatusDot";
import SitePreview from "@/components/result/SitePreview";
import {
  Globe,
  Edit,
  ArrowRight,
  Eye,
  TrendUp,
  Cog,
  Layers,
  Phone,
  Sparkles,
  Copy,
} from "@/lib/icons";
import type { Site } from "@/components/dashboard/SiteCard";
import { REVISIONS } from "@/lib/data";
import { cn } from "@/lib/utils";

type Tab = "overview" | "revisions" | "analytics" | "settings";
type Device = "desktop" | "tablet" | "mobile";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "revisions", label: "Revisions" },
  { id: "analytics", label: "Analytics" },
  { id: "settings", label: "Settings" },
];

const ANALYTICS_DAYS = [
  18, 22, 19, 26, 31, 24, 28, 35, 41, 38, 33, 47, 52, 44, 39,
  46, 58, 51, 49, 62, 55, 48, 44, 51, 47, 53, 60, 58, 54, 61,
];

export default function SiteDetailView({ site }: { site: Site }) {
  const [tab, setTab] = useState<Tab>("overview");
  const [device, setDevice] = useState<Device>("desktop");

  return (
    <>
      <div className="px-8 py-5 border-b border-[var(--rule-2)]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/dashboard"
              className="mono hover:text-[var(--ink)] transition-colors"
            >
              My sites /
            </Link>
            <span className="serif text-[24px]">{site.name}</span>
            <span
              className="chip chip-soft text-[10px] mono"
              style={{
                borderColor: site.live ? "var(--accent)" : "var(--rule)",
                color: site.live ? "var(--accent-ink)" : "var(--ink-3)",
              }}
            >
              <StatusDot state={site.live ? "on" : "pending"} />
              {site.live ? "live" : "paused"}
            </span>
            {site.custom && (
              <a
                href={`https://${site.custom}`}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1"
              >
                {site.custom} <ArrowRight size={11} />
              </a>
            )}
          </div>
          <div className="flex gap-2.5">
            <Link
              href={`/dashboard/site/${site.id}/domain`}
              className="btn btn-soft btn-sm"
            >
              <Globe size={12} /> {site.custom ? "Manage domain" : "Connect domain"}
            </Link>
            <Link
              href={`/dashboard/site/${site.id}/revisions`}
              className="btn btn-accent btn-sm"
            >
              <Edit size={12} /> Request a revision
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-5 flex gap-1 border-b border-[var(--rule-2)] -mb-5">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "relative text-[13px] py-3 px-4 transition-colors",
                tab === t.id ? "text-[var(--ink)]" : "text-[var(--ink-3)] hover:text-[var(--ink-2)]"
              )}
            >
              {t.label}
              {tab === t.id && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: "var(--accent)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {tab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_360px]"
          >
            <div className="p-7 bg-[var(--paper-2)]">
              <div className="flex justify-center gap-1.5 mb-4">
                {(["desktop", "tablet", "mobile"] as Device[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDevice(d)}
                    className={cn("chip text-[11px]", device === d && "active")}
                  >
                    {d === "desktop" && <Layers size={11} />}
                    {d === "tablet" && <Layers size={11} />}
                    {d === "mobile" && <Phone size={11} />}
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </button>
                ))}
              </div>
              <motion.div
                key={device}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "mx-auto transition-all duration-300",
                  device === "mobile"
                    ? "max-w-[380px]"
                    : device === "tablet"
                      ? "max-w-[680px]"
                      : "max-w-full"
                )}
              >
                <SitePreview height={device === "mobile" ? 540 : 520} url={site.url} />
              </motion.div>
            </div>

            <aside className="border-l border-[var(--rule-2)] p-6 bg-[var(--paper)] space-y-5">
              <div>
                <div className="mono mb-2">Quick actions</div>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      label: "Request a change",
                      href: `/dashboard/site/${site.id}/revisions`,
                      icon: <Edit size={13} />,
                    },
                    {
                      label: "Connect domain",
                      href: `/dashboard/site/${site.id}/domain`,
                      icon: <Globe size={13} />,
                    },
                    {
                      label: "View live site",
                      href: site.custom ? `https://${site.custom}` : `https://${site.url}`,
                      icon: <Eye size={13} />,
                      external: true,
                    },
                    {
                      label: "Site settings",
                      href: `/dashboard/site/${site.id}`,
                      icon: <Cog size={13} />,
                    },
                  ].map((a) =>
                    a.external ? (
                      <a
                        key={a.label}
                        href={a.href}
                        target="_blank"
                        rel="noreferrer"
                        className="card-tight flex items-center gap-2.5 hover-lift text-[13px] hover:border-[var(--accent)]"
                      >
                        <span className="text-[var(--ink-3)]">{a.icon}</span>
                        <span className="flex-1">{a.label}</span>
                        <ArrowRight size={12} className="text-[var(--ink-3)]" />
                      </a>
                    ) : (
                      <Link
                        key={a.label}
                        href={a.href}
                        className="card-tight flex items-center gap-2.5 hover-lift text-[13px] hover:border-[var(--accent)]"
                      >
                        <span className="text-[var(--ink-3)]">{a.icon}</span>
                        <span className="flex-1">{a.label}</span>
                        <ArrowRight size={12} className="text-[var(--ink-3)]" />
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div>
                <div className="mono mb-2">Last 30 days</div>
                <div className="card-tight">
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="serif text-[24px] leading-none">{site.visits ?? 0}</div>
                    {site.trend && (
                      <span
                        className="text-[11px] inline-flex items-center gap-1"
                        style={{ color: "var(--accent-ink)" }}
                      >
                        <TrendUp size={10} stroke={2.4} /> {site.trend}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[var(--ink-3)] mb-3">visits / mo</div>
                  <MiniBarChart data={ANALYTICS_DAYS.slice(-14)} />
                </div>
              </div>

              <div>
                <div className="mono mb-2">Auto sync from Google</div>
                <div className="card-tight">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px]">Hours, phone, photos</span>
                    <span
                      className="chip mono text-[9px] py-0.5 px-2"
                      style={{
                        background: "var(--ink)",
                        color: "var(--paper)",
                        borderColor: "var(--ink)",
                      }}
                    >
                      on
                    </span>
                  </div>
                  <div className="text-[var(--ink-3)] text-[11px] mt-1.5">
                    Last sync: 14h ago · next in 10h
                  </div>
                </div>
              </div>
            </aside>
          </motion.div>
        )}

        {tab === "revisions" && (
          <motion.div
            key="revisions"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex-1 p-8 max-w-[860px] mx-auto w-full"
          >
            <div className="flex items-baseline justify-between mb-5">
              <div>
                <div className="mono mb-1">Revision history</div>
                <h2 className="serif text-[24px] m-0 font-normal">
                  {REVISIONS.length} revisions · all on the live site
                </h2>
              </div>
              <Link
                href={`/dashboard/site/${site.id}/revisions`}
                className="btn btn-accent btn-sm"
              >
                <Sparkles size={12} /> New revision
              </Link>
            </div>
            <div className="space-y-2">
              {REVISIONS.map((r, i) => (
                <motion.div
                  key={r.v}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="card-tight flex items-center gap-3 hover-lift"
                  style={{
                    background: r.live ? "var(--accent-soft)" : "var(--paper)",
                  }}
                >
                  <span className="mono text-[10px] w-9">{r.v}</span>
                  <div className="flex-1">
                    <div className="text-[13px]">{r.what}</div>
                    <div className="text-[var(--ink-3)] text-[11px]">{r.when}</div>
                  </div>
                  {r.live ? (
                    <span
                      className="chip mono text-[9px] py-0.5 px-2"
                      style={{
                        borderColor: "var(--accent)",
                        color: "var(--accent-ink)",
                      }}
                    >
                      live
                    </span>
                  ) : (
                    <button className="text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors">
                      <ArrowRight size={12} />
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {tab === "analytics" && (
          <motion.div
            key="analytics"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex-1 p-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {[
                { l: "Visits", v: site.visits ?? 0, sub: "Last 30 days" },
                { l: "Unique", v: 246, sub: "Last 30 days" },
                { l: "Avg time", v: "1m 42s", sub: "Per visit" },
                { l: "Bounce", v: "38%", sub: "" },
              ].map((s) => (
                <div key={s.l} className="card-tight">
                  <div className="mono text-[10px] mb-1">{s.l}</div>
                  <div className="serif text-[24px] leading-none">{s.v}</div>
                  <div className="text-[11px] text-[var(--ink-3)] mt-1.5">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="flex items-baseline justify-between mb-4">
                <div className="mono">Visits · last 30 days</div>
                <span
                  className="text-[12px] inline-flex items-center gap-1"
                  style={{ color: "var(--accent-ink)" }}
                >
                  <TrendUp size={11} stroke={2.4} /> {site.trend ?? "+0%"} vs prior 30
                </span>
              </div>
              <BigBarChart data={ANALYTICS_DAYS} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="card">
                <div className="mono mb-3">Top sources</div>
                {[
                  ["Google", "184", "59%"],
                  ["Direct", "62", "20%"],
                  ["Instagram", "41", "13%"],
                  ["Yelp", "25", "8%"],
                ].map(([s, n, p]) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 py-2 border-t border-[var(--rule-2)] first:border-t-0"
                  >
                    <span className="text-[13px] flex-1">{s}</span>
                    <span className="mono text-[11px]">{n}</span>
                    <div className="w-24 h-1.5 rounded-full bg-[var(--paper-2)] overflow-hidden">
                      <div
                        className="h-full"
                        style={{ width: p, background: "var(--accent)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="card">
                <div className="mono mb-3">Top pages</div>
                {[
                  ["/", "201"],
                  ["/menu", "94"],
                  ["/contact", "47"],
                  ["/catering", "12"],
                ].map(([s, n]) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 py-2 border-t border-[var(--rule-2)] first:border-t-0"
                  >
                    <span className="text-[13px] flex-1 mono">{s}</span>
                    <span className="mono text-[11px]">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {tab === "settings" && (
          <motion.div
            key="settings"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex-1 p-8 max-w-[760px] mx-auto w-full space-y-3"
          >
            <div className="card">
              <div className="mono mb-2">Site name</div>
              <input className="input" defaultValue={site.name} />
            </div>
            <div className="card">
              <div className="mono mb-2">Public URL</div>
              <div className="flex items-center gap-2">
                <input className="input flex-1" defaultValue={site.url} readOnly />
                <button className="btn btn-soft btn-sm">
                  <Copy size={12} /> copy
                </button>
              </div>
            </div>
            <div className="card">
              <div className="flex items-baseline justify-between mb-2">
                <div className="mono">Visibility</div>
                <span
                  className="chip mono text-[9px] py-0.5 px-2"
                  style={{
                    background: "var(--ink)",
                    color: "var(--paper)",
                    borderColor: "var(--ink)",
                  }}
                >
                  public
                </span>
              </div>
              <div className="text-[12px] text-[var(--ink-3)]">
                Anyone with the link can view. Search engines indexing this site.
              </div>
            </div>
            <div
              className="card"
              style={{ borderColor: "var(--accent)", background: "var(--accent-softer)" }}
            >
              <div className="mono mb-2" style={{ color: "var(--accent-ink)" }}>
                Danger zone
              </div>
              <div className="text-[12px] text-[var(--ink-2)] mb-3">
                Pausing makes the site return a 404. You can restore at any time within 30 days.
              </div>
              <button className="btn btn-soft btn-sm">Pause site</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MiniBarChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-[2px] h-12">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${(v / max) * 100}%` }}
          transition={{ delay: i * 0.03, duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
          className="flex-1 rounded-md"
          style={{ background: "var(--accent)" }}
        />
      ))}
    </div>
  );
}

function BigBarChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1 h-44">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${(v / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.02, duration: 0.5, ease: [0.2, 0.7, 0.3, 1] }}
          className="flex-1 rounded-t-md relative group"
          style={{ background: "var(--accent-soft)" }}
        >
          <div
            className="absolute inset-x-0 bottom-0 rounded-t-sm transition-all duration-200 group-hover:opacity-100"
            style={{
              background: "var(--accent)",
              opacity: 0.7,
              height: "100%",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
