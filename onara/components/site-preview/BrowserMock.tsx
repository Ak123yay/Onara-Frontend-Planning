import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  url: string;
  children?: ReactNode;
  className?: string;
  shadow?: boolean;
  badge?: ReactNode;
}

export default function BrowserMock({ url, children, className, shadow = true, badge }: Props) {
  return (
    <div
      className={cn("bg-white rounded-2xl overflow-hidden border border-[var(--rule-2)]", className)}
      style={shadow ? { boxShadow: "0 30px 80px rgba(0,0,0,0.10)" } : undefined}
    >
      <div className="flex items-center gap-1.5 px-3.5 py-3 bg-[var(--paper-2)] border-b border-[var(--rule-2)]">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        <div
          className="flex-1 ml-3.5 px-3.5 py-1 bg-white border border-[var(--rule)] rounded-full text-[11px] text-[var(--ink-3)]"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          {url}
        </div>
        {badge}
      </div>
      {children}
    </div>
  );
}
