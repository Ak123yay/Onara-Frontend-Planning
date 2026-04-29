import Link from "next/link";
import Logo from "@/components/primitives/Logo";
import SitePreview from "@/components/result/SitePreview";
import RightRail from "@/components/result/RightRail";
import { Edit, Layers, Phone, ArrowRight } from "@/lib/icons";

export default function ReadyPage() {
  return (
    <main className="min-h-screen bg-[var(--paper-2)]">
      <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-[var(--rule-2)] bg-[var(--paper)]">
        <Logo />
        <div className="hidden md:flex items-center gap-3.5">
          <span className="text-[12px] text-[var(--ink-3)]">Preview · not published yet</span>
          <button className="chip">
            <Layers size={11} /> Desktop
          </button>
          <button className="chip">
            <Phone size={11} /> Mobile
          </button>
        </div>
        <div className="flex gap-2.5">
          <Link
            href="/dashboard/site/lupitas/revisions"
            className="btn btn-soft btn-sm"
          >
            <Edit size={12} /> Request changes
          </Link>
          <Link href="/auth/sign-up" className="btn btn-accent btn-sm">
            Save &amp; publish <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <div className="p-5 md:p-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="fade-up">
          <SitePreview />
        </div>
        <div className="fade-up fade-up-d2">
          <RightRail />
        </div>
      </div>
    </main>
  );
}
