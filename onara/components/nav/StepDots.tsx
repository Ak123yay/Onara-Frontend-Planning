import { cn } from "@/lib/utils";
import { Check } from "@/lib/icons";

const STEPS = ["Find", "Confirm", "Style", "Build"];

export default function StepDots({ step = 1 }: { step?: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex items-center gap-3 text-xs text-[var(--ink-3)]">
      {STEPS.map((label, i) => {
        const n = i + 1;
        const done = n < step;
        const active = n === step;
        return (
          <div key={label} className="flex items-center gap-3">
            <div className={cn("flex items-center gap-2", !active && !done && "opacity-50")}>
              <span
                className={cn(
                  "w-[22px] h-[22px] rounded-full text-[11px] font-medium flex items-center justify-center transition-colors",
                  done && "bg-[var(--ink)] text-white",
                  active && "bg-[var(--accent)] text-white",
                  !done && !active && "bg-[var(--paper-2)] text-[var(--ink-3)]",
                )}
              >
                {done ? <Check size={11} stroke={2.4} /> : n}
              </span>
              <span className={cn(active ? "text-[var(--ink)] font-medium" : "")}>{label}</span>
            </div>
            {i < STEPS.length - 1 && <span className="w-6 h-px bg-[var(--rule)]" />}
          </div>
        );
      })}
    </div>
  );
}
