"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon, Pin, Star, ArrowRight } from "@/lib/icons";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

const SUGGESTIONS = [
  { name: "Lupita's Tacos", addr: "1248 César Chávez Ave, Los Angeles, CA", rating: 4.7, n: 842 },
  { name: "Lupita's Pizzeria", addr: "300 Main St, Brooklyn, NY", rating: 4.4, n: 211 },
  { name: "Lupita's Café", addr: "55 Mission St, San Francisco, CA", rating: 4.6, n: 96 },
];

export default function SearchInput() {
  const router = useRouter();
  const [q, setQ] = useState("Lupita's");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Animate dropdown items in
  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const wasOpen = wasOpenRef.current;
    wasOpenRef.current = open;
    if (!open || wasOpen) return;
    const dd = dropdownRef.current;
    if (!dd) return;
    const items = dd.querySelectorAll("[data-item]");
    gsap.fromTo(
      items,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power3.out" },
    );
  }, [open]);

  const filtered = q
    ? SUGGESTIONS.filter((s) => s.name.toLowerCase().includes(q.toLowerCase().slice(0, 4)))
    : [];

  return (
    <div className="relative">
      <div className="relative">
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--ink-3)]">
          <SearchIcon size={18} />
        </span>
        <input
          ref={inputRef}
          className="input pl-13 pr-3 text-[17px] py-5 rounded-2xl"
          style={{ paddingLeft: 52, paddingRight: 20 }}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Restaurant name + city"
          aria-label="Business name"
        />
      </div>

      {open && filtered.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[var(--paper)] border border-[var(--rule)] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.06)] z-20"
        >
          {filtered.map((s, i) => (
            <button
              key={s.name}
              data-item
              onClick={() => router.push("/build/confirm")}
              className={`w-full px-5 py-3.5 flex items-center gap-3.5 cursor-pointer transition-colors text-left hover:bg-[var(--paper-2)] ${
                i ? "border-t border-[var(--rule-2)]" : ""
              }`}
            >
              <Pin size={16} />
              <div className="flex-1">
                <div className="text-[14px] font-medium">{s.name}</div>
                <div className="text-[12px] text-[var(--ink-3)] mt-0.5">{s.addr}</div>
              </div>
              <div className="text-[11px] text-[var(--ink-3)] flex items-center gap-1">
                <Star size={11} fill="var(--accent)" stroke={0} />
                {s.rating} ({s.n})
              </div>
              <ArrowRight size={14} />
            </button>
          ))}
        </div>
      )}

      <div className="mt-14 flex justify-center gap-6 text-[12px] text-[var(--ink-3)] flex-wrap">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          Reads your hours, menu, photos
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          Pulls your top reviews
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          Uses your real photos
        </span>
      </div>
    </div>
  );
}
