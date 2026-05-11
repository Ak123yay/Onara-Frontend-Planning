"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "@/lib/icons";

export default function AuthForm({ mode = "sign-up" }: { mode?: "sign-in" | "sign-up" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
      }}
    >
      <motion.button
        type="button"
        onClick={() => router.push("/dashboard")}
        variants={fieldVariants}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        className="btn btn-soft w-full"
        style={{ width: "100%", padding: "14px 16px", fontSize: 14 }}
      >
        <GoogleMark />
        Continue with Google
      </motion.button>

      <motion.div
        className="flex items-center gap-3 my-5 text-[var(--ink-4)] text-[11px]"
        variants={fieldVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 h-px bg-[var(--rule-2)]" />
        <span className="mono">or with email</span>
        <div className="flex-1 h-px bg-[var(--rule-2)]" />
      </motion.div>

      <motion.div variants={fieldVariants} transition={{ duration: 0.5 }}>
        <label
          className="mono mb-1.5 block text-[10px]"
          style={{ letterSpacing: "0.08em" }}
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="mike@mikespizza.com"
          required
        />
      </motion.div>

      <motion.div variants={fieldVariants} transition={{ duration: 0.5 }} className="mt-4">
        <label
          className="mono mb-1.5 block text-[10px]"
          style={{ letterSpacing: "0.08em" }}
          htmlFor="pw"
        >
          Password
        </label>
        <input
          id="pw"
          type="password"
          className="input"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="••••••••••"
          required
        />
      </motion.div>

      <motion.button
        type="submit"
        variants={fieldVariants}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="btn btn-accent w-full mt-5"
        style={{ width: "100%", padding: "14px 16px" }}
      >
        {mode === "sign-up" ? "Create account" : "Sign in"}
        <ArrowRight size={14} />
      </motion.button>

      <motion.div
        className="text-[11px] text-[var(--ink-3)] mt-4 leading-[1.5]"
        variants={fieldVariants}
        transition={{ duration: 0.5 }}
      >
        By continuing, you agree to our Terms.
      </motion.div>
    </motion.form>
  );
}

function GoogleMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
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
