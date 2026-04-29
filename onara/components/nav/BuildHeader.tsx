import Link from "next/link";
import Logo from "@/components/primitives/Logo";
import StepDots from "./StepDots";

export default function BuildHeader({ step }: { step: 1 | 2 | 3 | 4 }) {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[var(--rule-2)]">
      <Logo />
      <div className="hidden md:block">
        <StepDots step={step} />
      </div>
      <div className="flex items-center gap-3 text-[12px] text-[var(--ink-3)]">
        <Link href="/" className="hover:text-[var(--ink)] transition-colors">
          Save &amp; exit
        </Link>
      </div>
    </header>
  );
}
