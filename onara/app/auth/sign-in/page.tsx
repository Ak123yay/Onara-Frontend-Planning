import Link from "next/link";
import Logo from "@/components/primitives/Logo";
import AuthForm from "@/components/auth/AuthForm";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--paper)]">
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[var(--rule-2)]">
        <Logo />
        <span className="text-[13px] text-[var(--ink-3)]">Need help?</span>
      </header>
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-[440px] fade-up">
          <div className="mono text-center mb-1.5">Welcome back</div>
          <h1 className="serif text-[clamp(24px,3vw,32px)] text-center m-0 mb-8">
            Sign in to Onara
          </h1>
          <div className="card p-7">
            <AuthForm mode="sign-in" />
          </div>
          <div className="text-center text-[12px] text-[var(--ink-3)] mt-5">
            New to Onara?{" "}
            <Link href="/auth/sign-up" className="text-[var(--ink)] underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
