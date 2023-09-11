import { Project } from "@/libs/types/project.interface";
import { ProjectCard } from ".";

interface Props {
  projects: Project[];
}

export const ProjectList = ({ projects }: Props) => {
  return (
    <section className="grid gap-y-4 sm:gap-y-12">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
};
