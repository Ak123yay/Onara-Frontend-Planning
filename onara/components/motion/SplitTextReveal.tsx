"use client";

import { useEffect, useRef, type ReactNode, type JSX } from "react";
import { registerGsap, gsap, prefersReducedMotion, isLowPowerDevice } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
  trigger?: "load" | "visible";
};

export default function SplitTextReveal({
  children,
  as: As = "span",
  className,
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
  y = 110,
  trigger = "load",
}: Props) {
  const wrapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    registerGsap();
    const el = wrapRef.current;
    if (!el) return;
    if (prefersReducedMotion() || isLowPowerDevice()) {
      el.style.opacity = "1";
      return;
    }

    const text = (el.textContent ?? "").replace(/\s*\n\s*/g, "\n").trim();
    if (!text) return;
    el.textContent = "";

    const lines = text.split(/\r?\n/);
    const wordSpans: HTMLSpanElement[] = [];
    lines.forEach((line, li) => {
      const lineWrap = document.createElement("span");
      lineWrap.className = "split-line";
      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      const words = line.split(/(\s+)/);
      words.forEach((word) => {
        if (word.trim() === "") {
          inner.appendChild(document.createTextNode(word));
          return;
        }
        const w = document.createElement("span");
        w.className = "split-word";
        w.textContent = word;
        w.style.display = "inline-block";
        inner.appendChild(w);
        wordSpans.push(w);
      });
      lineWrap.appendChild(inner);
      el.appendChild(lineWrap);
      if (li < lines.length - 1) el.appendChild(document.createElement("br"));
    });

    gsap.set(wordSpans, { yPercent: y });

    const tween = () =>
      gsap.to(wordSpans, {
        yPercent: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
      });

    let st: ScrollTrigger | null = null;
    if (trigger === "load") {
      tween();
    } else {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        st = ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          once: true,
          onEnter: () => tween(),
        });
      });
    }

    return () => {
      st?.kill();
    };
  }, [children, delay, stagger, duration, y, trigger]);

  return (
    // @ts-expect-error - dynamic tag
    <As ref={wrapRef} className={className}>
      {children}
    </As>
  );
}
