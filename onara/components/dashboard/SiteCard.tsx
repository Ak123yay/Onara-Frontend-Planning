import Link from "next/link";
import { StatusDot } from "@/components/primitives/StatusDot";
import { Eye, Edit, Cog } from "@/lib/icons";

export type Site = {
  id: string;
  name: string;
  url: string;
  custom?: string;
  live: boolean;
  rev: string;
  danger?: boolean;
};

export default function SiteCard({ site }: { site: Site }) {
  return (
    <Link
      href={`/dashboard/site/${site.id}`}
      className="card p-0 overflow-hidden bg-[var(--paper)] hover:shadow-[0_16px_36px_-16px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200 block relative"
    >
      {site.danger && (
        <div
          className="absolute top-3 right-3 serif text-[18px] -rotate-3 z-10"
          style={{ color: "var(--accent-ink)" }}
        >
          going offline ↓
        </div>
      )}
      <div className="ph h-[130px] rounded-none" />
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <div className="serif text-[18px]">{site.name}</div>
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
        </div>
        <div className="mono mt-2">{site.custom || site.url}</div>
        <div className="flex justify-between items-center mt-3.5 pt-3 border-t border-[var(--rule-2)]">
          <span className="text-[11px] text-[var(--ink-3)]">Revisions {site.rev}</span>
          <div className="flex gap-2.5 text-[var(--ink-3)]">
            <Eye size={14} />
            <Edit size={14} />
            <Cog size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}
