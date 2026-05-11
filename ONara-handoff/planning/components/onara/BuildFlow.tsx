"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, MapPin, Phone, Search, Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AppShell } from "@/components/onara/AppShell";
import { sampleBusinesses } from "@/components/onara/content";
import { buttonHover, buttonTap, cardHover, fadeUp, refinedEase, staggerContainer } from "@/components/onara/motion";

const flowSteps = ["Find", "Confirm", "Style", "Generate"];
const toneOptions = ["Professional", "Friendly", "Bold", "Minimal", "Luxurious"];
const colorOptions = ["Auto", "Dark", "Light", "Vibrant", "Earthy"];
const layoutOptions = ["Modern", "Classic", "Bold & Graphic", "Clean & Simple"];

export function BuildFlow() {
  const [step, setStep] = useState(0);
  const [query, setQuery] = useState("Mike's Pizza Austin TX");
  const [hasSearched, setHasSearched] = useState(false);
  const [chosen, setChosen] = useState(sampleBusinesses[0]);
  const [tone, setTone] = useState("Friendly");
  const [colorStyle, setColorStyle] = useState("Auto");
  const [layout, setLayout] = useState("Modern");

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasSearched(true);
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-[960px] px-5 py-10 md:px-10 lg:py-14">
        <StepIndicator current={step} />
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.section
              key="find"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -18, transition: { duration: 0.22 } }}
              variants={staggerContainer}
            >
              <SectionIntro
                eyebrow="Step 1 · Find your business"
                title={
                  <>
                    Where are you on <span className="serif-italic">Google</span>?
                  </>
                }
                copy="We'll pull your real address, hours, photos, and reviews."
              />
              <motion.form
                className="soft-shadow mt-10 flex flex-col gap-2 rounded border border-ink bg-paper p-2 sm:flex-row sm:items-center"
                onSubmit={search}
                variants={fadeUp}
              >
                <div className="flex min-h-[56px] flex-1 items-center px-3">
                  <Search className="mr-3 text-ink-3" size={18} />
                  <input
                    className="w-full bg-transparent text-[15px] outline-none"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="e.g. Mike's Pizza Austin TX"
                  />
                </div>
                <MotionButton type="submit">Search Google</MotionButton>
              </motion.form>

              <AnimatePresence>
                {hasSearched ? (
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.42, ease: refinedEase }}
                  >
                    <div className="mono mb-3.5">3 matches found</div>
                    <motion.div className="flex flex-col gap-2.5" variants={staggerContainer} initial="hidden" animate="visible">
                      {sampleBusinesses.map((business) => (
                        <motion.button
                          className="card flex cursor-pointer items-center gap-4 p-4 text-left"
                          key={business.id}
                          onClick={() => {
                            setChosen(business);
                            setStep(1);
                          }}
                          variants={fadeUp}
                          whileHover={cardHover}
                          whileTap={buttonTap}
                        >
                          <div
                            className="flex size-16 shrink-0 items-center justify-center rounded text-3xl text-white"
                            style={{ background: business.color }}
                          >
                            {business.emoji}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-baseline gap-3">
                              <div className="serif text-[19px] font-medium">{business.name}</div>
                              <span className="inline-flex items-center gap-1 text-xs text-ink-3">
                                <Star size={12} className="fill-accent text-accent" />
                                {business.rating} · {business.reviews}
                              </span>
                            </div>
                            <div className="mt-1 text-[13px] text-ink-3">{business.address}</div>
                            <div className="mt-1 flex flex-wrap gap-3 text-xs text-ink-4">
                              <span>{business.phone || "No phone on file"}</span>
                              <span>{business.hours}</span>
                            </div>
                          </div>
                          <ArrowRight className="text-ink-4" size={16} />
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div className="hand mt-10 text-center text-[18px]" variants={fadeUp}>
                    ↑ try the example above
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          )}

          {step === 1 && (
            <motion.section key="confirm" initial="hidden" animate="visible" exit={{ opacity: 0, y: -18 }} variants={staggerContainer}>
              <SectionIntro
                eyebrow="Step 2 · Confirm"
                title={
                  <>
                    Is this <span className="serif-italic">you</span>?
                  </>
                }
              />
              <motion.div className="card mt-10 overflow-hidden" variants={fadeUp}>
                <div className="flex h-[180px] items-center justify-center text-[80px] text-white" style={{ background: chosen.color }}>
                  {chosen.emoji}
                </div>
                <div className="p-6 md:p-7">
                  <div className="mono mb-1.5">From Google Maps</div>
                  <h2 className="serif text-3xl font-medium">{chosen.name}</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <InfoField icon={MapPin} label="Address" value={chosen.address} />
                    <InfoField icon={Phone} label="Phone" value={chosen.phone || "Add your phone"} missing={!chosen.phone} />
                    <InfoField icon={Clock3} label="Hours" value={chosen.hours} />
                    <InfoField icon={Star} label="Reviews" value={`${chosen.rating} ★ · ${chosen.reviews} reviews`} />
                  </div>
                  <motion.div
                    className="mt-5 flex items-start gap-2.5 rounded-[3px] bg-accent-softer p-3.5 text-[12.5px] leading-5 text-accent-ink"
                    animate={{ scale: [1, 1.012, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles size={15} className="mt-0.5 shrink-0" />
                    We&apos;ll also import 4 photos and your top 3 reviews to feature on the homepage.
                  </motion.div>
                </div>
              </motion.div>
              <FlowActions onBack={() => setStep(0)} onNext={() => setStep(2)} nextLabel="Looks right - continue" />
            </motion.section>
          )}

          {step === 2 && (
            <motion.section key="style" initial="hidden" animate="visible" exit={{ opacity: 0, y: -18 }} variants={staggerContainer}>
              <SectionIntro
                eyebrow="Step 3 · Style preferences"
                title={
                  <>
                    How should it <span className="serif-italic">feel</span>?
                  </>
                }
                copy="All optional. Skip and we'll use smart defaults for your industry."
              />
              <motion.div className="card mt-10 p-6 md:p-8" variants={fadeUp}>
                <Pills label="Tone" options={toneOptions} value={tone} onChange={setTone} />
                <Pills label="Color style" options={colorOptions} value={colorStyle} onChange={setColorStyle} />
                <Pills label="Layout" options={layoutOptions} value={layout} onChange={setLayout} />
                <label className="mono mb-2 mt-7 block">Anything else?</label>
                <textarea
                  className="input min-h-[112px]"
                  placeholder="e.g. We do emergency callouts 24/7. Brand colors are navy and white. Mention our family-owned story."
                />
              </motion.div>
              <div className="mt-7 flex items-center justify-between gap-3">
                <MotionButton variant="ghost" onClick={() => setStep(1)}>
                  <ArrowLeft size={14} />
                  Back
                </MotionButton>
                <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                  <Link
                    className="btn-focus inline-flex items-center justify-center gap-2 rounded-[2px] border border-accent bg-accent px-5 py-4 text-[14px] font-medium text-white"
                    href="/generating"
                  >
                    <Sparkles size={15} />
                    Generate my site
                  </Link>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </AppShell>
  );
}

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-2 md:mb-14">
      {flowSteps.map((label, index) => (
        <div className="flex items-center" key={label}>
          <motion.div
            className="flex items-center gap-2.5"
            animate={{ opacity: index <= current ? 1 : 0.55 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className={`flex size-6 items-center justify-center rounded-full font-mono text-[11px] font-semibold ${
                index < current
                  ? "bg-ink text-paper"
                  : index === current
                    ? "bg-accent text-white"
                    : "border border-rule bg-paper text-ink-4"
              }`}
              layout
            >
              {index < current ? <Check size={12} /> : index + 1}
            </motion.div>
            <span className={`text-[12.5px] ${index === current ? "font-medium text-ink" : "text-ink-3"}`}>
              {label}
            </span>
          </motion.div>
          {index < flowSteps.length - 1 && <div className="mx-4 h-px w-8 bg-rule" />}
        </div>
      ))}
    </div>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy?: string }) {
  return (
    <motion.div className="text-center" variants={staggerContainer}>
      <motion.div className="eyebrow mb-3" variants={fadeUp}>
        {eyebrow}
      </motion.div>
      <motion.h1 className="serif text-[40px] font-normal leading-[1.05] md:text-5xl" variants={fadeUp}>
        {title}
      </motion.h1>
      {copy && (
        <motion.p className="mx-auto mt-3.5 max-w-[540px] text-[14.5px] leading-6 text-ink-3" variants={fadeUp}>
          {copy}
        </motion.p>
      )}
    </motion.div>
  );
}

function InfoField({
  icon: Icon,
  label,
  value,
  missing,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  missing?: boolean;
}) {
  return (
    <div className={`rounded-[3px] border p-3.5 ${missing ? "border-warn bg-warn-soft" : "border-rule-2"}`}>
      <div className="mono mb-1.5 flex items-center gap-1.5">
        <Icon size={12} />
        {label}
        {missing && <span className="badge ml-auto bg-warn-soft text-accent-ink">Missing</span>}
      </div>
      <div className={`text-[13.5px] ${missing ? "text-accent-ink" : "text-ink"}`}>{value}</div>
    </div>
  );
}

function Pills({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="mono mb-2.5">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <motion.button
            className={`chip px-3.5 py-2 text-[13px] ${value === option ? "chip-active" : ""}`}
            key={option}
            onClick={() => onChange(option)}
            whileHover={{ y: -2 }}
            whileTap={buttonTap}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function FlowActions({
  onBack,
  onNext,
  nextLabel,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel: string;
}) {
  return (
    <div className="mt-7 flex items-center justify-between gap-3">
      <MotionButton variant="ghost" onClick={onBack}>
        <ArrowLeft size={14} />
        Search again
      </MotionButton>
      <MotionButton onClick={onNext}>
        {nextLabel}
        <ArrowRight size={14} />
      </MotionButton>
    </div>
  );
}

function MotionButton({
  children,
  onClick,
  type,
  variant = "accent",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "accent" | "ghost";
}) {
  return (
    <motion.button
      className={`btn-focus inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[2px] px-5 text-[13.5px] font-medium ${
        variant === "accent"
          ? "border border-accent bg-accent text-white hover:border-accent-2 hover:bg-accent-2"
          : "border border-transparent bg-transparent text-ink hover:bg-paper-2"
      }`}
      onClick={onClick}
      type={type || "button"}
      whileHover={buttonHover}
      whileTap={buttonTap}
    >
      {children}
    </motion.button>
  );
}
