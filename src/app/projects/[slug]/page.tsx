import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkPlaceholder } from "@/components/ArtworkPlaceholder";
import { Tag } from "@/components/Tag";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

/** Only the slugs in the data file exist. Anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);
  const facts = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
  ];

  return (
    <main id="main" className="bg-white pt-32 pb-20 tablet:pt-40 tablet:pb-[120px]">
      <div className="container-l flex flex-col gap-12 tablet:gap-16">
        <header className="flex flex-col gap-6">
          <ul className="flex flex-wrap gap-2" aria-label="Categories">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
          <h1 className="t-h1">{project.title}</h1>
          <p className="t-lead max-w-[640px] text-neutral-500">{project.summary}</p>
        </header>

        <div className="aspect-[4/3] overflow-hidden rounded-2xl tablet:aspect-[16/9] tablet:rounded-3xl">
          <ArtworkPlaceholder hue={project.hue} seed={0} />
        </div>

        <div className="grid gap-10 tablet:grid-cols-[1fr_2fr] tablet:gap-5">
          <dl className="flex gap-10 tablet:flex-col tablet:gap-6">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <dt className="t-small text-neutral-500">{fact.label}</dt>
                <dd className="t-body font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-10">
            <section aria-labelledby="overview" className="flex flex-col gap-3">
              <h2 id="overview" className="t-h3">
                Overview
              </h2>
              <p className="t-lead text-neutral-500">{project.overview}</p>
            </section>
            <section aria-labelledby="challenge" className="flex flex-col gap-3">
              <h2 id="challenge" className="t-h3">
                Challenge
              </h2>
              <p className="t-lead text-neutral-500">{project.challenge}</p>
            </section>
            <section aria-labelledby="outcome" className="flex flex-col gap-3">
              <h2 id="outcome" className="t-h3">
                Outcome
              </h2>
              <p className="t-lead text-neutral-500">{project.outcome}</p>
            </section>
          </div>
        </div>

        <nav
          aria-label="More projects"
          className="grid gap-5 border-t border-neutral-200 pt-8 tablet:grid-cols-2"
        >
          <Link
            href={`/projects/${prev.slug}`}
            data-cursor="link"
            className="flex flex-col gap-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            <span className="t-small text-neutral-500">Previous</span>
            <span className="t-card-title">{prev.title}</span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            data-cursor="link"
            className="flex flex-col gap-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 tablet:items-end tablet:text-right"
          >
            <span className="t-small text-neutral-500">Next</span>
            <span className="t-card-title">{next.title}</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
