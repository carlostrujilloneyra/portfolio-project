import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface Props {
  handlePrevImage: () => void;
  handleNextImage: () => void;
}

export const ArrowButtons = ({ handlePrevImage, handleNextImage }: Props) => {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          aria-label="Previous image"
          className="button-arrow-carousel ml-[6px] sm:ml-2 lg:ml-3"
          onClick={handlePrevImage}
        >
          <IconChevronLeft size={20} color="#fff" stroke={4} />
        </button>

        <button
          aria-label="Next image"
          className="button-arrow-carousel mr-[6px] sm:mr-2 lg:mr-3"
          onClick={handleNextImage}
        >
          <IconChevronRight size={20} color="#fff" stroke={4} />
        </button>
      </div>
    </>
  );
};
