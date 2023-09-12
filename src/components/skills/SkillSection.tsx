import { skillsData } from "@/libs/data/skills-data";
import { SkillList } from "./components";

export const SkillSection = () => {
  const skills = skillsData;

  return (
    <>
      <section className="padding-x container-max-width py-6 lg:pt-9">
        <h2 className="subtitle-portfolio mb-4">Skills / Tecnologías</h2>
        <div className="lg:grid-cols-[repeat(5,minmax(120px,max-content))]lg:gap-4 grid  grid-cols-[repeat(auto-fill,minmax(135px,max-content))] gap-3 py-5 min-[740px]:grid-cols-[repeat(4,minmax(150px,max-content))] lg:gap-4">
          <SkillList skills={skills} />
        </div>
      </section>
    </>
  );
};
