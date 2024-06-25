"use client";

import { skillsData } from "@/libs/data/skills-data";
import { SkillList } from "./components";
import { useContext } from "react";
import { StateContext } from "@/libs/context/StateContext";

export const SkillSection = () => {
  const skills = skillsData;

  const { showMenu, setShowMenu, setIsOpen, isOpen } = useContext(StateContext);

  const handleTapMenu = () => {
    setShowMenu(!showMenu);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section
        className="padding-x container-max-width py-6 lg:pt-9"
        onClick={handleTapMenu}
        id="skills"
      >
        <h2 className="subtitle-portfolio mb-4">Skills / Tecnologías</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(135px,max-content))] gap-3  py-5 min-[740px]:grid-cols-[repeat(4,minmax(150px,max-content))] lg:grid-cols-[repeat(6,minmax(130px,max-content))] lg:gap-3 min-[1100px]:grid-cols-[repeat(7,minmax(130px,max-content))] min-[1400px]:grid-cols-[repeat(auto-fill,minmax(130px,max-content))]">
          <SkillList skills={skills} />
        </div>
      </section>
    </>
  );
};
