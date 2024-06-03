"use client";

import Link from "next/link";
import { ProjectList } from "./components";
import { projectsData } from "@/libs/data/projects-data";
import { useContext } from "react";
import { StateContext } from "@/libs/context/StateContext";

export const Main = () => {
  const projects = projectsData;

  const { showMenu, setShowMenu, setIsOpen, isOpen } = useContext(StateContext);

  const handleTapMenu = () => {
    setShowMenu(!showMenu);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main
        className="padding-x container-max-width py-4 pb-8 sm:py-9 sm:pt-7 lg:py-12 lg:pt-7"
        onClick={handleTapMenu}
        id="projects"
      >
        <h2 className="subtitle-portfolio mb-5">Proyectos realizados</h2>
        <p className="mb-6 text-justify text-[17px] font-light leading-[27px] text-colorText sm:mb-6 lg:w-2/3">
          Estos son algunos de los proyectos que he realizado para poner en
          práctica los conocimientos adquiridos de manera autodidacta, algunos
          diseños usados en los proyectos fueron tomados de{" "}
          <Link
            className="underline"
            href="https://www.frontendmentor.io/challenges"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          .
        </p>

        <ProjectList projects={projects} />
      </main>
    </>
  );
};
