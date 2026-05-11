"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Copy, CreditCard, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { Navbar } from "@/components/layout/Navbar";
import { AppShell } from "@/components/onara/AppShell";
import { pricingPlans } from "@/components/onara/content";
import { buttonHover, buttonTap, cardHover, fadeUp, refinedEase, staggerContainer } from "@/components/onara/motion";

export function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="paper-texture min-h-screen">
      <Navbar />
      <motion.div className="mx-auto max-w-[1120px] px-5 py-14 md:px-10" initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div className="mb-12 text-center" variants={fadeUp}>
          <div className="eyebrow mb-3">Pricing</div>
          <h1 className="serif text-[48px] font-normal leading-none md:text-[64px]">
            One plan. <span className="serif-italic">Honest pricing.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-base leading-7 text-ink-3">
            Less than a Saturday-night pizza. Cancel anytime - your site stays online.
          </p>
          <div className="mt-7 inline-flex rounded-full border border-rule-2 bg-paper-2 p-1">
            <button className={`chip border-0 px-4 py-2 ${billing === "monthly" ? "chip-active" : ""}`} onClick={() => setBilling("monthly")}>
              Monthly
            </button>
            <button className={`chip border-0 px-4 py-2 ${billing === "yearly" ? "chip-active" : ""}`} onClick={() => setBilling("yearly")}>
              Yearly · save 20%
            </button>
          </div>
        </motion.div>
        <motion.div className="grid gap-4 lg:grid-cols-[1fr_1.15fr_1fr]" variants={staggerContainer}>
          {pricingPlans.map((plan) => (
            <motion.div
              className={`card relative p-7 ${plan.highlight ? "border-transparent bg-ink text-paper shadow-[0_30px_80px_rgb(0_0_0_/_0.18)]" : ""}`}
              key={plan.tier}
              variants={fadeUp}
              whileHover={plan.highlight ? { y: -7, scale: 1.012 } : cardHover}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-7 rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-white">
                  Most chosen
                </div>
              )}
              <div className={`mono ${plan.highlight ? "text-accent-soft" : ""}`}>{plan.tier}</div>
              <div className="mt-2 flex items-baseline gap-2">
                <div className="serif text-[56px] font-medium">
                  {plan.highlight && billing === "yearly" ? "$15" : plan.price}
                </div>
                <div className={`text-[13px] ${plan.highlight ? "text-ink-4" : "text-ink-3"}`}>
                  {plan.highlight && billing === "yearly" ? "/month, billed yearly" : plan.period}
                </div>
              </div>
              <ul className="mt-5 flex list-none flex-col gap-2.5 p-0">
                {plan.features.map((feature) => (
                  <li className="flex items-start gap-2.5 text-[13.5px]" key={feature}>
                    <Check className={plan.highlight ? "text-accent" : "text-accent-ink"} size={14} />
                    <span className={plan.highlight ? "text-paper" : "text-ink-2"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.div className="mt-6" whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  className={`btn-focus inline-flex w-full items-center justify-center rounded-[2px] px-4 py-3 text-[13px] font-medium ${
                    plan.highlight
                      ? "border border-accent bg-accent text-white"
                      : "border border-rule bg-paper-2 text-ink"
                  }`}
                  href={plan.highlight ? "/signup" : "/build"}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="mt-14 flex flex-col gap-5 rounded bg-ink p-8 text-paper md:flex-row md:items-center" variants={fadeUp}>
          <div className="flex-1">
            <div className="serif text-[26px] font-medium">Not sure yet?</div>
            <p className="mt-1.5 text-sm text-ink-4">Build your site free. Pay nothing until you want it live to the public.</p>
          </div>
          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Link className="btn-focus inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-5 py-3 text-[13.5px] font-medium text-white" href="/build">
              Try the builder
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
        <FaqSection />
      </motion.div>
    </main>
  );
}

export function DomainPage() {
  const [step, setStep] = useState(0);
  const [domain, setDomain] = useState("");

  return (
    <AppShell>
      <motion.div className="max-w-[780px] px-5 py-10 md:px-12" initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <Link className="inline-flex items-center gap-1 text-xs text-ink-3" href="/sites/mikes-pizza">
            <ArrowLeft size={12} />
            Back to site
          </Link>
        </motion.div>
        <motion.div className="eyebrow mb-2.5 mt-4" variants={fadeUp}>Custom domain</motion.div>
        <motion.h1 className="serif text-[40px] font-normal leading-none" variants={fadeUp}>
          Use your own <span className="serif-italic">domain</span>.
        </motion.h1>
        <motion.p className="mt-3 max-w-[540px] text-sm leading-6 text-ink-3" variants={fadeUp}>
          $10 one-time setup. We give you two CNAMEs, you add them at your registrar, and we verify automatically.
        </motion.p>

        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div className="card mt-7 p-7" key="domain-input" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
              <label className="mono mb-2 block">Your domain</label>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <input className="input flex-1" value={domain} onChange={(event) => setDomain(event.target.value)} placeholder="mikespizza.com" />
                <motion.button
                  className="btn-focus rounded-[2px] border border-accent bg-accent px-5 py-3 text-[13.5px] font-medium text-white disabled:opacity-45"
                  disabled={!domain}
                  onClick={() => setStep(1)}
                  whileHover={domain ? buttonHover : undefined}
                  whileTap={domain ? buttonTap : undefined}
                >
                  Continue
                </motion.button>
              </div>
              <div className="mt-3.5 flex gap-2.5 rounded-[3px] bg-paper-2 p-3 text-[12.5px] leading-5 text-ink-3">
                <Info size={15} className="mt-0.5 shrink-0" />
                Don&apos;t own a domain yet? You can buy one at Namecheap or Porkbun in about 2 minutes - usually $10-15/yr.
              </div>
            </motion.div>
          ) : (
            <motion.div className="card mt-7 p-7" key="dns" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <span className="serif text-[22px] font-medium">{domain || "mikespizza.com"}</span>
                <span className="badge bg-warn-soft text-accent-ink">
                  <span className="sdot sdot-on" />
                  verifying
                </span>
              </div>
              <p className="text-[13px] leading-5 text-ink-3">Add these two records at your domain registrar. We&apos;ll detect them within a minute.</p>
              <DnsRow type="CNAME" host="@" value="cname.onara.site" />
              <DnsRow type="CNAME" host="www" value="cname.onara.site" />
              <motion.div
                className="mt-4 flex items-center gap-2.5 rounded-[3px] bg-accent-softer p-3.5 text-[12.5px] text-accent-ink"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <span className="sdot sdot-on" />
                Polling DNS every 30s. We&apos;ll email you when it&apos;s live.
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AppShell>
  );
}

export function AuthPage({ mode }: { mode: "signin" | "signup" }) {
  const isSignup = mode === "signup";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = "/dashboard";
  }

  return (
    <main className="grid min-h-screen bg-paper lg:grid-cols-[1fr_1.1fr]">
      <motion.section
        className="relative hidden overflow-hidden bg-ink p-10 text-paper lg:flex lg:flex-col lg:justify-between xl:p-14"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: refinedEase }}
      >
        <div className="absolute -right-20 -top-20 size-[360px] rounded-full bg-accent/40 blur-[60px]" />
        <div className="relative z-10">
          <Logo light />
        </div>
        <div className="relative z-10">
          <div className="hand mb-5 text-[28px] text-[#d99a72]">&quot;~90 seconds. I almost cried.&quot;</div>
          <div className="serif text-4xl font-normal leading-[1.1]">
            I&apos;d been putting off a website for <span className="serif-italic">six years</span>. Onara built mine while my kettle boiled.
          </div>
          <div className="mt-7 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-accent font-semibold text-white">R</div>
            <div>
              <div className="text-[13.5px]">Rosa Mendez</div>
              <div className="text-xs text-ink-4">Bloom Florist · Brooklyn</div>
            </div>
          </div>
        </div>
        <div className="mono relative z-10 text-ink-4">Trusted by 1,200+ small businesses</div>
      </motion.section>

      <section className="flex items-center justify-center px-5 py-12 md:p-10">
        <motion.div className="w-full max-w-[420px]" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div className="mb-8 lg:hidden" variants={fadeUp}>
            <Logo />
          </motion.div>
          <motion.div className="eyebrow mb-3.5" variants={fadeUp}>
            {isSignup ? "Create account" : "Welcome back"}
          </motion.div>
          <motion.h1 className="serif text-[44px] font-normal leading-[1.05]" variants={fadeUp}>
            {isSignup ? (
              <>
                Build your first
                <br />
                site in <span className="serif-italic">90s</span>.
              </>
            ) : (
              <>
                Sign in to <span className="serif-italic">Onara</span>.
              </>
            )}
          </motion.h1>
          <motion.p className="mt-3.5 text-sm text-ink-3" variants={fadeUp}>
            {isSignup ? "14-day Pro trial. No credit card." : "Pick up where you left off."}
          </motion.p>
          <motion.button className="btn-focus mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[2px] border border-rule bg-paper-2 px-4 py-3.5 text-sm font-medium text-ink" variants={fadeUp} whileHover={buttonHover} whileTap={buttonTap}>
            <CreditCard size={16} />
            Continue with Google
          </motion.button>
          <motion.div className="my-6 flex items-center gap-3 text-ink-4" variants={fadeUp}>
            <div className="h-px flex-1 bg-rule-2" />
            <span className="mono">or</span>
            <div className="h-px flex-1 bg-rule-2" />
          </motion.div>
          <motion.form onSubmit={submit} variants={staggerContainer}>
            <motion.label className="mono mb-1.5 block" variants={fadeUp}>Email</motion.label>
            <motion.input className="input" type="email" defaultValue="rosa@bloomflorist.com" variants={fadeUp} />
            <motion.label className="mono mb-1.5 mt-4 block" variants={fadeUp}>Password</motion.label>
            <motion.input className="input" type="password" defaultValue="onara2026" variants={fadeUp} />
            <motion.button className="btn-focus mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[2px] border border-accent bg-accent px-4 py-3.5 text-[13.5px] font-medium text-white" type="submit" variants={fadeUp} whileHover={buttonHover} whileTap={buttonTap}>
              {isSignup ? "Create account" : "Sign in"}
              <ArrowRight size={14} />
            </motion.button>
          </motion.form>
          <motion.div className="mt-6 text-center text-[13px] text-ink-3" variants={fadeUp}>
            {isSignup ? "Already have an account? " : "New to Onara? "}
            <Link className="text-accent-ink underline" href={isSignup ? "/signin" : "/signup"}>
              {isSignup ? "Sign in" : "Create account"}
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

function DnsRow({ type, host, value }: { type: string; host: string; value: string }) {
  return (
    <div className="mt-3.5 grid grid-cols-[70px_70px_1fr_auto] items-center gap-3 rounded-[3px] border border-dashed border-rule p-3.5 font-mono text-xs">
      <span className="badge">{type}</span>
      <span>{host}</span>
      <span className="text-ink-2">{value}</span>
      <Copy size={13} className="text-ink-3" />
    </div>
  );
}

function FaqSection() {
  const questions = [
    ["What happens when my trial ends?", "If you don't add a card, your sites pause and show a friendly coming-soon page. Your data stays safe."],
    ["Can I use my own domain?", "Yes. Custom domains are a one-time $10 setup. We give you two CNAME records and verify automatically."],
    ["Do I own the site?", "100%. You can download the full HTML/CSS at any time and host it elsewhere."],
    ["What if I don't like what you built?", "Request unlimited revisions in plain English. Each revision usually takes under 90 seconds."],
  ];

  return (
    <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerContainer}>
      <motion.h2 className="serif mb-5 text-[28px] font-medium" variants={fadeUp}>Common questions</motion.h2>
      <div>
        {questions.map(([question, answer]) => (
          <Faq question={question} answer={answer} key={question} />
        ))}
      </div>
    </motion.section>
  );
}

function Faq({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="border-b border-rule-2 py-4" variants={fadeUp}>
      <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen((value) => !value)}>
        <span className="text-[15px] font-medium">{question}</span>
        <span className="text-xl text-ink-3">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.p className="max-w-[720px] pt-2.5 text-[13.5px] leading-6 text-ink-3" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
