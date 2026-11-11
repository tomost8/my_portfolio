import { Link } from "react-router";
import { cn } from "@/lib/cn";

type TextRollLinkProps = {
  href: string;
  children: string;
  /** "pill" is the white nav button, "plain" is bare text (footer, buttons). */
  variant?: "pill" | "plain";
  /** Plain anchor instead of a router link. Opens in a new tab, except for mailto: links. */
  external?: boolean;
  current?: boolean;
  onClick?: () => void;
  className?: string;
};

const variants = {
  pill: "[--roll-h:40px] rounded-full bg-neutral-100 px-4 text-neutral-950 tablet:bg-white",
  plain: "[--roll-h:26px]",
} as const;

const line =
  "flex h-(--roll-h) shrink-0 items-center justify-center whitespace-pre text-[16px] leading-[1.6] font-semibold tracking-[-0.02em]";

/**
 * Link whose label is stacked twice inside a clipped box. On hover or focus
 * the stack slides up one row, so the second copy rolls in.
 */
export function TextRollLink({
  href,
  children,
  variant = "plain",
  external = false,
  current = false,
  onClick,
  className,
}: TextRollLinkProps) {
  const classes = cn(
    "group inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
    variants[variant],
    className,
  );

  const content = (
    <span className="block h-(--roll-h) overflow-clip">
      <span className="flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-(--roll-h) group-focus-visible:-translate-y-(--roll-h)">
        <span className={line}>{children}</span>
        <span className={line} aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );

  if (external) {
    const isMail = href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <a
        href={href}
        target={isMail ? undefined : "_blank"}
        rel={isMail ? undefined : "noopener noreferrer"}
        className={classes}
        data-cursor="link"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={classes}
      data-cursor="link"
      aria-current={current ? "page" : undefined}
      onClick={onClick}
    >
      {content}
    </Link>
  );
}
