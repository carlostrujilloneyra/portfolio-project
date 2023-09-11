import { Experience } from "@/libs/types/experience.interface";
import { Technology } from ".";

interface Props {
  technologies: Experience["technologies"];
}

export const TechnologyList = ({ technologies }: Props) => {
  return (
    <>
      <div className="mb-3 mt-8 grid grid-cols-[repeat(auto-fill,minmax(85px,125px))] items-center gap-x-3 gap-y-5 min-[740px]:mb-6 lg:grid-cols-[repeat(auto-fill,minmax(95px,135px))] lg:gap-x-4">
        {technologies.map(({ id, name }) => (
          <Technology key={id} technology={name} />
        ))}
      </div>
    </>
  );
};
