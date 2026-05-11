"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Copy, Edit3, ExternalLink, Plus, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AppShell } from "@/components/onara/AppShell";
import { PizzaSitePreview } from "@/components/onara/BrowserMock";
import { demoUser, quickActions, sites, tabItems } from "@/components/onara/content";
import { buttonHover, buttonTap, cardHover, fadeUp, refinedEase, staggerContainer } from "@/components/onara/motion";

export function DashboardPage() {
  return (
    <AppShell>
      <div className="max-w-[1120px] px-5 py-10 md:px-12">
        <PageHeading eyebrow="Welcome back" title="Hi Rosa." muted="Three sites are live." />
        <motion.div className="mt-9 grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4" initial="hidden" animate="visible" variants={staggerContainer}>
          <StatCard label="Live sites" value="2" hint="of 3 total" />
          <StatCard label="Visits · 7 day" value="501" hint="↑ 24% vs prev" />
          <StatCard label="Revisions" value="4" hint="this month" />
          <StatCard label="Trial" value={`${demoUser.trialDaysLeft}d`} hint="remaining" highlight />
        </motion.div>
        <motion.div
          className="card mt-7 flex flex-col gap-5 bg-accent-softer p-6 md:flex-row md:items-center"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: refinedEase, delay: 0.12 }}
        >
          <motion.div
            className="flex size-14 items-center justify-center rounded-full bg-accent text-white"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={22} />
          </motion.div>
          <div className="flex-1">
            <div className="serif text-[22px] font-medium">Build another site</div>
            <p className="mt-1 text-[13px] text-ink-3">~90 seconds. Search a Google Business profile to start.</p>
          </div>
          <AnimatedLink href="/build">
            New site
            <ArrowRight size={14} />
          </AnimatedLink>
        </motion.div>
        <section className="mt-10">
          <div className="mb-3.5 flex items-baseline justify-between">
            <h2 className="serif text-[22px] font-medium">Recent sites</h2>
            <Link className="text-xs text-accent-ink underline" href="/sites">
              See all →
            </Link>
          </div>
          <motion.div className="flex flex-col gap-2" initial="hidden" animate="visible" variants={staggerContainer}>
            {sites.map((site) => (
              <SiteRow key={site.id} site={site} />
            ))}
          </motion.div>
        </section>
      </div>
    </AppShell>
  );
}

export function SitesPage() {
  return (
    <AppShell>
      <div className="max-w-[1120px] px-5 py-10 md:px-12">
        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <PageHeading eyebrow="My sites" title="3 sites ·" muted="2 live" />
          <AnimatedLink href="/build">
            <Plus size={14} />
            New site
          </AnimatedLink>
        </div>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {["All", "Live", "Drafts", "Paused"].map((item, index) => (
            <motion.button className={`chip ${index === 0 ? "chip-active" : ""}`} key={item} whileHover={{ y: -2 }} whileTap={buttonTap}>
              {item}
            </motion.button>
          ))}
        </div>
        <motion.div className="flex flex-col gap-2" initial="hidden" animate="visible" variants={staggerContainer}>
          {sites.map((site) => (
            <SiteRow key={site.id} site={site} />
          ))}
        </motion.div>
      </div>
    </AppShell>
  );
}

