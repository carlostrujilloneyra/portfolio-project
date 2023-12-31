"use client";

import { IconWorldWww } from "@tabler/icons-react";
import { TechnologyInfo, TechnologyList } from "./components";
import { experienceData } from "@/libs/data/experience-data";
import Link from "next/link";
import { Carousel } from "../shared/Carousel";
import { motion } from "framer-motion";

export const SectionExperience = () => {
  const { date, role, description, technologies, images, company } =
    experienceData;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 600 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="padding-x container-max-width py-5"
        id="experience"
      >
        <h2 className="subtitle-portfolio mb-6">Experiencia</h2>
        <section className="grid gap-y-8 py-5 pb-0 sm:gap-x-8 min-[740px]:grid-cols-[.8fr,1fr] min-[740px]:gap-x-12 min-[740px]:gap-y-0 lg:grid-cols-[.7fr,1fr] lg:gap-x-14 min-[1140px]:grid-cols-2 min-[1350px]:grid-cols-[1fr,.9fr]">
          <div>
            <TechnologyInfo
              date={date}
              role={role}
              description={description}
              company={company}
            />

            <TechnologyList technologies={technologies} />

            <Link
              href="https://www.datascience.pe/"
              target="_blank"
              className="grid grid-cols-[23px,1fr] items-center gap-x-2  py-[10px] text-[15px] font-normal text-white opacity-70 hover:underline"
            >
              <IconWorldWww size={20} color="#fff" stroke={2} />
              Visitar sitio web
            </Link>
          </div>

          {/* Aquí irá el Carousel */}
          <Carousel images={images} />
        </section>
      </motion.div>
    </>
  );
};
