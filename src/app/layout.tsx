import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "David Miller, Product & Web Designer",
    template: "%s | David Miller",
  },
  description:
    "Portfolio of a product and web designer with 5+ years of experience, designing clear and intuitive digital products for web and mobile.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-white text-neutral-950 antialiased">
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
          {children}
          <div id="contact" aria-hidden="true" className="pointer-events-none h-(--footer-h)" />
        </div>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
