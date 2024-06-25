"use client";

import Typewriter from "typewriter-effect";
import { HeroInfo, SocialNetworks } from "./components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StateContext } from "@/libs/context/StateContext";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export const Hero = () => {
  const { showMenu, setShowMenu, setIsOpen, isOpen } = useContext(StateContext);

  const handleTapMenu = () => {
    setShowMenu(!showMenu);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onClick={handleTapMenu}
        className="padding-x container-max-width grid grid-cols-1 grid-rows-[170px,_1fr] gap-y-12 py-9 pt-12 sm:grid-rows-none sm:gap-y-8 sm:py-12 sm:pt-16 lg:grid-cols-2 lg:gap-x-9 lg:gap-y-0 lg:pt-24 min-[1350px]:grid-cols-hero-grid-max"
      >
        <h1 className="main-title">
          ¡Hola!, me llamo Carlos y soy{" "}
          <span className="frontend-gradient">
            <Typewriter
              options={{
                strings: [
                  "Desarrollador Frontend.",
                  "Programador Web.",
                  "React Developer.",
                  "Desarollador Web.",
                ],
                deleteSpeed: 80,
                wrapperClassName: "frontend-gradient",
                cursorClassName: "cursor-typewriter",
                autoStart: true,
                loop: true,
                delay: 120,
              }}
            />
          </span>
        </h1>

        <div>
          <HeroInfo />
          <SocialNetworks />
        </div>
      </motion.div>
    </>
  );
};
