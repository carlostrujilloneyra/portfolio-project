interface Props {
  date: string;
  role: string;
  description: string;
  company: string;
  duration?: string;
}

export const TechnologyInfo = ({
  date,
  role,
  description,
  company,
  duration,
}: Props) => {
  return (
    <>
      <div className="min-[550px]::items-center mb-3 flex flex-col justify-between gap-[14px] font-normal leading-[24px] text-white opacity-80 min-[550px]:flex-row min-[550px]:justify-between sm:flex-col sm:gap-3 sm:text-base lg:mb-4 lg:flex-row lg:gap-8">
        <h3 className="text-[19px] leading-6 min-[550px]:mb-0  lg:text-xl">
          {date}
        </h3>
        <div>
          <h3 className="text-[19px] leading-6 lg:text-xl">
            {role} - {company}
          </h3>
        </div>
      </div>

      <div className="mb-4 text-lg font-medium opacity-80 lg:mb-5">
        <h3 className="text-white">{duration}</h3>
      </div>

      <p className="mb-6 text-justify text-[17px] font-light leading-[27px] text-colorText sm:mb-6">
        {description}
      </p>
    </>
  );
};
