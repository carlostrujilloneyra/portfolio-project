interface Props {
  date: string;
  role: string;
  description: string;
  company: string;
}

export const TechnologyInfo = ({ date, role, description, company }: Props) => {
  return (
    <>
      <div className="min-[550px]::items-center mb-4 flex flex-col text-[15px] font-normal leading-[24px] text-white opacity-80 min-[550px]:flex-row min-[550px]:justify-between sm:gap-4 sm:text-base lg:mb-6">
        <h3 className="mb-3 text-lg min-[550px]:mb-0">{date}</h3>
        <div>
          <h3 className="text-lg">
            {role} - {company}
          </h3>
        </div>
      </div>

      <p className="mb-6 text-justify text-[17px] font-light leading-[27px] text-colorText sm:mb-6">
        {description}
      </p>
    </>
  );
};
