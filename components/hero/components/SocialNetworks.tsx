"use client";

import Link from "next/link";
import {
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react";

export const SocialNetworks = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/TRUJILLO_NEYRA_CARLOS_AUGUSTO.pdf";
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = cvUrl;
    link.download = "TRUJILLO_NEYRA_CARLOS_AUGUSTO.pdf";
    link.target = "_blank";

    link.click();
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-[repeat(2,max-content)] gap-x-4 gap-y-4 min-[550px]:grid-cols-[repeat(3,max-content)] sm:mt-8 lg:grid-cols-[repeat(2,max-content)] lg:gap-y-5 min-[1280px]:grid-cols-[repeat(3,max-content)]">
        <button onClick={handleDownloadCV} className="button-hero-portfolio">
          <IconDownload size={20} color="#fff" stroke={3} />
          Descargar CV
        </button>

        <Link
          href="https://github.com/carlostrujilloneyra"
          target="_blank"
          className="grid grid-cols-[23px,60px] items-center gap-x-3 rounded-lg border-2 border-colorText px-4 py-[10px] text-[15px] font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#232326]"
        >
          <IconBrandGithubFilled size={23} color="#fff" stroke={3} />
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/carlostrujillo21/"
          target="_blank"
          className="grid w-[150px] grid-cols-[23px,max-content] items-center gap-x-3 rounded-lg border-2 border-colorText px-4 py-[10px] text-[15px] font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#232326]"
        >
          <IconBrandLinkedin size={23} color="#fff" stroke={2} />
          Linkedin
        </Link>
      </div>
    </>
  );
};
