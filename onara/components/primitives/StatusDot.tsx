import { cn } from "@/lib/utils";

export function StatusDot({
  state = "pending",
  className,
}: {
  state?: "on" | "done" | "pending";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "sdot",
        state === "on" && "sdot-on",
        state === "done" && "sdot-done",
        state === "pending" && "sdot-pending",
        className,
      )}
    />
  );
}
