import { useState } from "react";
import { desk } from "../../constants/books";
import { Book } from "./Book";
import { NoBook } from "./NoBook";
import { Spinner } from "../shared/Spinner";
import { getCookie } from "../../utils/networkUtils";
import generate from "../../assets/generate.png";
import save from "../../assets/save.png";

export const Library = () => {
  const [currentBook, setCurrentBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveable, setIsSaveable] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate");
      if (response.ok) {
        const data = await response.json();
        setCurrentBook(data.book);
        setIsSaveable(true);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.error("Failed to generate: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    const csrfToken = getCookie("csrftoken")!;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include" as RequestCredentials,
      body: JSON.stringify(currentBook),
    };

    try {
      const response = await fetch("/api/save-book", requestOptions);
      if (response.ok) {
        setIsSaveable(false);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.error("Failed to save: ", err);
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
      <div>
        {isLoading ? (
          <Spinner className="mt-4" size={10} />
        ) : (
          <button
            className="w-10 h-10 mt-4 mr-2 hover:brightness-50"
            onClick={handleClick}
          >
            <img src={generate} alt={"generate"} />
          </button>
        )}
        {isSaveable && (
          <button className="w-10 h-10 mt-4" onClick={handleSave}>
            <img src={save} alt={"generate"} />
          </button>
        )}
      </div>
    </div>
  );
};
