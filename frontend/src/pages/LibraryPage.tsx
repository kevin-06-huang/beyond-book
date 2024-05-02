import useDocumentTitle from "../hooks/useDocumentTitle";
import { Library } from "../components/Library";

const LibraryPage = () => {
  useDocumentTitle("Library");
  return (
    <>
      <section>
        <Library />
      </section>
    </>
  );
};

export default LibraryPage;
