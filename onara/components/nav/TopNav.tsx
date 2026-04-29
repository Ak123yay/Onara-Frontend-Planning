import Link from "next/link";
import Logo from "@/components/primitives/Logo";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 md:px-12 md:py-[22px]">
      <Logo />
      <div className="hidden md:flex items-center gap-7 text-[13px] text-[var(--ink-3)]">
        <Link className="hover:text-[var(--ink)] transition-colors" href="/#how">How it works</Link>
        <Link className="hover:text-[var(--ink)] transition-colors" href="/#examples">Examples</Link>
        <Link className="hover:text-[var(--ink)] transition-colors" href="/pricing">Pricing</Link>
        <Link className="hover:text-[var(--ink)] transition-colors" href="/auth/sign-in">Sign in</Link>
        <Link href="/build" className="btn btn-accent btn-sm">
          Build free
        </Link>
      </div>
      <Link href="/build" className="btn btn-accent btn-sm md:hidden">
        Build
      </Link>
    </nav>
  );
}
