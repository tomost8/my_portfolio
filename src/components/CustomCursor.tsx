import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";

type CursorState = "idle" | "link" | "project" | "concept";

/** Mouse-like pointers only, and not when the visitor prefers reduced motion. */
const QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => false;

const SIZE: Record<CursorState, number> = {
  idle: 24,
  link: 40,
  project: 100,
  concept: 100,
};

/** Size and contents. Position is a spring, so it is not part of this transition. */
const MORPH =
  "width 0.4s cubic-bezier(0.44, 0, 0.56, 1), height 0.4s cubic-bezier(0.44, 0, 0.56, 1), opacity 0.2s linear";

function parseState(value: string | undefined): CursorState {
  return value === "link" || value === "project" || value === "concept" ? value : "idle";
}

/**
 * Arrow Up Right from FolioBase: a 10px corner and a diagonal, centered in a
 * 24 viewBox with a 2px round stroke. Callers set the rendered size and color.
 */
function ArrowUpRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M 0 0 L 10 0 L 10 10"
        transform="translate(7 7)"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 0 10 L 10 0"
        transform="translate(7 7)"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A disc that trails the pointer. Default and links invert the surface under
 * them (`difference`), so dark type inside the disc turns white. Project and
 * concept images use a frosted circle instead. The system cursor stays visible.
 * Which state applies comes from the nearest `data-cursor` attribute.
 */
export function CustomCursor() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return enabled ? <CursorLayer /> : null;
}

function CursorLayer() {
  const discRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -200, y: -200 });
  const [state, setState] = useState<CursorState>("idle");
  const [visible, setVisible] = useState(false);

  const place = () => {
    const disc = discRef.current;
    if (!disc) return;
    const { x, y } = posRef.current;
    disc.style.transform = `translate(0%, -100%) translate(${x}px, ${y}px)`;
  };

  // React's style updates don't include transform. Put it back before paint.
  useLayoutEffect(place);

  useEffect(() => {
    const disc = discRef.current;
    if (!disc) return;

    // Semi-implicit Euler spring: stiffness 500, damping 60, mass 1.7.
    let px = posRef.current.x;
    let py = posRef.current.y;
    let vx = 0;
    let vy = 0;
    let tx = px;
    let ty = py;
    let last = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.032);
      last = now;
      const ax = (-500 * (px - tx) - 60 * vx) / 1.7;
      const ay = (-500 * (py - ty) - 60 * vy) / 1.7;
      vx += ax * dt;
      vy += ay * dt;
      px += vx * dt;
      py += vy * dt;
      posRef.current.x = px;
      posRef.current.y = py;
      disc.style.transform = `translate(0%, -100%) translate(${px}px, ${py}px)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const read = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const target = event.target instanceof Element ? event.target : null;
      const next = parseState(target?.closest<HTMLElement>("[data-cursor]")?.dataset.cursor);
      setState((current) => (current === next ? current : next));
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      tx = event.clientX;
      ty = event.clientY;
      setVisible(true);
      read(event);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", read, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", read);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const blended = state === "idle" || state === "link";

  return (
    <div
      ref={discRef}
      aria-hidden="true"
      // Blend lives on the disc itself. A transformed parent would trap
      // `difference` inside an empty group, so the disc would never invert
      // the page underneath it.
      className={
        blended
          ? "pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center overflow-hidden rounded-full bg-white mix-blend-difference"
          : "pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center overflow-hidden rounded-full bg-white/30 mix-blend-normal backdrop-blur-[10px]"
      }
      style={{
        width: SIZE[state],
        height: SIZE[state],
        opacity: visible ? 1 : 0,
        transition: MORPH,
      }}
    >
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-950 transition-opacity duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]"
        style={{ opacity: state === "link" ? 1 : 0 }}
      >
        <ArrowUpRight size={16} />
      </span>
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-opacity duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]"
        style={{ opacity: state === "project" ? 1 : 0 }}
      >
        <ArrowUpRight size={24} />
      </span>
      <span
        className="text-[14px] leading-[1.6] font-medium tracking-[-0.02em] text-white transition-opacity duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]"
        style={{ opacity: state === "concept" ? 1 : 0 }}
      >
        View
      </span>
    </div>
  );
}
