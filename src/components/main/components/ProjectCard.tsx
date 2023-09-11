import { Project } from "@/libs/types/project.interface";
import { ProjectInfo } from ".";
import { TechnologyList } from "@/components/section/components";
import { Carousel } from "@/components/shared/Carousel";
import { ProjectButtons } from "./ProjectButtons";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const {
    title,
    description,
    technologies,
    images,
    orderDifferent,
    url_github,
    url_website,
  } = project;

  return (
    <>
      <div
        className={`grid ${
          orderDifferent ? "grid-different" : "grid-normal"
        } gap-y-8 rounded-lg pb-4 pt-8 sm:gap-x-8 min-[740px]:gap-x-12 
        min-[740px]:gap-y-0 lg:gap-x-14 lg:pb-5
        `}
      >
        <div className={`${orderDifferent && "order-4"}`}>
          <ProjectInfo title={title} description={description} />
          <TechnologyList technologies={technologies} />
          {/* Aquí irán botones para ver proyecto y código */}
          <ProjectButtons url_github={url_github} url_website={url_website} />
        </div>

        <Carousel images={images} />
      </div>
    </>
  );
};
