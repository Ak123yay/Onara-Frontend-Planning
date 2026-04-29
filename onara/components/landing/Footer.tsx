import Link from "next/link";
import Logo from "@/components/primitives/Logo";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 pt-16 pb-10 border-t border-[var(--rule-2)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
        <div>
          <Logo />
          <p className="mt-5 text-[14px] text-[var(--ink-3)] leading-[1.55] max-w-[320px]">
            The only website builder that starts with your Google Business Profile, not a blank page.
          </p>
        </div>

        <div>
          <div className="mono mb-3">Product</div>
          <ul className="space-y-2 text-[13px] text-[var(--ink-2)]">
            <li><Link href="#how" className="hover:text-[var(--accent)] transition-colors">How it works</Link></li>
            <li><Link href="#examples" className="hover:text-[var(--accent)] transition-colors">Examples</Link></li>
            <li><Link href="/pricing" className="hover:text-[var(--accent)] transition-colors">Pricing</Link></li>
            <li><Link href="/build" className="hover:text-[var(--accent)] transition-colors">Build my site</Link></li>
          </ul>
        </div>

        <div>
          <div className="mono mb-3">Company</div>
          <ul className="space-y-2 text-[13px] text-[var(--ink-2)]">
            <li><a className="hover:text-[var(--accent)] transition-colors">About</a></li>
            <li><a className="hover:text-[var(--accent)] transition-colors">Press</a></li>
            <li><a className="hover:text-[var(--accent)] transition-colors">Careers</a></li>
            <li><a className="hover:text-[var(--accent)] transition-colors">hello@onara.co</a></li>
          </ul>
        </div>

        <div>
          <div className="mono mb-3">Legal</div>
          <ul className="space-y-2 text-[13px] text-[var(--ink-2)]">
            <li><a className="hover:text-[var(--accent)] transition-colors">Privacy</a></li>
            <li><a className="hover:text-[var(--accent)] transition-colors">Terms</a></li>
            <li><a className="hover:text-[var(--accent)] transition-colors">Security</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center text-[12px] text-[var(--ink-4)] pt-6 border-t border-[var(--rule-2)]">
        <span>© Onara 2026 · Built for restaurants &amp; cafés</span>
        <span>Made on a Friday in Austin</span>
      </div>
    </footer>
  );
}
