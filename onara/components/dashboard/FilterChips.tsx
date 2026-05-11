"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Live", "Paused", "Recently updated"] as const;

export default function FilterChips({
  onChange,
}: {
  onChange?: (filter: (typeof FILTERS)[number]) => void;
}) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {FILTERS.map((f) => (
        <motion.button
          key={f}
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            setActive(f);
            onChange?.(f);
          }}
          className={cn("chip text-[11px]", active === f && "active")}
        >
          {f}
        </motion.button>
      ))}
    </div>
  );
}
