import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product and web design case studies.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="bg-white pt-32 pb-20 tablet:pt-40 tablet:pb-[120px]">
      <div className="container-l">
        <header className="mb-12 flex flex-col gap-4 tablet:mb-16">
          <h1 className="t-h1">Projects</h1>
          <p className="t-lead max-w-[520px] text-neutral-500">
            A selection of recent product and web design work.
          </p>
        </header>
        <div className="grid gap-x-5 gap-y-12 tablet:grid-cols-2 tablet:gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} headingLevel="h2" />
          ))}
        </div>
      </div>
    </main>
  );
}
