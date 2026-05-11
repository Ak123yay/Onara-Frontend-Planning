"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SearchIcon, Pin, Star, ArrowRight } from "@/lib/icons";

const SUGGESTIONS = [
  { name: "Mike's Pizza", addr: "218 Congress Ave, Austin, TX", rating: 4.6, n: 312 },
  { name: "Mike's Pizzeria & Subs", addr: "4101 Burnet Rd, Austin, TX", rating: 4.3, n: 89 },
  { name: "Big Mike's Pizza Co.", addr: "901 W 6th St, Austin, TX", rating: 4.4, n: 47 },
];

export default function SearchInput() {
  const router = useRouter();
  const [q, setQ] = useState("Mike's");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filtered = q
    ? SUGGESTIONS.filter((s) => s.name.toLowerCase().includes(q.toLowerCase().slice(0, 4)))
    : [];

  return (
    <div className="relative">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
      >
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--ink-3)]">
          <SearchIcon size={18} />
        </span>
        <input
          ref={inputRef}
          className="input text-[17px] py-5"
          style={{ paddingLeft: 52, paddingRight: 20 }}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Business name + city"
          aria-label="Business name"
        />
      </motion.div>

      <AnimatePresence>
        {open && filtered.length > 0 && (
          <motion.div
            className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[var(--paper)] border border-[var(--rule)] rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.06)] z-20"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {filtered.map((s, i) => (
                <motion.button
                  key={s.name}
                  type="button"
                  onClick={() => router.push("/build/confirm")}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={reduced ? {} : { backgroundColor: "var(--paper-2)" }}
                  className={`w-full px-5 py-3.5 flex items-center gap-3.5 cursor-pointer text-left ${
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
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="mt-12 flex justify-center gap-6 text-[12px] text-[var(--ink-3)] flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
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
      </motion.div>
    </div>
  );
}
