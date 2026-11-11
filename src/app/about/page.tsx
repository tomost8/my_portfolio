import type { Metadata } from "next";
import { ArtworkPlaceholder } from "@/components/ArtworkPlaceholder";
import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience and the way I work.",
};

const experience = [
  { period: "2023 – now", role: "Senior product designer", place: "Northwind" },
  { period: "2021 – 2023", role: "Product designer", place: "Lumen" },
  { period: "2019 – 2021", role: "UI designer", place: "Studio Forma" },
] as const;

const services = ["Product design", "Web design", "Design systems", "UX research", "Prototyping"] as const;

export default function AboutPage() {
  return (
    <main id="main" className="bg-white pt-32 pb-20 tablet:pt-40 tablet:pb-[120px]">
      <div className="container-l flex flex-col gap-16 tablet:gap-24">
        <header className="grid gap-10 tablet:grid-cols-2 tablet:gap-5">
          <div className="flex flex-col gap-6">
            <h1 className="t-h1">About</h1>
            <p className="t-lead text-neutral-500">
              I&apos;m {site.name}, a {site.role.toLowerCase()} who likes turning messy problems
              into clear, usable products. I&apos;ve spent five years working with startups and
              small teams on web and mobile.
            </p>
            <p className="t-lead text-neutral-500">
              I work close to engineers, test early with real users and keep the interface as
              simple as the problem allows.
            </p>
            <div>
              <ButtonLink href="#contact">Get in touch</ButtonLink>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl tablet:rounded-3xl">
            <ArtworkPlaceholder hue={230} seed={1} />
          </div>
        </header>

        <section aria-labelledby="experience-heading" className="grid gap-6 tablet:grid-cols-2 tablet:gap-5">
          <h2 id="experience-heading" className="t-h2">
            Experience
          </h2>
          <ul className="flex flex-col">
            {experience.map((item) => (
              <li
                key={item.period}
                className="flex flex-col gap-1 border-t border-neutral-200 py-5 tablet:flex-row tablet:items-baseline tablet:justify-between"
              >
                <span className="t-card-title">{item.role}</span>
                <span className="t-body text-neutral-500">
                  {item.place}, {item.period}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="services-heading" className="grid gap-6 tablet:grid-cols-2 tablet:gap-5">
          <h2 id="services-heading" className="t-h2">
            What I do
          </h2>
          <ul className="flex flex-col">
            {services.map((service) => (
              <li key={service} className="t-card-title border-t border-neutral-200 py-5">
                {service}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
