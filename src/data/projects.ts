/** Placeholder case studies. Swap the copy and visuals for real work. */
export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: readonly string[];
  /** Hue (0-360) used to generate the placeholder artwork. */
  hue: number;
  overview: string;
  challenge: string;
  outcome: string;
};

export const projects: readonly Project[] = [
  {
    slug: "northwind-dashboard",
    title: "Northwind Dashboard",
    summary: "An analytics dashboard that turns dense logistics data into one calm screen.",
    year: "2026",
    role: "Product design",
    tags: ["Web app", "Data viz"],
    hue: 220,
    overview:
      "Northwind's operations team tracked shipments across four tools. We replaced them with a single dashboard built around the three questions dispatchers ask every hour.",
    challenge:
      "Years of added widgets had buried the signal. The redesign started by removing everything nobody opened, then rebuilding hierarchy around late shipments and capacity.",
    outcome:
      "Dispatchers resolve exceptions faster and onboarding for new staff dropped from two weeks to three days.",
  },
  {
    slug: "lumen-banking",
    title: "Lumen Banking",
    summary: "Mobile banking that explains fees before they happen.",
    year: "2025",
    role: "UX and UI",
    tags: ["Mobile", "Fintech"],
    hue: 160,
    overview:
      "Lumen is a challenger bank for freelancers. The app needed to make irregular income feel manageable instead of stressful.",
    challenge:
      "Users distrusted balances that changed without warning. We designed a forecast view and plain-language fee previews on every transfer.",
    outcome:
      "Support tickets about unexpected charges fell by a third after launch.",
  },
  {
    slug: "atlas-travel",
    title: "Atlas Travel",
    summary: "A trip planner that keeps flights, stays and maps in one timeline.",
    year: "2025",
    role: "Product design",
    tags: ["Mobile", "Consumer"],
    hue: 28,
    overview:
      "Atlas replaces a folder of screenshots and confirmation emails with a timeline that updates itself.",
    challenge:
      "Travel plans change constantly. The timeline had to stay readable offline and when a flight moves by hours.",
    outcome:
      "Early testers kept the timeline open throughout trips, not just while planning them.",
  },
  {
    slug: "grove-market",
    title: "Grove Market",
    summary: "Storefront and checkout for a local-produce marketplace.",
    year: "2024",
    role: "Web design",
    tags: ["E-commerce", "Web"],
    hue: 95,
    overview:
      "Grove connects neighbourhood growers with weekly subscribers. The storefront needed to feel fresh without hiding the logistics.",
    challenge:
      "Stock changes daily, so product pages show availability first and let shoppers swap items right up to the cutoff.",
    outcome:
      "Checkout completion rose after the redesign, with the biggest gain on mobile.",
  },
  {
    slug: "pulse-health",
    title: "Pulse Health",
    summary: "A companion app that turns wearable data into weekly guidance.",
    year: "2024",
    role: "UX research and UI",
    tags: ["Mobile", "Health"],
    hue: 340,
    overview:
      "Pulse reads data from common wearables and turns it into one short suggestion each week.",
    challenge:
      "More charts did not help people change habits. We tested copy and cadence until the guidance felt like a nudge, not a report.",
    outcome:
      "Weekly active use held steady past the first month, the point where most health apps lose people.",
  },
  {
    slug: "forma-studio",
    title: "Forma Studio",
    summary: "Brand and marketing site for an architecture practice.",
    year: "2023",
    role: "Brand and web",
    tags: ["Brand", "Web"],
    hue: 265,
    overview:
      "Forma wanted a site as precise as its buildings. We built a quiet grid, large photography and almost no chrome.",
    challenge:
      "Project pages carry heavy imagery. We set a strict image system so every page loads fast and still feels editorial.",
    outcome:
      "Enquiries now arrive with a clearer brief, because the site explains how the practice works.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project; next: Project } {
  const index = projects.findIndex((project) => project.slug === slug);
  const length = projects.length;
  return {
    prev: projects[(index - 1 + length) % length],
    next: projects[(index + 1) % length],
  };
}
