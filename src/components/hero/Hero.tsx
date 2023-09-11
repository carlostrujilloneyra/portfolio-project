"use client";

import Typewriter from "typewriter-effect";
import { HeroInfo, SocialNetworks } from "./components";

export const Hero = () => {
  return (
    <>
      <div className="padding-x container-max-width grid grid-cols-1 grid-rows-[170px,_1fr] gap-y-12 py-9 sm:grid-rows-none sm:gap-y-8 sm:py-12 lg:grid-cols-2 lg:gap-x-9 lg:gap-y-0 min-[1250px]:grid-cols-hero-grid-max">
        <h1 className="main-title">
          ¡Hola!, me llamo Carlos y soy{" "}
          <span className="frontend-gradient">
            <Typewriter
              options={{
                strings: [
                  "Desarrollador Frontend.",
                  "Programador Web.",
                  "React Developer.",
                  "Desarollador Web.",
                ],
                deleteSpeed: 80,
                wrapperClassName: "frontend-gradient",
                cursorClassName: "cursor-typewriter",
                autoStart: true,
                loop: true,
                delay: 120,
              }}
            />
          </span>
        </h1>

        <div>
          <HeroInfo />
          <SocialNetworks />
        </div>
      </div>
    </>
  );
};
