interface Props {
  title: string;
  description: string;
}

export const ProjectInfo = ({ title, description }: Props) => {
  return (
    <>
      <h3 className="mb-3 text-2xl font-medium text-white opacity-80 lg:text-[28px]">
        {title}
      </h3>
      <p className="mb-6 text-justify text-[17px] font-light leading-[27px] text-colorText sm:mb-6">
        {description}
      </p>
    </>
  );
};
