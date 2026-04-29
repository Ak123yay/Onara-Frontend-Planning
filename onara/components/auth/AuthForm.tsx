"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/lib/icons";

export default function AuthForm({ mode = "sign-up" }: { mode?: "sign-in" | "sign-up" }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // mock — would post to backend
      }}
      className="max-w-[440px]"
    >
      <button
        type="button"
        className="btn btn-soft w-full"
        style={{ width: "100%" }}
      >
        <GoogleMark />
        Continue with Google
      </button>
      <div className="flex items-center gap-3 my-5 text-[var(--ink-4)] text-[11px]">
        <div className="flex-1 h-px bg-[var(--rule-2)]" /> or with email <div className="flex-1 h-px bg-[var(--rule-2)]" />
      </div>
      <label className="mono mb-1 block text-[9px]" htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="mike@mikespizza.com"
        required
      />
      <label className="mono mt-3.5 mb-1 block text-[9px]" htmlFor="pw">Password</label>
      <input
        id="pw"
        type="password"
        className="input"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="••••••••••"
        required
      />
      <button type="submit" className="btn btn-accent mt-4 w-full" style={{ width: "100%" }}>
        {mode === "sign-up" ? "Create account" : "Sign in"}
        <ArrowRight size={13} />
      </button>
      <div className="text-[11px] text-[var(--ink-3)] mt-3.5 leading-[1.5]">
        By continuing, you agree to our Terms.{" "}
        {mode === "sign-up" ? (
          <>
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="text-[var(--ink)] underline">
              Sign in
            </Link>
            .
          </>
        ) : (
          <>
            New to Onara?{" "}
            <Link href="/auth/sign-up" className="text-[var(--ink)] underline">
              Create an account
            </Link>
            .
          </>
        )}
      </div>
    </form>
  );
}

function GoogleMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.74-.07-1.45-.2-2.13H12v4.04h5.39a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.98-4.31 2.98-7.43z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.97-.9 6.62-2.43l-3.23-2.5c-.9.6-2.04.96-3.39.96-2.6 0-4.81-1.76-5.6-4.13H3.07v2.6A10 10 0 0 0 12 22z"
      />
      <path
        fill="#FBBC05"
        d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a10 10 0 0 0 0 9l3.33-2.6z"
      />
      <path
        fill="#EA4335"
        d="M12 5.97c1.47 0 2.78.5 3.81 1.5l2.86-2.86A10 10 0 0 0 3.07 7.5l3.33 2.6c.79-2.37 3-4.13 5.6-4.13z"
      />
    </svg>
  );
}
