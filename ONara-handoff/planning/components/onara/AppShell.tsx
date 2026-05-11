"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { dashboardNav, demoUser } from "@/components/onara/content";
import { buttonHover, buttonTap, fadeUp, refinedEase } from "@/components/onara/motion";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-paper text-ink">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-rule-2 bg-paper-2 px-4 py-5 lg:flex">
        <div className="px-3 pb-7">
          <Logo />
        </div>
        <nav className="flex flex-col gap-1">
          {dashboardNav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href === "/sites" && pathname.startsWith("/sites"));
            const Icon = item.icon;
            return (
              <Link
                className={`flex items-center gap-2.5 rounded-[3px] px-3 py-2.5 text-[13.5px] transition-colors ${
                  active
                    ? "border border-rule bg-paper font-medium text-ink"
                    : "text-ink-2 hover:bg-paper-3"
                }`}
                href={item.href}
                key={item.href}
              >
                <Icon size={15} strokeWidth={1.7} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <motion.div
          className="card mt-auto bg-accent-softer p-3.5"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: refinedEase, delay: 0.2 }}
        >
          <div className="mono mb-1 text-accent-ink">Pro trial</div>
          <p className="mb-3 text-[12.5px] leading-5 text-ink-2">
            {demoUser.trialDaysLeft} days left to keep your live URLs.
          </p>
          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Link
              className="btn-focus inline-flex w-full items-center justify-center gap-2 rounded-[2px] border border-accent bg-accent px-3 py-2 text-[12.5px] font-medium text-white"
              href="/pricing"
            >
              Upgrade
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </motion.div>
        <div className="mt-3 flex items-center gap-2.5 border-t border-rule-2 px-2 py-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-ink">
            R
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs text-ink">{demoUser.email}</div>
            <div className="mono truncate text-[10px]">{demoUser.plan}</div>
          </div>
        </div>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-rule-2 bg-paper/92 px-5 py-4 backdrop-blur-md lg:hidden">
          <Logo />
          <Link
            className="btn-focus inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-3.5 py-2 text-[12.5px] font-medium text-white"
            href="/build"
          >
            <Sparkles size={14} />
            Build
          </Link>
        </header>
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
