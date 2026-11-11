import { Link } from "react-router";
import type { Project } from "@/data/projects";
import { Image } from "./Image";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: Project;
  /** Use "h2" when the card is directly under the page title, "h3" under a section heading. */
  headingLevel?: "h2" | "h3";
};

/**
 * Project preview. The photo sits at 110% scale and settles to 100% on
 * hover or keyboard focus, clipped by the rounded frame.
 */
export function ProjectCard({ project, headingLevel = "h3" }: ProjectCardProps) {
  const Heading = headingLevel;

  return (
    <article>
      <Link
        to={`/projects/${project.slug}`}
        className="group flex flex-col gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
      >
        <div
          data-cursor="project"
          className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 tablet:rounded-3xl"
        >
          <div className="relative size-full scale-110 transition-transform duration-[600ms] ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:scale-100 group-focus-visible:scale-100 motion-reduce:scale-100">
            <Image src={project.image.src} alt={project.image.alt} fill className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <Heading className="t-card-title">{project.title}</Heading>
            <span className="t-small shrink-0 text-neutral-500">{project.company}</span>
          </div>
          <p className="t-small text-neutral-500">{project.period}</p>
          <p className="t-body text-neutral-500">{project.summary}</p>
          <ul className="flex flex-wrap gap-2" aria-label="Categories">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
