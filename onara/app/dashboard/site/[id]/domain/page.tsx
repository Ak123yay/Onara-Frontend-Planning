"use client";

import { useState, use } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";
import Reveal from "@/components/motion/Reveal";
import { Check, Copy, Mail, ArrowLeft } from "@/lib/icons";
import { StatusDot } from "@/components/primitives/StatusDot";

const DEFAULT_DOMAIN: Record<string, string> = {
  mikes: "mikespizza.com",
  bloom: "bloombrooklyn.com",
  cedar: "cedarplumbing.co",
};

export default function DomainPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [domain, setDomain] = useState(DEFAULT_DOMAIN[id] ?? `${id}.com`);
  const [copied, setCopied] = useState(false);

  const copyRecords = async () => {
    const txt = [
      "CNAME @ " + id + ".pages.dev auto",
      "CNAME www " + id + ".pages.dev auto",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(txt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <DashboardShell>
      <DashHeader
        sub={`Domains · ${id}`}
        title="Connect a custom domain"
        action={
          <Link
            href={`/dashboard/site/${id}`}
            className="text-[12px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft size={11} /> back to site
          </Link>
        }
      />

      <div className="flex-1 px-8 pb-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <div className="card">
              <div className="flex items-baseline justify-between mb-2.5">
                <div className="mono">1 · Your domain</div>
                <span
                  className="mono text-[10px]"
                  style={{ color: "var(--accent-ink)" }}
                >
                  step 1 of 3
                </span>
              </div>
              <input
                className="input"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
              <motion.div
                key={domain}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mt-2.5 text-[12px] text-[var(--ink-3)]"
              >
                <span style={{ color: "var(--accent)" }}>
                  <Check size={11} stroke={2.4} />
                </span>
                Domain available · we&apos;ll point it at Cloudflare Pages
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card">
              <div className="flex items-baseline justify-between mb-2.5">
                <div className="mono">2 · Add these DNS records at your registrar</div>
                <span className="mono text-[10px]">step 2 of 3</span>
              </div>
              <div className="card-tight" style={{ background: "var(--paper-2)" }}>
                <div
                  className="grid mono text-[10px] py-1.5 border-b border-[var(--rule)]"
                  style={{ gridTemplateColumns: "60px 1fr 1.5fr 60px", gap: 10 }}
                >
                  <span>TYPE</span>
                  <span>NAME</span>
                  <span>VALUE</span>
                  <span>TTL</span>
                </div>
                {[
                  ["CNAME", "@", `${id}.pages.dev`, "auto"],
                  ["CNAME", "www", `${id}.pages.dev`, "auto"],
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="grid mono text-[11px] py-1.5"
                    style={{
                      gridTemplateColumns: "60px 1fr 1.5fr 60px",
                      gap: 10,
                      color: "var(--ink)",
                    }}
                  >
                    {row.map((c, j) => (
                      <span key={j}>{c}</span>
                    ))}
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-2.5 mt-3 flex-wrap">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={copyRecords}
                  className="btn btn-soft btn-sm"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="inline-flex items-center gap-1.5"
                        style={{ color: "var(--accent-ink)" }}
                      >
                        <Check size={12} stroke={2.4} /> copied
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="inline-flex items-center gap-1.5"
                      >
                        <Copy size={12} /> Copy records
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
                <button className="btn btn-soft btn-sm">
                  <Mail size={12} /> Email instructions
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="card">
              <div className="flex items-baseline justify-between mb-2.5">
                <div className="mono">3 · Verify</div>
                <span className="mono text-[10px]">step 3 of 3</span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <StatusDot state="on" />
                <div className="flex-1">
                  <div className="text-[13px]">Checking DNS propagation…</div>
                  <div className="text-[11px] text-[var(--ink-3)]">
                    Usually under 15 minutes. We&apos;ll email when it&apos;s live.
                  </div>
                </div>
                <button className="btn btn-sm">Verify now</button>
              </div>
            </div>
          </Reveal>
        </div>

        <aside
          className="rounded-2xl p-5 h-fit sticky top-6"
          style={{
            background: "var(--paper-2)",
            border: "1px solid var(--rule-2)",
          }}
        >
          <div className="mono mb-2.5">What happens</div>
          <ol className="m-0 pl-5 text-[12px] leading-[1.7] text-[var(--ink-2)] list-decimal">
            <li>You add 2 CNAME records at GoDaddy / Namecheap / wherever you bought the domain</li>
            <li>Cloudflare verifies ownership (usually &lt; 15 min)</li>
            <li>SSL provisioned automatically</li>
            <li>Your site goes live at <span className="mono">{domain}</span></li>
          </ol>
          <div className="mono mt-5 mb-2">Cost</div>
          <div className="text-[12px]">$10 one-time add-on · already paid</div>
          <div className="mono mt-5 mb-2">Don&apos;t have a domain?</div>
          <div className="text-[12px] text-[var(--ink-3)] leading-[1.5]">
            We&apos;ll keep publishing at{" "}
            <span className="mono lowercase text-[11px]">{id}.pages.dev</span> until you connect one.
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
