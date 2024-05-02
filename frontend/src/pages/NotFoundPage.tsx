import useDocumentTitle from "../hooks/useDocumentTitle";

const NotFoundPage = () => {
  useDocumentTitle("Not Found");

  return (
    <>
      <section className="bg-ct-blue-600">
        <div className="relative flex flex-col justify-center items-center px-16 pt-4">
          Page Not Found / Unauthorized
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
