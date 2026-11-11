import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
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
      <body className="bg-white text-neutral-950 antialiased">{children}</body>
    </html>
  );
}
