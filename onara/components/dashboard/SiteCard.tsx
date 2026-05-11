import Link from "next/link";
import { StatusDot } from "@/components/primitives/StatusDot";
import { Eye, Edit, Cog, TrendUp, Glyph, Storefront, type GlyphName } from "@/lib/icons";

export type Site = {
  id: string;
  name: string;
  url: string;
  custom?: string;
  live: boolean;
  rev: string;
  danger?: boolean;
  visits?: number;
  trend?: string | null;
  glyph?: GlyphName;
  bg?: string;
  type?: string;
  updated?: string;
};

export default function SiteCard({ site }: { site: Site }) {
  return (
    <Link
      href={`/dashboard/site/${site.id}`}
      className="card p-0 overflow-hidden bg-[var(--paper)] hover-lift transition-all duration-300 block relative group"
    >
      {site.danger && (
        <div
          className="absolute top-3 right-3 hand text-[18px] -rotate-3 z-10"
          style={{ color: "var(--accent-ink)" }}
        >
          going offline ↓
        </div>
      )}
      <div
        className="h-[140px] relative flex items-center justify-center overflow-hidden"
        style={{
          background: site.bg ?? "var(--paper-2)",
        }}
      >
        <span className="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg] text-white/95">
          {site.glyph ? (
            <Glyph name={site.glyph} size={56} stroke={1.4} />
          ) : (
            <Storefront size={56} stroke={1.4} />
          )}
        </span>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.45), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[1px] opacity-30"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-2">
          <div className="serif text-[18px] truncate">{site.name}</div>
          <span
            className="chip chip-soft text-[10px] mono shrink-0"
            style={{
              borderColor: site.live ? "var(--accent)" : "var(--rule)",
              color: site.live ? "var(--accent-ink)" : "var(--ink-3)",
            }}
          >
            <StatusDot state={site.live ? "on" : "pending"} />
            {site.live ? "live" : "paused"}
          </span>
        </div>
        {site.type && (
          <div className="text-[11px] text-[var(--ink-3)] mt-0.5">{site.type}</div>
        )}
        <div className="mono mt-2 truncate">{site.custom || site.url}</div>

        {site.live && site.visits !== undefined && site.visits > 0 && (
          <div className="flex items-center gap-3 mt-3 text-[11px]">
            <span className="text-[var(--ink-2)]">
              <span className="font-medium">{site.visits}</span>{" "}
              <span className="text-[var(--ink-3)]">visits / mo</span>
            </span>
            {site.trend && (
              <span
                className="inline-flex items-center gap-1"
                style={{ color: "var(--accent-ink)" }}
              >
                <TrendUp size={10} stroke={2.4} /> {site.trend}
              </span>
            )}
          </div>
        )}

        <div className="flex justify-between items-center mt-3 pt-3 border-t border-[var(--rule-2)]">
          <span className="text-[11px] text-[var(--ink-3)]">
            {site.updated ? `Updated ${site.updated}` : `Revisions ${site.rev}`}
          </span>
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
