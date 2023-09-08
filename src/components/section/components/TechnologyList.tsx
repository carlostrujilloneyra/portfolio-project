import { Experience } from "@/libs/types/experience.interface";
import { Technology } from ".";

interface Props {
  technologies: Experience["technologies"];
}

export const TechnologyList = ({ technologies }: Props) => {
  return (
    <>
      <div className="mb-5 mt-8 grid grid-cols-[repeat(auto-fill,minmax(80px,100px))] grid-rows-2 items-center gap-x-3 gap-y-5 lg:grid-cols-[repeat(auto-fill,minmax(80px,110px))]">
        {technologies.map(({ id, name }) => (
          <Technology key={id} technology={name} />
        ))}
      </div>
    </>
  );
};
