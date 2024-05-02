import { useState } from "react";
import { Carousel } from "./CustomCarousel";
import GenreButton from "./GenreButton";
import { genres } from "../../constants/books";

export const CarouselContainer = () => {
  const [genre, setGenre] = useState<string>("Science Fiction");

  return (
    <div className="relative flex flex-col justify-center items-center px-16 pt-4">
      <div className="flex-grow">
        <Carousel genre={genre} />
      </div>
      <div className="flex w-full justify-center items-end pt-1">
        {Object.entries(genres).map(([genre, src]) => (
          <GenreButton
            key={genre}
            genre={genre}
            src={src}
            setGenre={setGenre}
          />
        ))}
      </div>
    </div>
  );
};
