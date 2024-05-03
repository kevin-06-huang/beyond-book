import useDocumentTitle from "../hooks/useDocumentTitle";
import read from "../assets/read.gif";

const AboutPage = () => {
  useDocumentTitle("About Us");
  return (
    <>
      <section className="bg-ct-blue-600 px-12 py-12 mt-24 mx-8 bg-white shadow-lg rounded-xl">
        <div className="mx-auto bg-ct-dark-100 rounded-md flex justify-center items-center">
          <p className="text-3xl font-semibold">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Book Buddy, we
            believe in the power of storytelling to ignite imaginations and
            inspire young minds. Our mission is to revolutionize bedtime reading
            by offering a mobile storytelling app like no other. Powered by
            Gemini AI, Book Buddy delivers personalized stories tailored to each
            child's age and preferences, ensuring a magical and immersive
            experience every time. With interactive features that allow children
            to shape their own adventures, Book Buddy empowers young readers to
            become active participants in their storytelling journey. Join us on
            a quest to unleash the boundless possibilities of imagination, one
            story at a time.
          </p>
          <img src={read} alt={"READ"} />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
