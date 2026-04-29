import Link from "next/link";
import { SearchIcon, ArrowRight } from "@/lib/icons";

export default function EmptyState() {
  return (
    <div className="flex-1 px-8 pb-10 flex items-center justify-center">
      <div className="card p-10 text-center max-w-[520px] fade-up">
        <div
          className="w-14 h-14 mx-auto mb-5 rounded-full"
          style={{ background: "var(--accent-soft)" }}
        />
        <h3 className="serif text-[26px] m-0">No sites yet</h3>
        <p className="text-[13px] text-[var(--ink-3)] mt-2.5 leading-[1.5]">
          Type your business name and we&apos;ll handle the rest.
          <br />
          Most sites are ready in under two minutes.
        </p>
        <div className="card-tight mt-5 flex items-center pl-4 p-1.5 border-[var(--ink)] gap-2" style={{ borderWidth: 1.5 }}>
          <SearchIcon size={14} />
          <div className="flex-1 py-2 text-[13px] text-left text-[var(--ink-3)]">
            Your business name…
          </div>
          <Link href="/build" className="btn btn-accent btn-sm">
            Build <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
