import { useState } from "react";
import { useLocation } from "react-router";
import { navItems } from "@/data/site";
import { cn } from "@/lib/cn";
import { TextRollLink } from "./TextRollLink";

function isCurrent(pathname: string, match?: string): boolean {
  if (!match) return false;
  if (match === "/") return pathname === "/";
  return pathname === match || pathname.startsWith(`${match}/`);
}

/**
 * Fixed top navigation.
 * - Tablet and desktop: a centred 64px bar holding a translucent pill with five white link pills.
 * - Phone: a 48px round hamburger button. Opening it reveals the links in a column.
 */
export function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-10"
      onKeyDown={(event) => {
        if (event.key === "Escape") close();
      }}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex w-full flex-col items-center transition-colors duration-300 tablet:h-16 tablet:justify-center",
          open && "bg-white shadow-overlap tablet:bg-transparent tablet:shadow-none",
        )}
      >
        <div className="flex flex-col items-center pt-2 tablet:flex-row tablet:rounded-full tablet:bg-glass tablet:p-2">
          <button
            type="button"
            className="relative size-12 shrink-0 rounded-full bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 tablet:hidden"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-neutral-950 transition-all duration-300",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[41%]",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-neutral-950 transition-all duration-300",
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[59%]",
              )}
            />
          </button>

          <div
            id="primary-nav"
            className={cn(
              "grid w-full transition-[grid-template-rows,visibility] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] tablet:block tablet:w-auto",
              // Collapsed links must not be reachable by keyboard or screen reader on phones.
              open ? "grid-rows-[1fr]" : "invisible grid-rows-[0fr] tablet:visible",
            )}
          >
            <ul
              className={cn(
                "flex min-h-0 flex-col items-center gap-8 overflow-hidden px-5 transition-[padding] duration-300 tablet:flex-row tablet:gap-2 tablet:overflow-visible tablet:p-0",
                open ? "pt-8 pb-8" : "py-0",
              )}
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <TextRollLink
                    href={item.href}
                    variant="pill"
                    current={isCurrent(pathname, item.match)}
                    onClick={close}
                  >
                    {item.label}
                  </TextRollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
