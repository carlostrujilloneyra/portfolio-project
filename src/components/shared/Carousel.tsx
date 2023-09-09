"use client";

import { Experience } from "@/libs/types/experience.interface";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowButtons } from "./ArrowButtons";

interface Props {
  images: Experience["images"];
}

const autoSlide: boolean = false;
const autoSlideTime: number = 4000;

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
      <div className="relative max-h-[370px] overflow-hidden sm:max-h-[330px] lg:max-h-[360px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {images.map(({ url, width, height, alt }) => (
            <Image
              key={url}
              className="image-carousel rounded-lg shadow-lg"
              style={{ objectFit: "contain", width: "100%" }}
              src={url}
              alt={alt}
              width={width}
              height={height}
              priority
            />
          ))}
        </div>

        {/* Botones */}
        <ArrowButtons
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
        />

        <div className="absolute bottom-[10px] left-0 right-0">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full bg-white transition-all ${
                  curr === i ? "p-[5px]" : "bg-opacity-50"
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
