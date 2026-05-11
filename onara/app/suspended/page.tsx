import Link from "next/link";
import { Globe } from "@/lib/icons";

export default function SuspendedPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] flex items-center justify-center px-6 relative">
      <div
        className="absolute top-0 inset-x-0 chrome"
        style={{ borderTop: "0", borderBottom: "1px solid var(--rule-2)" }}
      >
        <div className="chrome-dots">
          <span className="chrome-dot" />
          <span className="chrome-dot" />
          <span className="chrome-dot" />
        </div>
        <div className="chrome-url">mikespizza.com</div>
      </div>
      <div className="text-center max-w-[460px] py-10">
        <div className="w-14 h-14 rounded-full border-[1.5px] border-[var(--ink)] mx-auto mb-5 flex items-center justify-center text-[var(--ink-3)]">
          <Globe size={22} />
        </div>
        <h1 className="serif text-[clamp(24px,3vw,32px)] m-0 tracking-[-0.015em]">
          This site is paused.
        </h1>
        <p className="text-[14px] text-[var(--ink-3)] mt-3 leading-[1.5]">
          Mike&apos;s Pizza is being updated and will be back shortly. If this is your site, sign in to restore it.
        </p>
        <Link href="/auth/sign-in" className="btn btn-soft mt-5">
          Sign in to Onara
        </Link>
        <div className="mono mt-7" style={{ color: "var(--ink-4)" }}>
          Built with Onara · onara.tech
        </div>
      </div>
    </main>
  );
}
