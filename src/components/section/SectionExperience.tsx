import { TechnologyList } from "./components";
import { experienceData } from "@/libs/data/experience-data";

export const SectionExperience = () => {
  const { date, role, description, technologies, images, company } =
    experienceData;

  return (
    <>
      <section className="padding-x container grid gap-y-6 py-8 pt-5 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-0 lg:gap-x-6">
        <div>
          <h2 className="subtitle-portfolio mb-6">Experiencia</h2>
          <div className="min-[550px]::items-center mb-4 flex flex-col text-[15px] font-normal leading-[24px] text-white opacity-80 min-[550px]:flex-row min-[550px]:justify-between sm:text-base lg:mb-6">
            <h3 className="mb-3 min-[550px]:mb-0">{date}</h3>
            <div>
              <h3>
                {role} - {company}
              </h3>
            </div>
          </div>

          <p className="mb-6 text-justify text-[17px] font-light leading-[27px] text-colorText sm:mb-6">
            {description}
          </p>

          <TechnologyList technologies={technologies} />
        </div>
      </section>
    </>
  );
};
