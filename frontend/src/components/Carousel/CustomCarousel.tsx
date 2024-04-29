import { useState } from "react";
import { ImageDataType } from "../../types/custom";

import { Carousel } from "@material-tailwind/react";

const CustomCarousel = ({ genre }: { genre: string }) => {
  const [current, setCurrent] = useState<number>(0);
  const images: ImageDataType = [];

  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "65vh" }}
    >
      <Carousel transition={{ duration: 2 }} className="rounded-xl">
        <div className="relative h-full w-full">
          <div className="w-3/4 text-center md:w-2/4">{genre}</div>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>

        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export { CustomCarousel as Carousel };
