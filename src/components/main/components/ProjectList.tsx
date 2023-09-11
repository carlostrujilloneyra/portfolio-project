import { Project } from "@/libs/types/project.interface";
import { ProjectCard } from ".";

interface Props {
  projects: Project[];
}

export const ProjectList = ({ projects }: Props) => {
  return (
    <section className="grid gap-y-3 sm:gap-y-5 lg:gap-y-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
};
