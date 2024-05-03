import { useState } from "react";
import { desk } from "../../constants/books";
import { Book } from "./Book";
import { NoBook } from "./NoBook";
import { Spinner } from "../shared/Spinner";
import generate from "../../assets/generate.png";

export const Library = () => {
  const [currentBook, setCurrentBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate");
      if (response.ok) {
        const data = await response.json();
        setCurrentBook(data.book);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.error("Failed to generate: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center px-2 py-2">
      <div
        className="relative flex flex-col justify-center items-center px-2 py-2 rounded-xl"
        style={{
          backgroundImage: `url(${desk})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          height: "75vh",
          width: "80vw",
        }}
      >
        {currentBook ? (
          <Book title={currentBook.title} pages={currentBook.pages} />
        ) : (
          <NoBook />
        )}
      </div>
      {isLoading ? (
        <Spinner className="mt-4" size={10} />
      ) : (
        <button
          onClick={handleClick}
          className="w-10 h-10 mt-4 hover:brightness-50"
        >
          <img src={generate} alt={"generate"} />
        </button>
      )}
    </div>
  );
};
