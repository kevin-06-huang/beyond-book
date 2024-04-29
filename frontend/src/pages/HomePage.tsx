import { useEffect, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Carousel } from "../components/Carousel";

const HomePage = () => {
  const [message, setMessage] = useState("");
  useDocumentTitle("Home");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/message");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        console.error("Error: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="bg-ct-blue-600">
        <Carousel />
      </section>
    </>
  );
};

export default HomePage;
