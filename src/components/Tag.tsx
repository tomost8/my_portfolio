import { cn } from "@/lib/cn";

type TagProps = {
  children: string;
  /** "dark" suits white backgrounds, "white" suits grey ones, "light" suits dark or image backgrounds. */
  tone?: "dark" | "white" | "light";
  className?: string;
};

/** Small 14px pill used for project categories and the hero chip. */
export function Tag({ children, tone = "dark", className }: TagProps) {
  return (
    <span
      className={cn(
        "t-small inline-flex h-8 items-center rounded-full px-3 font-medium",
        tone === "dark" && "bg-neutral-100 text-neutral-950",
        tone === "white" && "bg-white text-neutral-950",
        tone === "light" && "bg-glass text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
