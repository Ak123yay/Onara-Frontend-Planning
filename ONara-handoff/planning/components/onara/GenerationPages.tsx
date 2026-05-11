"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Copy, Edit3, ExternalLink, Globe2, LayoutPanelTop, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AppShell } from "@/components/onara/AppShell";
import { PizzaSitePreview } from "@/components/onara/BrowserMock";
import { agents } from "@/components/onara/content";
import { buttonHover, buttonTap, cardHover, fadeUp, refinedEase, staggerContainer } from "@/components/onara/motion";

export function GeneratingPage() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (active >= agents.length) {
      return;
    }
    const duration = 1200;
    const start = Date.now();
    const tick = window.setInterval(() => {
      const next = Math.min(1, (Date.now() - start) / duration);
      setProgress(next);
      if (next >= 1) {
        window.clearInterval(tick);
        setActive((value) => value + 1);
        setProgress(0);
      }
    }, 35);
    return () => window.clearInterval(tick);
  }, [active]);

  const totalProgress = Math.min(100, ((active + progress) / agents.length) * 100);

  return (
    <AppShell>
      <div className="grid min-h-screen gap-8 px-5 py-8 md:px-10 xl:grid-cols-[380px_1fr]">
        <motion.aside initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div className="eyebrow mb-3.5" variants={fadeUp}>
            Building your site
          </motion.div>
          <motion.h1 className="serif text-[34px] font-normal leading-[1.08]" variants={fadeUp}>
            Mike&apos;s Pizza
          </motion.h1>
          <motion.p className="mt-2 max-w-[360px] text-[13px] leading-5 text-ink-3" variants={fadeUp}>
            10 small AIs working in sequence. Stay or close the tab - we&apos;ll save your spot.
          </motion.p>

          <motion.div className="card-soft mt-7 p-5" variants={fadeUp}>
            <div className="flex items-baseline justify-between">
              <div className="mono">Progress</div>
              <div className="font-mono text-[11px] text-ink-2">
                {Math.min(active, agents.length)} / {agents.length}
              </div>
            </div>
            <div className="mt-2.5 h-0.5 overflow-hidden rounded bg-paper-3">
              <motion.div
                className="h-full bg-accent"
                animate={{ width: `${totalProgress}%` }}
                transition={{ duration: 0.24, ease: refinedEase }}
              />
            </div>
            <div className="mt-3.5 text-xs text-ink-3">
              ~{Math.max(5, Math.round((agents.length - active - progress) * 8))}s remaining
            </div>
          </motion.div>

          <motion.div className="mt-6 flex max-h-[58vh] flex-col gap-1 overflow-y-auto pr-1" variants={staggerContainer}>
            {agents.map((agent, index) => {
              const status = index < active ? "done" : index === active ? "active" : "pending";
              return (
                <motion.div
                  className={`flex items-center gap-3 rounded-[3px] px-3.5 py-2.5 text-[13px] ${
                    status === "active" ? "bg-accent-softer" : ""
                  } ${status === "pending" ? "text-ink-4" : "text-ink"}`}
                  key={agent.id}
                  variants={fadeUp}
                  animate={status === "active" ? { x: [0, 4, 0] } : { x: 0 }}
                  transition={status === "active" ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" } : undefined}
                >
                  <span className={`sdot ${status === "done" ? "sdot-done" : status === "active" ? "sdot-on" : "sdot-pending"}`} />
                  <div className="min-w-0 flex-1">
                    <div className={status === "active" ? "font-medium" : ""}>{agent.name}</div>
                    {status === "active" && (
                      <div className="mt-0.5 text-[11px] text-accent-ink">{agent.task}...</div>
                    )}
                  </div>
                  <div className="mono text-[9.5px]">{agent.model}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.aside>

        <motion.section
          className="card flex min-h-[680px] flex-col overflow-hidden"
          initial={{ opacity: 0, y: 26, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.72, ease: refinedEase }}
        >
          <div className="flex items-center gap-1.5 border-b border-rule-2 bg-paper-2 px-3.5 py-3">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-3.5 flex-1 rounded-full border border-rule bg-paper px-3.5 py-1.5 font-mono text-[11px] text-ink-3">
              preview · building
            </div>
            <span className="badge badge-accent">live</span>
          </div>
          <LivePreview active={active} />
        </motion.section>
      </div>
    </AppShell>
  );
}

export function ResultPage() {
  return (
    <AppShell>
      <motion.div
        className="mx-auto max-w-[1120px] px-5 py-10 md:px-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="mb-8 text-center" variants={fadeUp}>
          <div className="hand mb-2 text-[28px]">↓ it&apos;s live ↓</div>
          <h1 className="serif text-[46px] font-normal leading-none md:text-[58px]">
            Mike&apos;s Pizza is <span className="serif-italic text-accent-ink">online</span>.
          </h1>
          <p className="mt-3 text-[15px] text-ink-3">Built in 87 seconds. Deployed to a real public URL.</p>
        </motion.div>
        <motion.div className="mb-7 flex flex-wrap items-center justify-center gap-3" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink bg-paper px-4 py-2.5 font-mono text-xs">
            <span className="sdot sdot-leaf" />
            mikes-pizza-a3f2.pages.dev
            <Copy className="text-ink-3" size={13} />
          </div>
          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Link
              className="btn-focus inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-5 py-3 text-[13.5px] font-medium text-white"
              href="/sites/mikes-pizza"
            >
              Visit live site
              <ExternalLink size={14} />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="card deep-shadow overflow-hidden" variants={fadeUp}>
          <div className="flex items-center gap-1.5 border-b border-rule-2 bg-paper-2 px-3.5 py-3">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-3.5 flex-1 rounded-full border border-rule bg-paper px-3.5 py-1.5 font-mono text-[11px] text-ink-3">
              mikes-pizza-a3f2.pages.dev
            </div>
          </div>
          <PizzaSitePreview />
        </motion.div>
        <motion.div className="mt-7 grid gap-4 md:grid-cols-3" variants={staggerContainer}>
          <ResultAction icon={Edit3} title="Request a revision" desc="Plain English. e.g. 'Make the hero darker.'" href="/sites/mikes-pizza" />
          <ResultAction icon={Globe2} title="Connect a domain" desc="Use your own domain. $10 one-time." href="/domain" />
          <ResultAction icon={LayoutPanelTop} title="See in dashboard" desc="Manage all your sites in one place." href="/dashboard" />
        </motion.div>
      </motion.div>
    </AppShell>
  );
}

function LivePreview({ active }: { active: number }) {
  const visible = useMemo(
    () => ({
      nav: active >= 1,
      hero: active >= 2,
      photo: active >= 3,
      menu: active >= 4,
      visit: active >= 6,
      seo: active >= 8,
    }),
    [active],
  );

  return (
    <div className="flex-1 overflow-auto p-6 md:p-9">
      <div className="mx-auto max-w-[720px]">
        {visible.nav && (
          <motion.div className="mb-4 flex items-center justify-between" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div className="serif text-xl font-medium">Mike&apos;s Pizza</div>
            <div className="flex gap-4 text-[11px] text-ink-3">
              <span>Menu</span>
              <span>Hours</span>
              <span>Visit</span>
            </div>
          </motion.div>
        )}
        {visible.hero && (
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mono mb-2.5 text-accent-ink">Wood-fired · since 2008</div>
            <div className="serif text-[42px] font-medium leading-none">
              Austin&apos;s slowest
              <br />
              pizza dough.
            </div>
            <p className="mt-3 max-w-[420px] text-[12.5px] leading-5 text-ink-3">
              72-hour cold ferment, San Marzano tomatoes, fior di latte. Open till 10.
            </p>
          </motion.div>
        )}
        {visible.photo && <RevealBlock className="ph ph-warm mt-5 h-[200px] rounded">hero photo</RevealBlock>}
        {visible.menu && (
          <motion.div className="mt-5 grid gap-3 sm:grid-cols-3" initial="hidden" animate="visible" variants={staggerContainer}>
            {["Margherita $14", "Pepperoni $16", "Funghi $17"].map((item) => (
              <motion.div className="card-soft p-3.5 text-xs" key={item} variants={fadeUp}>
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
        {visible.visit && (
          <RevealBlock className="mt-5 rounded bg-ink p-4 text-paper">
            <div className="mono mb-1.5 text-accent-soft">Visit</div>
            <div className="text-[13px]">218 Congress Ave · (512) 555-0182</div>
          </RevealBlock>
        )}
        {visible.seo && (
          <RevealBlock className="mt-4 flex items-center gap-2 rounded-[3px] bg-accent-softer p-3 text-[11px] text-accent-ink">
            <Sparkles size={13} />
            SEO meta added · LocalBusiness schema embedded
          </RevealBlock>
        )}
        {active < 2 && (
          <div className="flex flex-col gap-3.5 pt-16">
            <div className="shimmer h-3.5 w-[40%] rounded" />
            <div className="shimmer h-9 w-[85%] rounded" />
            <div className="shimmer h-9 w-[70%] rounded" />
            <div className="shimmer mt-4 h-[220px] w-full rounded" />
          </div>
        )}
        {active >= agents.length && (
          <motion.div className="mt-8 text-center" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <Link
              className="btn-focus inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-5 py-3 text-[13.5px] font-medium text-white"
              href="/result"
            >
              Open finished site
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function RevealBlock({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.44, ease: refinedEase }}>
      {children}
    </motion.div>
  );
}

function ResultAction({
  icon: Icon,
  title,
  desc,
  href,
}: {
  icon: typeof Edit3;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <motion.div variants={fadeUp} whileHover={cardHover} whileTap={buttonTap}>
      <Link className="card block p-5" href={href}>
        <div className="mb-3.5 flex size-9 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
          <Icon size={16} />
        </div>
        <div className="serif mb-1 text-lg font-medium">{title}</div>
        <p className="text-[12.5px] leading-5 text-ink-3">{desc}</p>
      </Link>
    </motion.div>
  );
}
