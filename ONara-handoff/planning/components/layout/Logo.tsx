import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className="inline-flex items-center gap-[9px]" href="/" aria-label="Onara home">
      <span
        className={`relative size-[22px] shrink-0 rounded-full border-[1.5px] after:absolute after:inset-[5px] after:rounded-full after:bg-accent ${
          light ? "border-paper" : "border-ink"
        }`}
      />
      <span className={`serif text-[19px] font-medium leading-none ${light ? "text-paper" : "text-ink"}`}>
        Onara
      </span>
    </Link>
  );
}
