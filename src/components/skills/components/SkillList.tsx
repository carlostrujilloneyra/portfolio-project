import { SkillInterface } from "@/libs/types/skill.interface";
import { Skill } from ".";

interface Props {
  skills: SkillInterface[];
}

export const SkillList = ({ skills }: Props) => {
  return (
    <>
      {skills.map((skill) => {
        return <Skill key={skill.id} skill={skill} />;
      })}
    </>
  );
};
