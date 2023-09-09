import { IconWorldWww } from "@tabler/icons-react";
import { TechnologyInfo, TechnologyList } from "./components";
import { experienceData } from "@/libs/data/experience-data";
import Link from "next/link";
import { Carousel } from "../shared/Carousel";

export const SectionExperience = () => {
  const { date, role, description, technologies, images, company } =
    experienceData;

  return (
    <>
      <div className="padding-x container-max-width">
        <h2 className="subtitle-portfolio mb-6">Experiencia</h2>
        <section className="grid gap-y-6 py-8 pt-5 sm:gap-x-8 sm:gap-y-0 min-[740px]:grid-cols-[.8fr,1fr] min-[740px]:gap-x-12 lg:grid-cols-[.7fr,1fr] lg:gap-x-16 min-[1200px]:grid-cols-2">
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
              className="transiti grid grid-cols-[23px,1fr] items-center gap-x-2  py-[10px] text-[15px] font-normal text-white opacity-70 transition-all duration-300 ease-in-out hover:underline"
            >
              <IconWorldWww size={20} color="#fff" stroke={2} />
              Visitar sitio web
            </Link>
          </div>

          {/* Aquí irá el Carousel */}
          <Carousel images={images} />
        </section>
      </div>
    </>
  );
};
