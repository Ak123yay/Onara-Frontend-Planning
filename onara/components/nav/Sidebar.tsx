"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/primitives/Logo";
import { cn } from "@/lib/utils";
import { Globe, Plus, Edit, Cog, Sparkle, Menu, X } from "@/lib/icons";

const buildLinks = [
  { href: "/dashboard", label: "My sites", icon: Globe },
  { href: "/build", label: "New site", icon: Plus },
  { href: "/dashboard/revisions", label: "Revisions", icon: Edit },
];

const accountLinks = [
  { href: "/dashboard/billing", label: "Plan & billing", icon: Cog },
  { href: "/dashboard/domain", label: "Domains", icon: Globe },
  { href: "/dashboard/settings", label: "Settings", icon: Cog },
];

export default function Sidebar({ trialDaysLeft = 11 }: { trialDaysLeft?: number }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const isActive = (href: string, label: string) => {
    if (label === "Revisions") return pathname === href || pathname.includes("/revisions");
    if (label === "Domains") return pathname === href || pathname.includes("/domain");
    return pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.classList.add("lenis-stopped");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("lenis-stopped");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 h-16 bg-[var(--paper)]/95 border-b border-[var(--rule-2)] backdrop-blur-sm" />
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "lg:hidden fixed top-2.5 left-4 z-50 w-11 h-11 rounded-full bg-[var(--paper)] border border-[var(--rule)] flex items-center justify-center shadow-sm transition-opacity",
          open && "opacity-0 pointer-events-none",
        )}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="dashboard-sidebar"
      >
        <Menu size={16} />
      </button>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        id="dashboard-sidebar"
        aria-label="Dashboard navigation"
        className={cn(
          "w-[240px] max-w-[calc(100vw-32px)] shrink-0 bg-[var(--paper-2)] border-r border-[var(--rule-2)] flex flex-col p-[20px_14px] overflow-y-auto",
          "fixed lg:static inset-y-0 left-0 z-50 transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="px-2 mb-7 flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="lg:hidden w-11 h-11 rounded-full text-[var(--ink-3)] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        <div className="sb-section">Build</div>
        {buildLinks.map((l) => {
          const Icon = l.icon;
          const active = isActive(l.href, l.label);
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className={cn("sb-item", active && "active")}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={14} />
              <span>{l.label}</span>
            </Link>
          );
        })}

        <div className="sb-section">Account</div>
        {accountLinks.map((l) => {
          const Icon = l.icon;
          const active = isActive(l.href, l.label);
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className={cn("sb-item", active && "active")}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={14} />
              <span>{l.label}</span>
            </Link>
          );
        })}

        <div className="flex-1" />

        <div
          className="rounded-2xl p-3 text-[11px] mb-3"
          style={{ background: "var(--accent-soft)" }}
        >
          <div className="flex items-center gap-2 text-[var(--accent-ink)]">
            <Sparkle size={11} />
            <span className="mono" style={{ color: "var(--accent-ink)" }}>Pro trial</span>
          </div>
          <div className="text-[12px] text-[var(--ink)] mt-1 mb-2">{trialDaysLeft} days left</div>
          <Link href="/pricing" onClick={closeMenu} className="btn btn-accent btn-sm w-full">
            Keep Pro · $29/mo
          </Link>
        </div>

        <div className="flex items-center gap-2 px-2 pt-3 border-t border-[var(--rule-2)]">
          <div className="w-7 h-7 rounded-full bg-[var(--paper-3)]" />
          <div className="flex-1 min-w-0 text-[12px] leading-tight">
            <div>Mike Cantelli</div>
            <div className="text-[var(--ink-3)] text-[10px] truncate">mike@mikespizza.com</div>
          </div>
        </div>
      </aside>
    </>
  );
}
