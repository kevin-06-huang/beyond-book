import useDocumentTitle from "../hooks/useDocumentTitle";
import { Carousel } from "../components/Carousel";

const HomePage = () => {
  useDocumentTitle("Home");

  return (
    <>
      <section>
        <Carousel />
      </section>
    </>
  );
};

export default HomePage;
