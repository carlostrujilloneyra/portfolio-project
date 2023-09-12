import { IconBrandGithubFilled, IconWorldWww } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  url_github: string;
  url_website: string;
}

export const ProjectButtons = ({ url_github, url_website }: Props) => {
  return (
    <>
      <div className="mt-8 grid grid-cols-[repeat(2,max-content)] gap-x-2 gap-y-4 min-[550px]:grid-cols-[repeat(2,max-content)] sm:grid-cols-[repeat(2,max-content)] sm:gap-x-3 min-[740px]:mt-3 lg:mt-6 lg:gap-x-4 lg:gap-y-0">
        <Link
          href={url_github}
          target="_blank"
          className="social-network grid grid-cols-[22px,max-content] items-center gap-x-3 px-3 py-[8px] lg:hover:bg-[#232326]"
        >
          <IconBrandGithubFilled size={20} color="#fff" stroke={3} />
          Ver código
        </Link>
        <Link
          href={url_website}
          target="_blank"
          className="social-network grid grid-cols-[23px,1fr] items-center gap-x-2 px-3 py-[8px] text-[15px] font-normal text-white lg:hover:bg-[#232326]"
        >
          <IconWorldWww size={20} color="#fff" stroke={2} />
          Ver proyecto
        </Link>
      </div>
    </>
  );
};
