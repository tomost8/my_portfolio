import { Link } from "react-router";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: string;
  tone?: "dark" | "light";
  className?: string;
};

/** Pill call-to-action with the same hover treatment as the nav links. */
export function ButtonLink({ href, children, tone = "dark", className }: ButtonLinkProps) {
  return (
    <Link
      to={href}
      data-cursor="link"
      className={cn(
        "group inline-flex h-12 items-center rounded-full px-6 text-[16px] font-semibold tracking-[-0.02em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
        tone === "dark"
          ? "bg-neutral-950 text-white hover:bg-neutral-800"
          : "bg-neutral-100 text-neutral-950 hover:bg-neutral-200",
        className,
      )}
    >
      {children}
    </Link>
  );
}
