"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ArrowRight, ArrowLeft } from "@/lib/icons";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

export default function ConfirmCard() {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const amberRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const card = cardRef.current;
    const amber = amberRef.current;
    if (!card) return;
    gsap.from(card, { opacity: 0, y: 24, duration: 0.8, ease: "power3.out" });
    if (amber) {
      gsap.fromTo(
        amber,
        { boxShadow: "0 0 0 0 rgba(201,160,78,0)" },
        {
          boxShadow: "0 0 0 8px rgba(201,160,78,0.1)",
          duration: 1.4,
          delay: 0.7,
          repeat: 1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );
    }
  }, []);

  return (
    <div className="w-full max-w-[760px] mx-auto fade-up">
      <div className="eyebrow text-center mb-4">Step 2 of 4</div>
      <h1 className="serif text-[clamp(28px,4vw,40px)] text-center m-0 mb-2 leading-[1.05]">
        Is this you?
      </h1>
      <p className="text-center text-[var(--ink-3)] text-[14px] mb-9">
        We found one match. Confirm what we got and fill in two missing pieces.
      </p>

      <div ref={cardRef} className="card p-0 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
          <div className="ph rounded-none min-h-[240px] text-[9px]">STOREFRONT</div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-1 gap-3">
              <h2 className="serif text-[26px] font-medium m-0">Lupita&apos;s Tacos</h2>
              <span className="chip" style={{ background: "var(--paper-2)" }}>
                <Check size={10} stroke={2.4} />
                Verified on Google
              </span>
            </div>
            <div className="text-[13px] text-[var(--ink-3)] mb-5">
              Mexican · $$ · 4.7 ★ (842 reviews)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]">
              <Field l="Address" v="1248 César Chávez Ave, LA" />
              <Field l="Phone" v="(323) 555-0142" />
              <Field l="Hours" v="Mon–Sat · 11 AM – 9 PM" />
              <Field l="Menu" v="42 items imported" />
              <Field l="Photos" v="38 photos available" />
              <Field l="Cuisine" v="Mexican, Tacos, Family-run" />
            </div>
          </div>
        </div>

        {/* Missing fields */}
        <div
          ref={amberRef}
          className="px-6 py-5"
          style={{ background: "var(--warn-soft)", borderTop: "1px solid #e8d5a1" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-[18px] h-[18px] rounded-full text-white text-[11px] flex items-center justify-center font-semibold"
              style={{ background: "var(--warn)" }}
            >
              !
            </span>
            <span className="text-[13px] font-medium">
              Two things we couldn&apos;t find — fill them in to make the site great
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div>
              <label className="text-[11px] text-[var(--ink-3)] uppercase tracking-wider">
                Your story (1–2 sentences)
              </label>
              <textarea
                className="input mt-1.5 text-[13px] resize-none"
                rows={2}
                defaultValue="Family-run since 1995. Three generations cooking the recipes my abuela brought from Jalisco."
              />
            </div>
            <div>
              <label className="text-[11px] text-[var(--ink-3)] uppercase tracking-wider">
                What you&apos;re known for
              </label>
              <input
                className="input mt-1.5 text-[13px]"
                defaultValue="Hand-pressed tortillas, slow-braised al pastor"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-7 gap-3 flex-wrap">
        <Link
          href="/build"
          className="inline-flex items-center gap-1.5 text-[13px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors"
        >
          <ArrowLeft size={13} /> Back
        </Link>
        <div className="flex gap-3 items-center flex-wrap">
          <span className="text-[12px] text-[var(--ink-3)]">
            Wrong place?{" "}
            <Link href="/build" className="link-arrow underline">
              Search again
            </Link>
          </span>
          <button
            type="button"
            onClick={() => router.push("/build/style")}
            className="btn btn-accent btn-lg"
          >
            Yes, that&apos;s us
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ l, v }: { l: string; v: string }) {
  return (
    <div>
      <div className="text-[10px] text-[var(--ink-4)] uppercase tracking-[0.08em] mb-1">{l}</div>
      <div className="text-[var(--ink)]">{v}</div>
    </div>
  );
}
