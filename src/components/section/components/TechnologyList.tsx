import { Experience } from "@/libs/types/experience.interface";
import { Technology } from ".";

interface Props {
  technologies: Experience["technologies"];
}

export const TechnologyList = ({ technologies }: Props) => {
  return (
    <>
      <div className="mb-5 mt-8 grid grid-cols-[repeat(auto-fill,minmax(110px,max-content))] items-center gap-x-3 gap-y-5 min-[740px]:mb-8 min-[740px]:grid-cols-[repeat(auto-fill,minmax(115px,max-content))] lg:grid-cols-[repeat(auto-fill,minmax(120px,max-content))] lg:gap-4">
        {technologies.map(({ id, name }) => (
          <Technology key={id} technology={name} />
        ))}
      </div>
    </>
  );
};
