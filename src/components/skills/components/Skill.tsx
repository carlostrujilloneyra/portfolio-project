"use client";

import { SkillInterface } from "@/libs/types/skill.interface";
import { motion } from "framer-motion";

interface Props {
  skill: SkillInterface;
}

const fadeInAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

export const Skill = ({ skill }: Props) => {
  const { id, name, url } = skill;

  return (
    <>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        key={id}
      >
        <span className="social-network grid grid-cols-[24px,max-content] items-center justify-center justify-items-center gap-x-1 text-center font-medium text-white lg:gap-x-3 lg:hover:bg-[#232326]">
          <img src={url} width={21} height={21} alt={name} />
          {name}
        </span>
      </motion.div>
    </>
  );
};
