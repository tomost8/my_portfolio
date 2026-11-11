import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Lenis from "lenis";

/**
 * Lenis smooth scrolling for every page, with in-page anchors (#concepts,
 * #contact) animated too. Skipped when the visitor prefers reduced motion.
 * A route change without a hash returns to the top, so the next page does not
 * open at the previous scroll position.
 */
export function SmoothScroll() {
  const { pathname, hash } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches) return;

    const lenis = new Lenis({ autoRaf: true, anchors: true });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;

    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      // Lenis still has the previous page's scroll limit here, so scrollTo clamps
      // the hash target to the top. Native scrolling lands correctly, then resize
      // tells Lenis where the page actually is.
      target.scrollIntoView();
      lenis?.resize();
      return;
    }

    window.scrollTo(0, 0);
    lenis?.resize();
  }, [pathname, hash]);

  return null;
}
