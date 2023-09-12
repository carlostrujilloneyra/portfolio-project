import { SkillInterface } from "@/libs/types/skill.interface";

interface Props {
  skill: SkillInterface;
}

export const Skill = ({ skill }: Props) => {
  const { id, name, url } = skill;

  return (
    <>
      <div key={id}>
        <span className="social-network grid grid-cols-[24px,max-content] items-center justify-center justify-items-center gap-x-2 text-center font-medium text-white lg:hover:bg-[#232326]">
          <img src={url} width={21} height={21} alt={name} />
          {name}
        </span>
      </div>
    </>
  );
};
