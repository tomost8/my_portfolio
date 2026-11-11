import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { site } from "@/data/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const description = `Portfolio of ${site.name}, a ${site.role.toLowerCase()} with 9+ years of experience building ${site.focus}.`;

export const metadata: Metadata = {
  // Placeholder origin so social images resolve locally. Replace with the production domain.
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: `${site.name}, ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description,
  openGraph: {
    type: "profile",
    siteName: site.name,
    title: `${site.name}, ${site.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}, ${site.role}`,
    description,
  },
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
