import { useState } from "react";
// import { Carousel } from "@material-tailwind/react";
import Carousel from "./Carousel";
import GenreButton from "./GenreButton";
import { genres } from "../../constants/genres";

export const CarouselContainer = () => {
  const [genre, setGenre] = useState<string>("Science Fiction");

  return (
    <div className="flex flex-col justify-center items-center px-4 py-2 space-y-4 h-full">
      <div className="flex-grow">
        <Carousel genre={genre} />
      </div>
      <div
        className="flex w-full justify-center items-end"
        style={{ height: "25%" }}
      >
        {Object.entries(genres).map(([genre, src]) => (
          <GenreButton key={genre} genre={genre} src={src} />
        ))}
      </div>
    </div>
  );
};
