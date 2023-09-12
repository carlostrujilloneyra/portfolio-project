interface Props {
  technology: string;
}

export const Technology = ({ technology }: Props) => {
  return (
    <>
      <p className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 px-[10px] py-[6px] text-center text-[14px] font-extrabold text-white transition-all duration-300 ease-in-out hover:bg-[#232326] hover:opacity-90">
        {technology}
      </p>
    </>
  );
};
