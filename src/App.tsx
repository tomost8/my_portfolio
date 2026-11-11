import { Outlet } from "react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";

export function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <SmoothScroll />
      <Nav />
      {/* The page sits above the fixed footer. The spacer at the end lets it scroll away. */}
      <div className="relative z-[2]">
        <Outlet />
        <div id="contact" aria-hidden="true" className="pointer-events-none h-(--footer-h)" />
      </div>
      <Footer />
      <CustomCursor />
    </>
  );
}