export function SiteDetailPage() {
  const [tab, setTab] = useState("overview");
  const [revisionOpen, setRevisionOpen] = useState(false);
  const site = sites[0];

  return (
    <AppShell>
      <div className="max-w-[1120px] px-5 py-8 md:px-12">
        <Link className="inline-flex items-center gap-1 text-xs text-ink-3" href="/sites">
          <ArrowLeft size={12} />
          All sites
        </Link>
        <motion.div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div
            className="flex size-16 items-center justify-center rounded-md text-3xl text-white"
            style={{ background: site.color }}
            variants={fadeUp}
          >
            {site.emoji}
          </motion.div>
          <motion.div className="flex-1" variants={fadeUp}>
            <h1 className="serif text-4xl font-medium">{site.name}</h1>
            <div className="mt-1.5 flex flex-wrap items-center gap-2.5">
              <span className="badge badge-leaf">
                <span className="sdot sdot-leaf" />
                live
              </span>
              <span className="mono">{site.url}</span>
              <Copy className="text-ink-3" size={12} />
            </div>
          </motion.div>
          <motion.div className="flex flex-wrap gap-2" variants={fadeUp}>
            <AnimatedLink href="/result" variant="soft">
              <ExternalLink size={13} />
              View site
            </AnimatedLink>
            <motion.button
              className="btn-focus inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-4 py-3 text-[13px] font-medium text-white"
              onClick={() => setRevisionOpen(true)}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <Edit3 size={13} />
              Request change
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="mt-8 flex gap-0 border-b border-rule-2">
          {tabItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                className={`-mb-px inline-flex items-center gap-1.5 border-b-2 px-4 py-2.5 text-[13px] ${
                  tab === item.id ? "border-ink text-ink" : "border-transparent text-ink-3"
                }`}
                key={item.id}
                onClick={() => setTab(item.id)}
              >
                <Icon size={14} />
                {item.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {tab === "overview" && <OverviewTab key="overview" />}
          {tab === "revisions" && <RevisionsTab key="revisions" onRevision={() => setRevisionOpen(true)} />}
          {tab === "analytics" && <PlaceholderTab key="analytics" title="Analytics dashboard" copy="Visits, sources, top pages, calls, and direction taps." />}
          {tab === "settings" && <PlaceholderTab key="settings" title="Settings" copy="Domain, SEO, exports, paused state, and danger zone." />}
        </AnimatePresence>
      </div>
      <AnimatePresence>{revisionOpen && <RevisionModal onClose={() => setRevisionOpen(false)} />}</AnimatePresence>
    </AppShell>
  );
}

export function AccountPage() {
  return (
    <AppShell>
      <div className="max-w-[780px] px-5 py-10 md:px-12">
        <PageHeading eyebrow="Account" title="Account & billing" />
        <motion.div className="card mt-8 p-6" initial="hidden" animate="visible" variants={fadeUp}>
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-full bg-accent text-2xl font-semibold text-white">R</div>
            <div className="flex-1">
              <div className="serif text-xl font-medium">{demoUser.name}</div>
              <div className="mono">{demoUser.email}</div>
            </div>
            <button className="chip">Edit</button>
          </div>
        </motion.div>
        <motion.div className="card mt-4 bg-accent-softer p-6" initial="hidden" animate="visible" variants={fadeUp}>
          <div className="eyebrow mb-2 text-accent-ink">Pro trial</div>
          <div className="serif text-2xl font-medium">{demoUser.trialDaysLeft} days left</div>
          <p className="mt-1.5 text-[13px] text-ink-3">Your live URLs go offline if your trial expires before you upgrade.</p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/10">
            <motion.div className="h-full bg-accent" initial={{ width: 0 }} animate={{ width: `${(demoUser.trialDaysLeft / 14) * 100}%` }} />
          </div>
          <div className="mt-4">
            <AnimatedLink href="/pricing">Upgrade to Pro · $19/mo</AnimatedLink>
          </div>
        </motion.div>
        <motion.div className="card mt-4 p-6" initial="hidden" animate="visible" variants={fadeUp}>
          <div className="serif mb-1 text-lg font-medium">Payment method</div>
          <p className="text-[13px] text-ink-3">None on file. Add one to keep sites live after trial.</p>
          <button className="chip mt-4">
            <Plus size={13} />
            Add card
          </button>
        </motion.div>
      </div>
    </AppShell>
  );
}

function OverviewTab() {
  return (
    <motion.div
      className="mt-7 grid gap-7 xl:grid-cols-[1.3fr_1fr]"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.42, ease: refinedEase }}
    >
      <div className="card overflow-hidden">
        <div className="flex items-center gap-1.5 border-b border-rule-2 bg-paper-2 px-3.5 py-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <div className="mono ml-3">mikes-pizza-a3f2.pages.dev</div>
        </div>
        <div className="max-h-[420px] overflow-hidden">
          <PizzaSitePreview />
        </div>
      </div>
      <div className="flex flex-col gap-3.5">
        <AnalyticsCard />
        <div className="card p-[18px]">
          <div className="mono mb-2.5">Quick actions</div>
          <div className="flex flex-col gap-1.5">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link className="flex items-center gap-2.5 rounded-[3px] px-2 py-2.5 transition-colors hover:bg-paper-2" href={action.href} key={action.label}>
                  <Icon className="text-ink-3" size={15} />
                  <div className="flex-1">
                    <div className="text-[13px]">{action.label}</div>
                    <div className="mono text-[10px]">{action.hint}</div>
                  </div>
                  <ArrowRight className="text-ink-4" size={12} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AnalyticsCard() {
  return (
    <div className="card p-[18px]">
      <div className="mono mb-2.5">Last 7 days</div>
      <div className="flex h-20 items-end justify-between gap-1.5">
        {[24, 38, 31, 52, 47, 61, 59].map((height, index) => (
          <motion.div
            className="flex-1 rounded-t-sm bg-accent"
            initial={{ height: 0, opacity: 0.4 }}
            animate={{ height: `${height}%`, opacity: 0.42 + index * 0.07 }}
            transition={{ duration: 0.55, delay: index * 0.05, ease: refinedEase }}
            key={`${height}-${index}`}
          />
        ))}
      </div>
      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <MiniMetric value="312" label="visits" />
        <MiniMetric value="28" label="calls" />
        <MiniMetric value="14" label="directions" />
      </div>
    </div>
  );
}

function RevisionsTab({ onRevision }: { onRevision: () => void }) {
  const rows = [
    "Make the hero photo larger and add a 'Order online' button",
    "Use forest green instead of orange for accents",
    "Add a section showing customer reviews from Google",
  ];

  return (
    <motion.div className="mt-7" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
      <div className="card mb-4 bg-accent-softer p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <Sparkles className="text-accent-ink" size={18} />
          <div className="flex-1">
            <div className="serif text-lg font-medium">Request a change in plain English</div>
            <p className="mt-1 text-[12.5px] text-ink-3">
              e.g. &quot;Make the hero darker&quot;, &quot;Add an order online button&quot;, &quot;Use forest green instead of orange&quot;.
            </p>
          </div>
          <motion.button className="btn-focus rounded-[2px] border border-accent bg-accent px-4 py-3 text-[13px] font-medium text-white" onClick={onRevision} whileHover={buttonHover} whileTap={buttonTap}>
            New revision
          </motion.button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {rows.map((row, index) => (
          <motion.div className="card flex items-start gap-3.5 p-4" key={row} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }}>
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
              <Sparkles size={13} />
            </div>
            <div className="flex-1">
              <div className="text-[13.5px]">&quot;{row}&quot;</div>
              <div className="mono mt-1">2 days ago · regenerated in 42s</div>
            </div>
            <a className="text-xs text-accent-ink">View →</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function PlaceholderTab({ title, copy }: { title: string; copy: string }) {
  return (
    <motion.div className="mt-7 rounded border border-dashed border-rule p-14 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="serif text-2xl font-medium">{title}</div>
      <p className="mt-2 text-sm text-ink-3">{copy}</p>
    </motion.div>
  );
}

function RevisionModal({ onClose }: { onClose: () => void }) {
  const [text, setText] = useState("");
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14100a]/45 p-5 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="card max-w-[580px] p-8 shadow-[0_30px_80px_rgb(0_0_0_/_0.18)]"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="eyebrow mb-2.5">New revision</div>
        <h2 className="serif text-[28px] font-medium">What should change?</h2>
        <p className="mt-2.5 text-[13px] leading-5 text-ink-3">
          Describe in plain English. We&apos;ll only re-run the parts that need to change - usually under a minute.
        </p>
        <textarea
          className="input mt-4 min-h-[128px]"
          placeholder="e.g. Add a big 'Order online' button in the hero. Make the photos bigger."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Make hero darker", "Add menu PDF", "Bigger photos", "Different fonts"].map((item) => (
            <button className="chip text-[11px]" key={item} onClick={() => setText((value) => (value ? `${value} ${item}` : item))}>
              + {item}
            </button>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="mono">Estimated: 45-90s</div>
          <div className="flex gap-2.5">
            <button className="chip" onClick={onClose}>Cancel</button>
            <motion.button
              className="btn-focus inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-4 py-2.5 text-[13px] font-medium text-white disabled:opacity-50"
              disabled={!text.trim()}
              onClick={onClose}
              whileHover={text.trim() ? buttonHover : undefined}
              whileTap={text.trim() ? buttonTap : undefined}
            >
              <Sparkles size={13} />
              Regenerate
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SiteRow({ site }: { site: (typeof sites)[number] }) {
  return (
    <motion.div variants={fadeUp} whileHover={cardHover} whileTap={buttonTap}>
      <Link className="card flex items-center gap-4 p-4" href={`/sites/${site.id}`}>
        <div className="flex size-12 shrink-0 items-center justify-center rounded text-2xl text-white" style={{ background: site.color }}>
          {site.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="serif text-[17px] font-medium">{site.name}</div>
            {site.status === "live" ? (
              <span className="badge badge-leaf">
                <span className="sdot sdot-leaf" />
                live
              </span>
            ) : (
              <span className="badge">draft</span>
            )}
            {site.custom && <span className="badge badge-accent">custom domain</span>}
          </div>
          <div className="mono mt-1">{site.url}</div>
        </div>
        <div className="hidden min-w-[120px] text-right sm:block">
          <div className="text-[13px] text-ink-2">
            {site.visits} visits {site.trend && <span className="ml-1 text-leaf">{site.trend}</span>}
          </div>
          <div className="mono mt-0.5">updated {site.updated}</div>
        </div>
        <ArrowRight className="text-ink-4" size={14} />
      </Link>
    </motion.div>
  );
}

function PageHeading({ eyebrow, title, muted }: { eyebrow: string; title: string; muted?: string }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div className="eyebrow mb-3" variants={fadeUp}>{eyebrow}</motion.div>
      <motion.h1 className="serif text-[40px] font-normal leading-none md:text-[44px]" variants={fadeUp}>
        {title} {muted && <span className="serif-italic text-ink-3">{muted}</span>}
      </motion.h1>
    </motion.div>
  );
}

function StatCard({ label, value, hint, highlight }: { label: string; value: string; hint: string; highlight?: boolean }) {
  return (
    <motion.div
      className={`card p-[18px] ${highlight ? "border-transparent bg-ink text-paper" : "border-rule-2 bg-paper text-ink"}`}
      variants={fadeUp}
      whileHover={cardHover}
    >
      <div className={`mono ${highlight ? "text-accent-soft" : ""}`}>{label}</div>
      <div className="serif mt-1 text-[32px] font-medium">{value}</div>
      <div className={`mt-0.5 text-[11.5px] ${highlight ? "text-accent-soft" : "text-ink-3"}`}>{hint}</div>
    </motion.div>
  );
}

function MiniMetric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="serif text-[22px] font-medium">{value}</div>
      <div className="mono">{label}</div>
    </div>
  );
}

function AnimatedLink({
  href,
  children,
  variant = "accent",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "accent" | "soft";
}) {
  return (
    <motion.div whileHover={buttonHover} whileTap={buttonTap}>
      <Link
        className={`btn-focus inline-flex items-center justify-center gap-2 rounded-[2px] px-4 py-3 text-[13px] font-medium ${
          variant === "accent"
            ? "border border-accent bg-accent text-white"
            : "border border-ink bg-transparent text-ink"
        }`}
        href={href}
      >
        {children}
      </Link>
    </motion.div>
  );
}
