"use client";

import { Experience } from "@/libs/types/experience.interface";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowButtons } from "./ArrowButtons";

interface Props {
  images: Experience["images"];
}

const autoSlide: boolean = false;
const autoSlideTime: number = 3100;

export const Carousel = ({ images }: Props) => {
  const [curr, setCurr] = useState<number>(0);

  const handlePrevImage = () => {
    curr === 0 ? setCurr(images.length - 1) : setCurr(curr - 1);
  };

  const handleNextImage = () => {
    curr === images.length - 1 ? setCurr(0) : setCurr(curr + 1);
  };

  useEffect(() => {
    if (!autoSlide) {
      const slideInterval = setInterval(handleNextImage, autoSlideTime);
      return () => clearInterval(slideInterval);
    }
  }, [curr, images.length]);

  return (
    <>
      <div className="relative -order-1 max-h-[370px] overflow-hidden rounded-lg min-[740px]:order-1 min-[740px]:max-h-[225px] min-[820px]:max-h-[280px] min-[940px]:max-h-[330px] lg:max-h-[360px] min-[1400px]:max-h-[380px]">
        <div
          className="relative  flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {images.map(({ url, width, height, alt }) => (
            <Image
              key={url}
              className="image-carousel rounded-lg shadow-lg"
              style={{ objectFit: "contain" }}
              width={width}
              height={height}
              src={url}
              alt={alt}
              priority={true}
            />
          ))}
        </div>

        {/* Botones */}
        <ArrowButtons
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
        />

        <div className="absolute bottom-[10px] left-0 right-0 min-[740px]:bottom-[18px] min-[800px]:bottom-[10px] lg:bottom-[15px]">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full bg-white transition-all ${
                  curr === i ? "p-[6px]" : "bg-opacity-50"
                }
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
