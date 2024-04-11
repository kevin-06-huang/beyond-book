import { useEffect, useState } from "react";

const HomePage = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/message');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        console.error('Error: ', err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            Amazing children's book
          </p>
          <p className="text-3xl font-semibold">
            The current message is: {message !== '' ? message : "None"}.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
