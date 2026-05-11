"use client";

import { motion } from "framer-motion";
import Counter from "@/components/motion/Counter";
import { TrendUp, Eye, Edit, Clock } from "@/lib/icons";

const STATS = [
  {
    label: "Live sites",
    value: 3,
    suffix: " / 3",
    eyebrow: "Pro plan",
    icon: <Eye size={13} />,
    trend: null as string | null,
  },
  {
    label: "Visits this month",
    value: 501,
    suffix: "",
    eyebrow: "Across all sites",
    icon: <TrendUp size={13} />,
    trend: "+24%",
  },
  {
    label: "Revisions used",
    value: 9,
    suffix: " / unlimited",
    eyebrow: "Resets May 1",
    icon: <Edit size={13} />,
    trend: null,
  },
  {
    label: "Trial days left",
    value: 11,
    suffix: " / 14",
    eyebrow: "Then $19/mo",
    icon: <Clock size={13} />,
    trend: null,
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.2, 0.7, 0.3, 1] }}
          className="card-tight bg-[var(--paper)] hover-lift"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="mono text-[10px]">{s.label}</span>
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-[var(--ink-3)]"
              style={{ background: "var(--paper-2)" }}
            >
              {s.icon}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <div className="serif text-[28px] leading-none">
              <Counter to={s.value} duration={1.2} />
              {s.suffix}
            </div>
            {s.trend && (
              <span
                className="text-[11px] inline-flex items-center gap-1"
                style={{ color: "var(--accent-ink)" }}
              >
                <TrendUp size={10} stroke={2.4} /> {s.trend}
              </span>
            )}
          </div>
          <div className="text-[11px] text-[var(--ink-3)] mt-1.5">{s.eyebrow}</div>
        </motion.div>
      ))}
    </div>
  );
}
