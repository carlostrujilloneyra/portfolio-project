"use client";

import Link from "next/link";
import { ProjectList } from "./components";
import { projectsData } from "@/libs/data/projects-data";

export const Main = () => {
  const projects = projectsData;

  return (
    <>
      <main
        className="padding-x container-max-width py-4 pb-8 sm:py-9 sm:pt-7 lg:py-12 lg:pt-7"
        id="projects"
      >
        <h2 className="subtitle-portfolio mb-5">Proyectos realizados</h2>
        <p className="mb-6 text-justify text-[17px] font-light leading-[27px] text-colorText sm:mb-6 lg:w-2/3">
          Estos son algunos de los proyectos que he realizado para poner en
          práctica los conocimientos adquiridos de manera autodidacta, los
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
