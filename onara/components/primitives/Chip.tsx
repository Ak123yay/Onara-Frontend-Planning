import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Chip({
  active,
  accent,
  soft,
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  accent?: boolean;
  soft?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={cn(
        "chip",
        active && "active",
        accent && "chip-accent",
        soft && "chip-soft",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
