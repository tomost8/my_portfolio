"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

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

/** Diameter of the base circle. Other states scale it. */
const SIZE = 96;

const DOT_SCALE: Record<CursorState, number> = {
  idle: 0.14,
  link: 0.5,
  project: 0.6,
  concept: 0.7,
};

function parseState(value: string | undefined): CursorState {
  return value === "link" || value === "project" || value === "concept" ? value : "idle";
}

/**
 * A circle that trails the pointer with a spring. It grows over links, shows
 * "View" over project cards and stays calm over the concepts strip. The real
 * cursor is left visible, so nothing is lost if this layer fails to load.
 * Which state applies comes from the nearest `data-cursor` attribute.
 */
export function CustomCursor() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return enabled ? <CursorLayer /> : null;
}

function CursorLayer() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [state, setState] = useState<CursorState>("idle");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const onOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const owner = target?.closest<HTMLElement>("[data-cursor]");
      setState(parseState(owner?.dataset.cursor));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y]);

  const isProject = state === "project";

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Blended circle: inverts whatever sits under it, so it works on light and dark. */}
      <motion.div
        className="absolute -translate-1/2 rounded-full bg-white mix-blend-difference"
        style={{ width: SIZE, height: SIZE }}
        initial={false}
        animate={{ scale: isProject ? 0 : DOT_SCALE[state] }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
      />
      {/* Project label: solid circle with text, shown only over project cards. */}
      <motion.div
        className="absolute flex -translate-1/2 items-center justify-center rounded-full bg-white text-[14px] font-semibold tracking-[-0.02em] text-neutral-950 shadow-overlap"
        style={{ width: SIZE, height: SIZE }}
        initial={false}
        animate={{ scale: isProject ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
      >
        View
      </motion.div>
    </motion.div>
  );
}
