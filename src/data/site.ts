/** Site-wide placeholder content. Replace with real details before launch. */
export const site = {
  name: "David Miller",
  role: "Product & Web Designer",
  email: "hello@example.com",
  links: {
    linkedin: "https://www.linkedin.com/",
    savee: "https://savee.com/",
    x: "https://x.com/",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Path prefix that marks the item as the current page. Anchors have none. */
  match?: string;
};

export const navItems: readonly NavItem[] = [
  { label: "home", href: "/", match: "/" },
  { label: "about", href: "/about", match: "/about" },
  { label: "projects", href: "/projects", match: "/projects" },
  { label: "focus", href: "/#concepts" },
  { label: "contact", href: "#contact" },
];
