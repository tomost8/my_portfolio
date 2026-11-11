import { ButtonLink } from "@/components/ButtonLink";
import { ConceptsTicker } from "@/components/ConceptsTicker";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const featured = projects.slice(0, 4);

export default function HomePage() {
  return (
    <main id="main">
      {/* The hero stays pinned while the white content slides over it. */}
      <section className="sticky top-0 z-0 flex h-svh min-h-[560px] items-end bg-neutral-100 pb-16 tablet:pb-20">
        <div className="container-l flex flex-col gap-6">
          <Reveal>
            <Tag tone="white">Available for freelance</Tag>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="t-h1 max-w-[880px] text-neutral-500">
              <span className="text-neutral-950">{site.name}</span> is a {site.role.toLowerCase()}{" "}
              with 5+ years of experience, designing clear and intuitive digital products for web
              and mobile.
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="relative z-[1] rounded-t-[32px] bg-white shadow-overlap">
        <section aria-labelledby="projects-heading" className="container-l py-20 tablet:py-[120px]">
          <div className="mb-10 flex items-end justify-between gap-6 tablet:mb-14">
            <h2 id="projects-heading" className="t-h2">
              Selected projects
            </h2>
            <ButtonLink href="/projects" tone="light">
              All projects
            </ButtonLink>
          </div>
          <div className="grid gap-x-5 gap-y-12 tablet:grid-cols-2 tablet:gap-y-16">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.1}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="concepts-heading" className="pb-20 tablet:pb-[120px]">
          <div className="container-l mb-10 flex flex-col gap-3 tablet:mb-14">
            <h2 id="concepts-heading" className="t-h2">
              Concepts
            </h2>
            <p className="t-lead max-w-[520px] text-neutral-500">
              Quick explorations made between projects, to try ideas without a brief.
            </p>
          </div>
          <ConceptsTicker />
        </section>
      </div>
    </main>
  );
}
