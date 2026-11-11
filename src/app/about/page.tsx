import type { Metadata } from "next";
import Image from "next/image";
import headshot from "@/assets/images/sam-coffey-headshot.png";
import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience and education of Sam Coffey, a senior software engineer.",
};

const experience = [
  {
    period: "09/2021 – Present",
    role: "Senior Software Engineer",
    place: "Beam Benefits",
    detail:
      "Digital healthcare and member/provider platform, and the digital benefits administration and financial protection platform.",
  },
  {
    period: "07/2018 – 08/2021",
    role: "Senior Software Engineer",
    place: "Coetic HR",
    detail: "East Lansing, MI. Woether and the WorkWeek Nudges organizational-effectiveness platform.",
  },
  {
    period: "01/2017 – 06/2018",
    role: "Software Engineer, healthcare project (student)",
    place: "Amazon",
    detail: "East Lansing, MI. Healthcare data and patient engagement platform, alongside my degree.",
  },
] as const;

const education = {
  period: "09/2013 – 05/2018",
  degree: "Bachelor of Science in Computer Science and Engineering",
  place: "Michigan State University",
} as const;

const services = [
  "Data engineering",
  "AI and machine learning",
  "Backend and APIs",
  "Full-stack web",
  "Mobile",
  "Geospatial search",
  "DevOps and cloud",
] as const;

export default function AboutPage() {
  return (
    <main id="main" className="bg-white pt-32 pb-20 tablet:pt-40 tablet:pb-[120px]">
      <div className="container-l flex flex-col gap-16 tablet:gap-24">
        <header className="grid gap-10 tablet:grid-cols-2 tablet:gap-5">
          <div className="flex flex-col gap-6">
            <h1 className="t-h1">About</h1>
            <p className="t-lead text-neutral-500">
              I&apos;m {site.name}, a {site.role.toLowerCase()} based in {site.location}. For more
              than nine years I&apos;ve built {site.focus}, from member portals and
              provider search to enrollment, billing and data pipelines.
            </p>
            <p className="t-lead text-neutral-500">
              I work across the stack, from data and APIs to the interfaces people use, and I care
              about reliable, well-tested systems that handle sensitive data carefully.
            </p>
            <div>
              <ButtonLink href="#contact">Get in touch</ButtonLink>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-950 tablet:rounded-3xl">
            <Image
              src={headshot}
              alt="Portrait of Sam Coffey, wearing glasses and a black T-shirt"
              placeholder="blur"
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="size-full object-cover object-top"
            />
          </div>
        </header>

        <section aria-labelledby="experience-heading" className="grid gap-6 tablet:grid-cols-2 tablet:gap-5">
          <h2 id="experience-heading" className="t-h2">
            Experience
          </h2>
          <ul className="flex flex-col">
            {experience.map((item) => (
              <li key={item.place} className="flex flex-col gap-2 border-t border-neutral-200 py-5">
                <div className="flex flex-col gap-1 tablet:flex-row tablet:items-baseline tablet:justify-between">
                  <span className="t-card-title">{item.role}</span>
                  <span className="t-body text-neutral-500">
                    {item.place}, {item.period}
                  </span>
                </div>
                <p className="t-body text-neutral-500">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="education-heading" className="grid gap-6 tablet:grid-cols-2 tablet:gap-5">
          <h2 id="education-heading" className="t-h2">
            Education
          </h2>
          <div className="flex flex-col gap-1 border-t border-neutral-200 py-5 tablet:flex-row tablet:items-baseline tablet:justify-between">
            <div className="flex flex-col gap-1">
              <span className="t-card-title">{education.place}</span>
              <span className="t-body text-neutral-500">{education.degree}</span>
            </div>
            <span className="t-body text-neutral-500">{education.period}</span>
          </div>
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
