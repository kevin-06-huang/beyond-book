import { Book } from "./Book";

export const Library = () => {
  return (
    <div className="relative flex flex-col justify-center items-center pt-4">
      <div className="flex-grow">
        <Book />
      </div>
    </div>
  );
};
