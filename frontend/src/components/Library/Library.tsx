import { Book } from "./Book";

export const Library = () => {
  return (
    <div className="relative flex flex-col justify-center items-center px-16 pt-4">
      <p>LIBRARY</p>
      <div className="flex-grow">
        <Book />
      </div>
    </div>
  );
};
