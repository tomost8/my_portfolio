/**
 * Case studies for the roles in the experience timeline. They describe the
 * products, capabilities and engineering problems of each platform, without
 * invented metrics. Images are free-license stock photos (see README credits).
 */
export type ProjectImage = {
  /** Path under /public. */
  src: string;
  alt: string;
  credit: { author: string; url: string };
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  company: string;
  /** Employment dates shown on cards and in the facts list. */
  period: string;
  location?: string;
  role: string;
  tags: readonly string[];
  image: ProjectImage;
  overview: string;
  /** Capabilities worked on, shown as a list. */
  highlights: readonly string[];
  challenge: string;
  approach: string;
};

export const projects: readonly Project[] = [
  {
    slug: "beam-member-provider-platform",
    title: "Digital Healthcare & Member/Provider Platform",
    summary:
      "Member, provider and mobile experiences for dental and vision coverage, eligibility and claims.",
    company: "Beam Benefits",
    period: "09/2021 – Present",
    role: "Senior Software Engineer",
    tags: ["Healthcare", "Full stack", "Mobile"],
    image: {
      src: "/images/projects/beam-member-provider-platform.jpg",
      alt: "A doctor and a patient reviewing information together on a tablet",
      credit: {
        author: "Vitaly Gariev",
        url: "https://unsplash.com/photos/doctor-shows-patient-medical-scan-on-tablet-6qN9yEK5k9U",
      },
    },
    overview:
      "Beam's customer-facing healthcare benefits ecosystem around dental and vision. It connects members, providers, claims, eligibility, coverage and provider networks across web and mobile.",
    highlights: [
      "Member portal with registration, MFA, plan and coverage details, and claim status and history",
      "Digital insurance cards on web and in the mobile app",
      "Provider portal for eligibility checks, benefit information and claim status",
      "Backend services and APIs for eligibility, claims and benefit workflows",
      "Healthcare data workflows for member, dependent, provider, plan and claims datasets",
    ],
    challenge:
      "Keeping enrollment, eligibility, claims and billing consistent while census uploads, plan changes, provider eligibility checks and incoming claims all arrive at the same time.",
    approach:
      "Idempotent APIs, event-driven workflows, retry and dead-letter handling, audit events and reconciliation jobs, so duplicate, stale or out-of-order updates never leave a member in the wrong state.",
  },
  {
    slug: "beam-benefits-administration",
    title: "Benefits Administration & Financial Protection Platform",
    summary:
      "Employer, broker and group administration for life, disability, accident, critical illness and hospital indemnity benefits.",
    company: "Beam Benefits",
    period: "09/2021 – Present",
    role: "Senior Software Engineer",
    tags: ["Insurance", "Data", "Backend"],
    image: {
      src: "/images/projects/beam-benefits-administration.jpg",
      alt: "A team around a conference table with laptops in a bright office",
      credit: {
        author: "Christina @ wocintechchat.com",
        url: "https://unsplash.com/photos/photography-of-people-inside-room-during-daytime-rg1y72eKw6o",
      },
    },
    overview:
      "The digital enrollment and administration side of Beam's business. Employers, brokers and groups quote, enroll, bill and renew financial protection products, alongside dental and vision.",
    highlights: [
      "Census uploads, employee and dependent enrollment, qualifying life events and terminations",
      "Group configuration, plan setup and insurance-card generation",
      "Billing information, invoices, commission statements and renewals, with PDF, Excel and CSV exports",
      "Broker dashboards, digital quoting and plan comparison",
      "ETL pipelines and validation for broker, employer, member and insurer data",
    ],
    challenge:
      "Turning large, messy employer census files into reliable enrollment, member and billing records without duplicates or silent data loss.",
    approach:
      "Schema validation and normalization at the edge, then a staged flow from census to enrollment, member records, billing and reporting, with reconciliation between the systems that own each step.",
  },
  {
    slug: "beam-provider-network-discovery",
    title: "Provider Network Discovery",
    summary:
      "Find an in-network dentist nearby, for the member's own plan, on web and mobile.",
    company: "Beam Benefits",
    period: "09/2021 – Present",
    role: "Senior Software Engineer",
    tags: ["Geospatial", "Backend", "Data"],
    image: {
      src: "/images/projects/beam-provider-network-discovery.jpg",
      alt: "A detailed illustrated city map with landmark icons and pins",
      credit: {
        author: "unavailable parts",
        url: "https://unsplash.com/photos/a-detailed-map-shows-buildings-and-streets-yzsmerKyynk",
      },
    },
    overview:
      "Provider-network geospatial functionality behind Beam's find-a-provider experience: provider locations, addresses, geographic search and in-network status, in a map and list experience.",
    highlights: [
      "Provider and provider-location data, including multiple offices and specialties",
      "Address cleansing, geocoding and distance or radius search",
      "Network and plan-aware filtering of results",
      "Search APIs with pagination and ranking for web and mobile",
      "Map and list experiences with filters and provider detail",
    ],
    challenge:
      "The nearest provider is not always an eligible one. Results must combine distance with network membership, plan compatibility and provider status, from data with duplicates, moved offices and inactive locations.",
    approach:
      "Normalize and deduplicate provider data, geocode and index locations, filter by the member's network and plan, then rank by distance behind a cached, low-latency search API.",
  },
  {
    slug: "beam-ai-underwriting-quoting",
    title: "AI-assisted Underwriting & Digital Quoting",
    summary:
      "Fast quoting workflows from employer census to underwriting, pricing and a finished quote.",
    company: "Beam Benefits",
    period: "09/2021 – Present",
    role: "Senior Software Engineer",
    tags: ["AI/ML", "Data", "Backend"],
    image: {
      src: "/images/projects/beam-ai-underwriting-quoting.jpg",
      alt: "A laptop showing dark analytics dashboards with charts and metrics",
      credit: {
        author: "Luke Chesser",
        url: "https://unsplash.com/photos/graphs-of-performance-analytics-on-a-laptop-screen-JKUTrJ4vK00",
      },
    },
    overview:
      "Supporting data, backend and delivery work around Beam's AI-powered underwriting and digital quoting, which let brokers get customized quotes quickly.",
    highlights: [
      "Census validation, cleaning and normalization before underwriting",
      "Feature preparation for model inputs",
      "Quote services coordinating validation, underwriting, pricing, persistence and documents",
      "Model-version, latency and error monitoring, with audit logging",
    ],
    challenge:
      "Making the quote pipeline fast, reproducible and reliable. Bad input produces bad underwriting, so data quality becomes part of model quality.",
    approach:
      "Strict input validation, versioned models with fallbacks when inference is unavailable, and monitoring of latency and errors, with an audit trail for every decision.",
  },
  {
    slug: "coetic-woether-nudges",
    title: "Woether & WorkWeek Nudges",
    summary:
      "Multi-tenant SaaS for organizational effectiveness: culture, weekly nudges, assessments and values analytics.",
    company: "Coetic HR",
    period: "07/2018 – 08/2021",
    location: "East Lansing, MI",
    role: "Senior Software Engineer",
    tags: ["SaaS", "Full stack", "Analytics"],
    image: {
      src: "/images/projects/coetic-woether-nudges.jpg",
      alt: "Colleagues planning together at a whiteboard with a laptop",
      credit: {
        author: "Kaleidico",
        url: "https://unsplash.com/photos/man-wearing-gray-polo-shirt-beside-dry-erase-board-3V8xo5Gbusk",
      },
    },
    overview:
      "Coetic's startup software for strengthening culture and teamwork: Woether, WorkWeek Nudges, the Insights assessments and Core Values Sort.",
    highlights: [
      "Woether, for intentional culture, shared priorities and team connections",
      "WorkWeek Nudges: recurring prompts, team interactions and engagement tracking",
      "Assessment and analytics features behind Insights and Core Values Sort",
      "Administrative dashboards for inviting users, managing teams and monitoring participation",
    ],
    challenge:
      "Serving many organizations from one platform, with isolated data, role-based administration and per-product access, while a startup product changed quickly.",
    approach:
      "Clear organization and team boundaries, role-based permissions, configurable assessments, scoring and aggregation from individual to team results, and scheduled workflows for notifications and retries.",
  },
  {
    slug: "amazon-healthcare-data-platform",
    title: "Healthcare Data & Patient Engagement Platform",
    summary:
      "A healthcare prototype for patient records, search and provider workflows, built alongside my degree.",
    company: "Amazon",
    period: "01/2017 – 06/2018",
    location: "East Lansing, MI",
    role: "Software Engineer (student project)",
    tags: ["Healthcare", "APIs", "Data"],
    image: {
      src: "/images/projects/amazon-healthcare-data-platform.jpg",
      alt: "Hands typing on a laptop with a stethoscope resting beside it",
      credit: {
        author: "National Cancer Institute",
        url: "https://unsplash.com/photos/person-sitting-while-using-laptop-computer-and-green-stethoscope-near-NFvdKIhxYlU",
      },
    },
    overview:
      "A healthcare-focused software prototype, built while completing my Computer Science and Engineering degree at Michigan State University. It explored how patient information could be collected, organized, searched and presented through a secure web experience.",
    highlights: [
      "Backend services and APIs for patient profiles, records, search and filtering",
      "Ingestion, validation and normalization of varied healthcare information",
      "Authentication and role-based access for patient, provider and admin workflows",
      "Responsive interfaces with dashboards, search results and analytics",
      "Automated tests around data processing and API workflows",
    ],
    challenge:
      "Bringing fragmented healthcare information into one consistent patient model, while keeping sensitive data restricted to the right roles.",
    approach:
      "Validate and normalize inputs into a single patient-centric model, put access control at the API layer, and keep the interface a thin layer over tested REST services.",
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
