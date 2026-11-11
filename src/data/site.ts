/** Site-wide profile and contact details. Only the city is public, never a street address. */
export const site = {
  name: "Sam Coffey",
  role: "Senior Software Engineer",
  /** Short description of the specialities, used in the hero and metadata. */
  focus: "AI, data and full-stack products for healthcare and benefits platforms",
  location: "Howell, MI",
  email: "scoffey95@hotmail.com",
  phone: "(517) 296-6866",
  /** Dialable form of the phone number for tel: links. */
  phoneHref: "tel:+15172966866",
  links: {
    linkedin: "https://www.linkedin.com/in/sam-coffey-data",
    github: "https://github.com/tomost8",
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
