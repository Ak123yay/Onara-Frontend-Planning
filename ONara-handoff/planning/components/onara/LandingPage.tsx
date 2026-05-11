"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Logo } from "@/components/layout/Logo";
import { BrowserMock } from "@/components/onara/BrowserMock";
import { agents, featuredSites, stats, steps } from "@/components/onara/content";
import {
  buttonHover,
  buttonTap,
  cardHover,
  fadeUp,
  refinedEase,
  staggerContainer,
} from "@/components/onara/motion";

export function LandingPage() {
  const [searchValue, setSearchValue] = useState("Mike's Pizza Austin TX");
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const previewY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const annotationY = useTransform(scrollYProgress, [0, 1], [0, -34]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/build");
  }

  return (
    <main className="paper-texture min-h-screen text-ink">
      <Navbar />
      <section
        className="relative overflow-hidden px-5 pb-16 pt-20 text-center md:px-10 md:pb-20 md:pt-[90px]"
        id="start"
        ref={heroRef}
      >
        <motion.div
          className="mx-auto max-w-[1100px]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="mono mb-6" variants={fadeUp}>
            <span className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />
            For small businesses · No code, no decisions
          </motion.div>
          <motion.h1
            className="serif mx-auto max-w-[980px] text-[52px] font-normal leading-none sm:text-[68px] lg:text-[84px]"
            variants={fadeUp}
          >
            Your website,
            <br />
            already{" "}
            <span className="hand-u serif-italic font-light">built</span> from
            your
            <br className="hidden sm:block" />
            Google Business Profile.
          </motion.h1>
          <motion.p
            className="mx-auto mt-7 max-w-[560px] text-[17px] leading-7 text-ink-3 md:text-lg"
            variants={fadeUp}
          >
            Type your business name. We&apos;ll have a complete, deployable site
            in 90 seconds. Nothing to drag, nothing to write.
          </motion.p>

          <motion.form
            className="soft-shadow mx-auto mt-11 flex max-w-[640px] flex-col gap-2 rounded sm:flex-row sm:items-center sm:border sm:border-ink sm:bg-paper sm:p-2"
            onSubmit={submitSearch}
            variants={fadeUp}
          >
            <div className="flex min-h-[58px] flex-1 items-center rounded border border-ink bg-paper px-3.5 sm:border-0 sm:px-0">
              <Search className="ml-1 mr-3 shrink-0 text-ink-3" size={18} strokeWidth={1.7} />
              <input
                aria-label="Business name and location"
                className="w-full bg-transparent py-3.5 text-[15px] text-ink outline-none placeholder:text-ink-4"
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="e.g. Mike's Pizza Austin TX"
                value={searchValue}
              />
            </div>
            <motion.button
              className="btn-focus inline-flex min-h-[54px] items-center justify-center gap-2 rounded-[2px] border border-accent bg-accent px-5 text-[13.5px] font-medium text-white transition-colors hover:border-accent-2 hover:bg-accent-2"
              type="submit"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              Build my site
              <ArrowRight size={15} strokeWidth={1.7} />
            </motion.button>
          </motion.form>
          <motion.div className="mono mt-4" variants={fadeUp}>
            14-day Pro trial · No card required
          </motion.div>

          <motion.div
            className="relative mt-20 md:mt-[90px]"
            style={{ y: previewY, perspective: 1600 }}
            variants={fadeUp}
          >
            <BrowserMock />
            <motion.div
              className="hand pointer-events-none absolute -right-2 bottom-8 hidden max-w-[160px] rotate-[6deg] text-left text-[19px] leading-none lg:block"
              style={{ y: annotationY }}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.72, delay: 0.45, ease: refinedEase }}
            >
              &larr; real, live, deployable site
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <BeforeAfter />
      <LiveBuildDemo />
      <HowItWorks />
      <Examples />
      <Stats />
      <FinalCta />
      <Footer />
    </main>
  );
}

