import { Link, useParams } from "react-router";
import { Image } from "@/components/Image";
import { PageMeta } from "@/components/PageMeta";
import { Tag } from "@/components/Tag";
import { getAdjacentProjects, getProject } from "@/data/projects";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  if (!project) return <NotFoundPage />;

  const { prev, next } = getAdjacentProjects(project.slug);
  const facts = [
    { label: "Company", value: project.company },
    { label: "Period", value: project.period },
    ...(project.location ? [{ label: "Location", value: project.location }] : []),
    { label: "Role", value: project.role },
  ];

  return (
    <main id="main" className="bg-white pt-32 pb-20 tablet:pt-40 tablet:pb-[120px]">
      <PageMeta title={project.title} description={project.summary} />
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

        <figure className="flex flex-col gap-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 tablet:aspect-[16/9] tablet:rounded-3xl">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority
              className="object-cover"
            />
          </div>
          <figcaption className="t-small text-neutral-500">
            Photo by{" "}
            <a
              href={project.image.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-neutral-950"
            >
              {project.image.credit.author}
            </a>{" "}
            on Unsplash
          </figcaption>
        </figure>

        <div className="grid gap-10 tablet:grid-cols-[1fr_2fr] tablet:gap-5">
          <dl className="flex flex-wrap gap-x-10 gap-y-6 tablet:flex-col tablet:gap-6">
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
            <section aria-labelledby="highlights" className="flex flex-col gap-3">
              <h2 id="highlights" className="t-h3">
                What I worked on
              </h2>
              <ul className="flex flex-col">
                {project.highlights.map((item) => (
                  <li key={item} className="t-body border-t border-neutral-200 py-3 text-neutral-500">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="challenge" className="flex flex-col gap-3">
              <h2 id="challenge" className="t-h3">
                Engineering challenge
              </h2>
              <p className="t-lead text-neutral-500">{project.challenge}</p>
            </section>
            <section aria-labelledby="approach" className="flex flex-col gap-3">
              <h2 id="approach" className="t-h3">
                Approach
              </h2>
              <p className="t-lead text-neutral-500">{project.approach}</p>
            </section>
          </div>
        </div>

        <nav
          aria-label="More projects"
          className="grid gap-5 border-t border-neutral-200 pt-8 tablet:grid-cols-2"
        >
          <Link
            to={`/projects/${prev.slug}`}
            data-cursor="link"
            className="flex flex-col gap-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            <span className="t-small text-neutral-500">Previous</span>
            <span className="t-card-title">{prev.title}</span>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
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
