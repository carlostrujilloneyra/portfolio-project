import { Experience } from "@/libs/types/experience.interface";
import { Technology } from ".";

interface Props {
  technologies: Experience["technologies"];
}

export const TechnologyList = ({ technologies }: Props) => {
  return (
    <>
      <div className="mb-8 mt-8 grid grid-cols-[repeat(auto-fill,minmax(85px,125px))]  items-center gap-x-3 gap-y-5 lg:grid-cols-[repeat(auto-fill,minmax(95px,135px))]">
        {technologies.map(({ id, name }) => (
          <Technology key={id} technology={name} />
        ))}
      </div>
    </>
  );
};
