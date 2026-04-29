import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "accent" | "ghost" | "soft";
type Size = "sm" | "md" | "lg";

const variantClass: Record<Variant, string> = {
  solid: "btn",
  accent: "btn btn-accent",
  ghost: "btn btn-ghost",
  soft: "btn btn-soft",
};

const sizeClass: Record<Size, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = CommonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | LinkProps>(
  function Button(props, ref) {
    const { variant = "solid", size = "md", className, children, ...rest } = props;
    const cls = cn(variantClass[variant], sizeClass[size], className);
    if ("href" in props && props.href) {
      const { href, ...anchorRest } = rest as LinkProps;
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cls}
          {...anchorRest}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cls}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);
