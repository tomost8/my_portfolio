/** Engineering focus areas shown in the scrolling strip on the home page. */
export type Concept = {
  id: string;
  title: string;
  /** Path under /public. */
  src: string;
  alt: string;
  credit: { author: string; url: string };
};

export const concepts: readonly Concept[] = [
  {
    id: "data-pipelines",
    title: "Data pipelines",
    src: "/images/focus/data-pipelines.jpg",
    alt: "Yellow and green network cables neatly connected in a rack",
    credit: {
      author: "Albert Stoynov",
      url: "https://unsplash.com/photos/yellow-and-green-cables-are-neatly-connected-yhJVLxcquEY",
    },
  },
  {
    id: "geospatial-search",
    title: "Geospatial search",
    src: "/images/focus/geospatial-search.jpg",
    alt: "A phone mounted in a car showing a navigation route on a map",
    credit: {
      author: "Ed Wingate",
      url: "https://unsplash.com/photos/person-using-navigation-app-on-smartphone-inside-car-jb-LAz1hGog",
    },
  },
  {
    id: "ai-underwriting",
    title: "AI-assisted underwriting",
    src: "/images/focus/ai-underwriting.jpg",
    alt: "A brain drawn with circuit board lines above blocks of colour",
    credit: {
      author: "Steve A Johnson",
      url: "https://unsplash.com/photos/a-computer-circuit-board-with-a-brain-on-it-_0iV9LmPDn0",
    },
  },
  {
    id: "mobile-insurance-cards",
    title: "Mobile insurance cards",
    src: "/images/focus/mobile-insurance-cards.jpg",
    alt: "A smartphone showing health information in a card layout",
    credit: {
      author: "CARTIST",
      url: "https://unsplash.com/photos/black-smartphone-showing-white-medication-pill-hOGKh5qHNAE",
    },
  },
  {
    id: "multi-tenant-saas",
    title: "Multi-tenant SaaS",
    src: "/images/focus/multi-tenant-saas.jpg",
    alt: "A 3D cloud above a block of servers on a platform",
    credit: {
      author: "Growtika",
      url: "https://unsplash.com/photos/3d-render-of-cloud-computing-concept-Am6pBe2FpJw",
    },
  },
  {
    id: "devops-ci-cd",
    title: "DevOps and CI/CD",
    src: "/images/focus/devops-ci-cd.jpg",
    alt: "A laptop screen showing lines of source code",
    credit: {
      author: "Arnold Francisca",
      url: "https://unsplash.com/photos/turned-on-macbook-pro-wit-programming-codes-display-f77Bh3inUpE",
    },
  },
  {
    id: "healthcare-security",
    title: "Healthcare data security",
    src: "/images/focus/healthcare-security.jpg",
    alt: "A padlock on a laptop keyboard with light trails around it",
    credit: {
      author: "FlyD",
      url: "https://unsplash.com/photos/padlock-on-laptop-with-light-trails-C5pXRFEjq3w",
    },
  },
];
