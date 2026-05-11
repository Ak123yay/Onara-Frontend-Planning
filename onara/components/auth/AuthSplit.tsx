"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/primitives/Logo";
import AuthForm from "@/components/auth/AuthForm";

interface Props {
  mode?: "sign-in" | "sign-up";
}

export default function AuthSplit({ mode = "sign-up" }: Props) {
  const reduced = useReducedMotion();
  const isSignup = mode === "sign-up";

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
      {/* Left — dark testimonial */}
      <div
        className="px-10 md:px-14 py-12 flex flex-col justify-between relative overflow-hidden"
        style={{ background: "var(--ink)", color: "var(--paper)" }}
      >
        <motion.div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(177,90,58,0.4)",
            filter: "blur(60px)",
          }}
          animate={reduced ? {} : { scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo />
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.3, 1] }}
        >
          <div className="hand text-[28px] mb-5" style={{ color: "var(--accent-2)" }}>
            &ldquo;~90 seconds. I almost cried.&rdquo;
          </div>
          <div className="serif text-[clamp(28px,3.5vw,38px)] leading-[1.1] tracking-[-0.02em] m-0 font-normal">
            I&apos;d been putting off a website for{" "}
            <span className="italic">six years</span>. Onara built mine while my kettle boiled.
          </div>
          <div className="mt-7 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white"
              style={{ background: "var(--accent)" }}
            >
              R
            </div>
            <div>
              <div className="text-[13.5px]">Rosa Mendez</div>
              <div className="text-[12px]" style={{ color: "var(--ink-4)" }}>
                Bloom Florist · Brooklyn
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mono relative z-10"
          style={{ color: "var(--ink-4)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Trusted by 1,200+ small businesses
        </motion.div>
      </div>

      {/* Right — form */}
      <div className="flex items-center justify-center px-6 sm:px-10 py-12">
        <motion.div
          className="w-full max-w-[440px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.3, 1] }}
        >
          <div className="eyebrow mb-3">{isSignup ? "Create account" : "Welcome back"}</div>
          <h1 className="serif text-[clamp(32px,4vw,44px)] leading-[1.05] tracking-[-0.02em] m-0 font-normal">
            {isSignup ? (
              <>
                Build your first site in <span className="italic">90s</span>.
              </>
            ) : (
              <>
                Sign in to <span className="italic">Onara</span>.
              </>
            )}
          </h1>
          <p className="text-[14px] text-[var(--ink-3)] mt-3">
            {isSignup ? "14-day Pro trial. No credit card." : "Pick up where you left off."}
          </p>

          <div className="mt-8">
            <AuthForm mode={mode} />
          </div>

          <div className="mt-6 text-[13px] text-[var(--ink-3)] text-center">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <Link
                  href="/auth/sign-in"
                  className="text-[var(--accent-ink)] underline hover:text-[var(--accent)] transition-colors"
                >
                  Sign in
                </Link>
              </>
            ) : (
              <>
                New to Onara?{" "}
                <Link
                  href="/auth/sign-up"
                  className="text-[var(--accent-ink)] underline hover:text-[var(--accent)] transition-colors"
                >
                  Create account
                </Link>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
