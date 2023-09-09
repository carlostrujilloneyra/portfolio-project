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
      <div className="mt-6 grid grid-cols-[repeat(2,max-content)] gap-x-3 gap-y-4 min-[550px]:grid-cols-[repeat(3,max-content)] sm:mt-8 lg:grid-cols-[repeat(2,max-content)] lg:gap-y-5 min-[1280px]:grid-cols-[repeat(3,max-content)]">
        <button onClick={handleDownloadCV} className="button-hero-portfolio">
          <IconDownload size={20} color="#fff" stroke={3} />
          Descargar CV
        </button>

        <Link
          href="https://github.com/carlostrujilloneyra"
          target="_blank"
          className="social-network grid grid-cols-[22px,50px] items-center  gap-x-3 lg:hover:bg-[#232326]"
        >
          <IconBrandGithubFilled size={20} color="#fff" stroke={3} />
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/carlostrujillo21/"
          target="_blank"
          className="social-network grid w-[150px] grid-cols-[23px,max-content] items-center gap-x-3 lg:hover:border-[#0b66c2] lg:hover:bg-[#0b66c2]"
        >
          <IconBrandLinkedin size={22} color="#fff" stroke={2} />
          Linkedin
        </Link>
      </div>
    </>
  );
};
