import useDocumentTitle from "../hooks/useDocumentTitle";

const AboutPage = () => {
  useDocumentTitle("About Us");
  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">ABOUT US</p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
