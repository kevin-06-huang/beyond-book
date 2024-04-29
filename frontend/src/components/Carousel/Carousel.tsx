import { useState } from "react";
import { ImageDataType } from "../../types/custom";

const Carousel = ({ genre }: { genre: string }) => {
  const [current, setCurrent] = useState<number>(0);
  const images: ImageDataType = [];
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={prevSlide} className="absolute left-0 z-10">
        &#10094;
      </button>
      {genre}
      {images.map((image, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img src={image.src} alt={image.alt} className="w-full" />
          )}
        </div>
      ))}
      <button onClick={nextSlide} className="absolute right-0 z-10">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
