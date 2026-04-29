import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({
  size = 22,
  className,
  href = "/",
}: {
  size?: number;
  className?: string;
  href?: string | null;
}) {
  const inner = (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-medium text-[19px] tracking-[-0.015em] serif",
        className,
      )}
    >
      <span
        className="relative inline-block rounded-full bg-[var(--ink)]"
        style={{ width: size, height: size }}
      >
        <span
          className="absolute rounded-full bg-[var(--accent)]"
          style={{ inset: Math.max(3, size * 0.22) }}
        />
      </span>
      <span className="leading-none">Onara</span>
    </span>
  );
  if (href === null) return inner;
  return (
    <Link href={href} className="inline-flex">
      {inner}
    </Link>
  );
}
