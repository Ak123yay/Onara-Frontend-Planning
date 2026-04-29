import type { ReactNode } from "react";

export default function DashHeader({
  sub,
  title,
  action,
}: {
  sub: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between p-8 pb-5 flex-wrap gap-4">
      <div>
        <div className="mono mb-1.5">{sub}</div>
        <h1 className="serif text-[clamp(26px,3vw,32px)] m-0 tracking-[-0.02em]">{title}</h1>
      </div>
      {action}
    </div>
  );
}
