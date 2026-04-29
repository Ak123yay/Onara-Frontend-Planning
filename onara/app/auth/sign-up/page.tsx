import Link from "next/link";
import Logo from "@/components/primitives/Logo";
import AuthForm from "@/components/auth/AuthForm";

export default function SignUpPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div
        className="p-10 md:p-12 flex flex-col justify-between relative"
        style={{ background: "var(--accent-soft)" }}
      >
        <Logo />
        <div className="fade-up">
          <h2 className="serif text-[clamp(28px,3.5vw,42px)] leading-[1.1] tracking-[-0.02em] m-0">
            “Took 90 seconds.
            <br />
            Better than the site
            <br />I paid $2,400 for.”
          </h2>
          <div className="mt-5 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[var(--paper)]/70" />
            <div>
              <div className="text-[13px] font-medium">Mike Cantelli</div>
              <div className="text-[11px] text-[var(--ink-3)]">Mike&apos;s Pizza · Austin</div>
            </div>
          </div>
        </div>
        <div className="mono" style={{ color: "var(--accent-ink)" }}>
          14 days of Pro · no card
        </div>
      </div>

      <div className="p-10 md:p-12 flex flex-col justify-center">
        <div className="mono mb-1.5">Sign up</div>
        <h1 className="serif text-[clamp(24px,3vw,32px)] m-0 tracking-[-0.02em] mb-8">
          Get your site in 90 seconds.
        </h1>
        <AuthForm mode="sign-up" />
        <div className="mt-6 text-[12px] text-[var(--ink-3)]">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-[var(--ink)] underline">
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
