import useDocumentTitle from "../hooks/useDocumentTitle";
import { Library } from "../components/Library";

const LibraryPage = () => {
  useDocumentTitle("Library");
  return (
    <>
      <section className="bg-ct-blue-600">
        <Library />
      </section>
    </>
  );
};

export default LibraryPage;
