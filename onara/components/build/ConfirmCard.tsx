"use client";

import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Star, Pizza } from "@/lib/icons";

export default function ConfirmCard() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();

  return (
    <div className="w-full max-w-[760px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="eyebrow text-center mb-3">Step 2 of 4 · Confirm</div>
        <h1 className="serif text-[clamp(28px,4vw,40px)] text-center m-0 mb-2 leading-[1.05] font-normal">
          Is this <span className="italic">you</span>?
        </h1>
        <p className="text-center text-[var(--ink-3)] text-[14px] mb-9 max-w-[460px] mx-auto">
          Pulled from Google Maps. Anything in{" "}
          <span style={{ color: "var(--accent-ink)" }}>amber</span> needs your help.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        className="card p-0 overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div
          className="h-[180px] flex items-center justify-center relative overflow-hidden"
          style={{ background: "oklch(0.62 0.13 50)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), transparent 55%)",
              zIndex: 0,
            }}
          />
          <motion.div
            initial={reduced ? {} : { scale: 0.8, rotate: -8, opacity: 0 }}
            animate={reduced ? {} : { scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, type: "spring", stiffness: 140, damping: 14 }}
            className="text-white"
            style={{ position: "relative", zIndex: 1 }}
          >
            <Pizza size={84} stroke={1.4} />
          </motion.div>
        </div>
        <div className="p-7">
          <div className="mono mb-2">From Google Maps</div>
          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <h2 className="serif text-[28px] font-medium m-0">Mike&apos;s Pizza</h2>
            <span className="chip chip-soft">Pizzeria · Italian</span>
          </div>
          <div className="text-[13px] text-[var(--ink-3)] mt-2 mb-5 flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              <Star size={11} fill="var(--accent)" stroke={0} /> 4.6 · 312 Google reviews
            </span>
            <span>·</span>
            <span>Open · closes 10pm</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-[13px]">
            <Field label="Address" value="218 Congress Ave, Austin, TX 78701" />
            <Field label="Phone" value="(512) 555-0182" />
            <Field label="Hours" value="Mon–Thu 11a–10p · Fri–Sat 11a–11p · Sun 12p–9p" />
            <Field label="Photos" value="12 imported from Google" />
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <AmberField
              label="Website"
              placeholder="Add a URL or leave blank"
              hint="Missing on Google · we'll publish at mikes-pizza.pages.dev"
              animate={inView && !reduced}
              delay={0}
            />
            <AmberField
              label="Email"
              placeholder="hello@mikespizza.com"
              hint="For the contact form · optional"
              animate={inView && !reduced}
              delay={0.2}
            />
          </div>

          <div
            className="mt-6 p-3.5 rounded-xl text-[12.5px] flex gap-2.5 items-start"
            style={{ background: "var(--accent-soft)", color: "var(--accent-ink)" }}
          >
            <Check size={14} className="mt-0.5" />
            <span>
              We&apos;ll also import 4 photos and your top 3 reviews to feature on the homepage.
            </span>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-between items-center mt-7 gap-3 flex-wrap">
        <Link
          href="/build"
          className="inline-flex items-center gap-1.5 text-[13px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors"
        >
          <ArrowLeft size={13} /> Search again
        </Link>
        <motion.button
          type="button"
          onClick={() => router.push("/build/style")}
          className="btn btn-accent btn-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Looks right — continue
          <ArrowRight size={14} />
        </motion.button>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3.5 rounded-xl border border-[var(--rule-2)]">
      <div
        className="mono mb-1.5"
        style={{ fontSize: 10, letterSpacing: "0.08em" }}
      >
        {label}
      </div>
      <div className="text-[var(--ink)]">{value}</div>
    </div>
  );
}

function AmberField({
  label,
  placeholder,
  hint,
  animate = false,
  delay = 0,
}: {
  label: string;
  placeholder: string;
  hint: string;
  animate?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      className="p-3.5 rounded-xl border-l-[3px]"
      style={{
        background: "var(--warn-soft)",
        border: "1px solid rgba(201,160,78,0.4)",
        borderLeftWidth: 3,
        borderLeftColor: "var(--warn)",
      }}
      initial={{ boxShadow: "0 0 0 0 rgba(201,160,78,0)" }}
      animate={
        animate
          ? {
              boxShadow: [
                "0 0 0 0 rgba(201,160,78,0)",
                "0 0 0 6px rgba(201,160,78,0.18)",
                "0 0 0 0 rgba(201,160,78,0)",
              ],
            }
          : {}
      }
      transition={{ duration: 1.6, delay: 0.7 + delay, repeat: 1, ease: "easeInOut" }}
    >
      <div
        className="flex items-center justify-between mb-1.5"
        style={{
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontFamily: "var(--font-jetbrains), monospace",
          color: "var(--accent-ink)",
        }}
      >
        <span>{label}</span>
        <span className="badge badge-warn">Missing</span>
      </div>
      <input
        className="input text-[13px] mb-1"
        style={{
          background: "transparent",
          border: "none",
          padding: "4px 0",
          height: "auto",
          color: "var(--ink)",
        }}
        placeholder={placeholder}
      />
      <div className="text-[10px]" style={{ color: "var(--accent-ink)" }}>
        {hint}
      </div>
    </motion.div>
  );
}