function HowItWorks() {
  return (
    <section className="border-t border-rule-2 px-5 py-20 md:px-10 lg:py-[120px]" id="how">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="eyebrow mb-3.5" variants={fadeUp}>
            How it works
          </motion.div>
          <motion.h2
            className="serif max-w-[700px] text-[42px] font-normal leading-[1.05] md:text-[56px]"
            variants={fadeUp}
          >
            Three steps.{" "}
            <span className="serif-italic text-ink-3">One coffee.</span>
          </motion.h2>
          <motion.div
            className="mt-12 grid gap-5 md:mt-[60px] md:grid-cols-3 lg:gap-6"
            variants={staggerContainer}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.article
                  className="card relative p-7"
                  key={step.number}
                  variants={fadeUp}
                  whileHover={cardHover}
                >
                  <div className="mono mb-4 text-accent-ink">step {step.number}</div>
                  <div className="mb-[18px] flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <h3 className="serif mb-2 text-2xl font-medium">{step.title}</h3>
                  <p className="m-0 text-[13.5px] leading-6 text-ink-3">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Examples() {
  return (
    <section
      className="border-t border-rule-2 bg-paper-2 px-5 py-20 md:px-10 lg:py-[100px]"
      id="examples"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div>
            <motion.div className="eyebrow mb-3.5" variants={fadeUp}>
              Real generated sites
            </motion.div>
            <motion.h2
              className="serif max-w-[600px] text-[40px] font-normal leading-[1.05] md:text-[52px]"
              variants={fadeUp}
            >
              Every business gets its{" "}
              <span className="serif-italic">own look</span>.
            </motion.h2>
          </div>
          <motion.a
            className="btn-focus inline-flex w-fit items-center justify-center gap-2 rounded-[2px] border border-rule bg-paper px-3.5 py-2 text-[12.5px] font-medium text-ink transition-colors hover:bg-paper-3"
            href="#examples"
            variants={fadeUp}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            View all 47 examples
            <ArrowRight size={13} strokeWidth={1.7} />
          </motion.a>
        </motion.div>

        <motion.div
          className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {featuredSites.map((site) => (
            <motion.article
              className="card cursor-pointer overflow-hidden"
              key={site.name}
              variants={fadeUp}
              whileHover={cardHover}
            >
              <div
                className="relative flex h-[180px] items-center justify-center overflow-hidden text-[64px] text-white"
                style={{ background: site.color }}
              >
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  {site.emoji}
                </motion.span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_50%)]" />
                <div className="absolute bottom-3 right-3 rounded-full border border-white/35 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-white/85">
                  {site.symbol}
                </div>
              </div>
              <div className="p-4">
                <h3 className="serif mb-1 text-lg font-medium">{site.name}</h3>
                <div className="mono text-[10px]">{site.type}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-t border-rule-2 px-5 py-20 md:px-10 lg:py-[90px]" id="pricing">
      <motion.div
        className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerContainer}
      >
        {stats.map(([number, label]) => (
          <motion.div key={label} variants={fadeUp}>
            <div className="serif text-[48px] font-normal leading-none md:text-[56px]">
              {number}
            </div>
            <div className="mt-2 text-[13px] text-ink-3">{label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-ink px-5 py-24 text-center text-paper md:px-10 lg:py-[120px]">
      <motion.div
        className="mx-auto max-w-[1200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="serif text-[48px] font-light leading-none md:text-[76px]"
          variants={fadeUp}
        >
          Stop staring at a
          <br />
          <span className="serif-italic">blank page</span>.
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-[480px] text-[17px] leading-7 text-ink-4"
          variants={fadeUp}
        >
          Onara starts where you already are - your Google Business Profile.
        </motion.p>
        <motion.a
          className="btn-focus mt-11 inline-flex items-center justify-center gap-2 rounded-[2px] border border-accent bg-accent px-6 py-4 text-[14.5px] font-medium text-white transition-colors hover:border-accent-2 hover:bg-accent-2"
          href="/build"
          variants={fadeUp}
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          Try it with your business
          <ArrowRight size={15} strokeWidth={1.7} />
        </motion.a>
        <motion.div className="mono mt-3.5 text-ink-4" variants={fadeUp}>
          14 days of Pro · No card required
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col gap-6 border-t border-rule-2 px-5 py-10 text-xs text-ink-3 md:flex-row md:items-center md:justify-between md:px-10">
      <Logo />
      <div className="flex gap-6">
          <a className="transition-colors hover:text-ink" href="#privacy">
          Privacy
        </a>
        <a className="transition-colors hover:text-ink" href="#terms">
          Terms
        </a>
        <a className="transition-colors hover:text-ink" href="#contact">
          Contact
        </a>
      </div>
      <div className="mono">© 2026 Onara</div>
    </footer>
  );
}

function BeforeAfter() {
  const before = {
    hidden: { opacity: 0, x: -56, rotate: -5, scale: 0.94 },
    visible: { opacity: 1, x: 0, rotate: -2, scale: 1, transition: { duration: 0.82, ease: refinedEase } },
  };
  const after = {
    hidden: { opacity: 0, x: 56, rotate: 5, scale: 0.94 },
    visible: { opacity: 1, x: 0, rotate: 2, scale: 1, transition: { duration: 0.82, delay: 0.18, ease: refinedEase } },
  };

  return (
    <section className="border-t border-rule-2 px-5 py-20 md:px-10 lg:py-[110px]">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={staggerContainer}>
          <motion.div className="eyebrow mb-4" variants={fadeUp}>
            From listing to launch
          </motion.div>
          <motion.h2 className="serif text-[44px] font-normal leading-[1.04] md:text-[60px]" variants={fadeUp}>
            From a Google
            <br />
            listing to a
            <br />
            <span className="serif-italic">real</span> website.
          </motion.h2>
          <motion.p className="mt-5 max-w-[440px] text-base leading-7 text-ink-3" variants={fadeUp}>
            We import what&apos;s already on Google Maps - name, hours, address,
            photos - and 10 small AI agents turn it into a finished site you can
            publish.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap items-center gap-3" variants={fadeUp}>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link className="btn-focus inline-flex items-center gap-2 rounded-[2px] border border-accent bg-accent px-5 py-3.5 text-[13.5px] font-medium text-white" href="/build">
                Try it with your business
                <ArrowRight size={14} />
              </Link>
            </motion.div>
            <Link className="btn-focus inline-flex items-center gap-2 rounded-[2px] border border-ink px-5 py-3.5 text-[13.5px] font-medium text-ink" href="#examples">
              See an example
              <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div className="mono mt-3.5" variants={fadeUp}>
            ~90s · $0 to start · cancel anytime
          </motion.div>
        </motion.div>

        <motion.div className="relative min-h-[520px]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
          <motion.div className="sketch-card absolute left-0 top-0 w-[min(330px,78vw)] p-4" variants={before}>
            <div className="mono mb-2">Google Business · Before</div>
            <div className="serif mb-1 text-lg font-medium">Mike&apos;s Pizza</div>
            <div className="mb-3 flex items-center gap-1 text-xs text-ink-3">
              <span className="text-accent">★★★★</span>
              <span className="text-ink-4">★</span>
              <span>4.6 · 312</span>
            </div>
            <div className="ph mb-3 h-[100px]">storefront photo</div>
            <div className="space-y-1.5 text-xs leading-5 text-ink-2">
              <div>📍 218 Congress Ave, Austin</div>
              <div>☎ (512) 555-0182</div>
              <div>◷ Open · closes 10pm</div>
            </div>
          </motion.div>

          <motion.div
            className="hand absolute left-[42%] top-[210px] z-10 hidden text-[34px] text-accent-ink md:block"
            initial={{ opacity: 0, scale: 0.8, rotate: -14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45, ease: refinedEase }}
          >
            →
            <div className="mt-1 text-[17px] leading-none">
              10 agents,
              <br />
              ~90 seconds
            </div>
          </motion.div>

          <motion.div className="sketch-card absolute bottom-0 right-0 w-[min(430px,86vw)] overflow-hidden" variants={after}>
            <div className="flex items-center gap-1.5 border-b border-ink bg-paper-2 px-3 py-2">
              <span className="size-2 rounded-full border border-ink" />
              <span className="size-2 rounded-full border border-ink" />
              <span className="size-2 rounded-full border border-ink" />
              <div className="mono ml-2 text-[9px]">mikes-pizza.pages.dev</div>
            </div>
            <div className="p-5">
              <div className="mb-2 h-3 w-[70%] rounded-sm bg-ink" />
              <div className="mb-1.5 h-1.5 w-[90%] rounded-sm bg-ink-2" />
              <div className="mb-4 h-1.5 w-[60%] rounded-sm bg-ink-2" />
              <div className="ph ph-warm mb-3.5 h-[140px]">hero · Mike&apos;s Pizza</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="ph h-[62px]">menu</div>
                <div className="ph h-[62px]">hours</div>
                <div className="ph h-[62px]">visit</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function LiveBuildDemo() {
  return (
    <section className="border-t border-rule-2 bg-paper-2 px-5 py-20 md:px-10 lg:py-[110px]">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
          <motion.span className="chip chip-active mb-6 border-accent bg-accent text-white" variants={fadeUp}>
            Live demo
          </motion.span>
          <motion.h2 className="serif text-[44px] font-normal leading-[1.04] md:text-[64px]" variants={fadeUp}>
            Watch a real
            <br />
            site build itself.
          </motion.h2>
          <motion.p className="mt-5 max-w-[420px] text-base leading-7 text-ink-3" variants={fadeUp}>
            Pick any business. Onara generates the site live, right here on the page.
            No signup needed to understand the workflow.
          </motion.p>
          <motion.div className="mt-7" variants={fadeUp}>
            <div className="mono mb-2.5">Try one →</div>
            <div className="flex flex-wrap gap-2">
              {["Mike's Pizza · Austin", "Bloom Florist · Brooklyn", "Cedar Plumbing · Denver", "Or... your own"].map((item, index) => (
                <motion.span className={`chip ${index === 3 ? "chip-active" : ""}`} key={item} whileHover={{ y: -2 }}>
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="sketch-card overflow-hidden"
          initial={{ opacity: 0, y: 34, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.84, ease: refinedEase }}
        >
          <div className="flex items-center gap-1.5 border-b border-ink bg-paper px-3 py-2">
            <span className="size-2 rounded-full border border-ink" />
            <span className="size-2 rounded-full border border-ink" />
            <span className="size-2 rounded-full border border-ink" />
            <div className="ml-3 h-4 flex-1 rounded border border-rule" />
          </div>
          <div className="grid min-h-[430px] md:grid-cols-[170px_1fr]">
            <div className="border-b border-rule-2 bg-paper-2 p-4 md:border-b-0 md:border-r">
              <div className="mono mb-3">Agents</div>
              {agents.slice(0, 10).map((agent, index) => (
                <motion.div
                  className={`flex items-center gap-2 py-1.5 text-[11px] ${index < 5 ? "text-ink" : "text-ink-4"}`}
                  key={agent.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                >
                  <span className={`sdot ${index < 4 ? "sdot-done" : index === 4 ? "sdot-on" : "sdot-pending"}`} />
                  {agent.name.replace("Business ", "").replace(" Optimizer", "")}
                  {index === 4 && <span className="hand text-sm text-accent-ink">···</span>}
                </motion.div>
              ))}
            </div>
            <div className="relative overflow-hidden p-5">
              <motion.div className="mb-2 h-3 w-[70%] rounded-sm bg-ink" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} />
              <motion.div className="mb-3 h-1.5 w-[90%] rounded-sm bg-ink-2" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} />
              <motion.div className="ph ph-warm mb-3 h-[150px]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.24 }}>
                hero
              </motion.div>
              <div className="grid grid-cols-2 gap-2">
                <motion.div className="ph h-[80px]" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.34 }}>
                  menu
                </motion.div>
                <motion.div className="ph h-[80px]" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.42 }}>
                  hours
                </motion.div>
              </div>
              <div className="squiggle absolute bottom-5 left-5 right-5 opacity-60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
