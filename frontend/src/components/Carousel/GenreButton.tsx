const GenreButton = ({ genre, src }: { genre: string; src: string }) => {
  return (
    <button
      className="bg-blue-500 text-opacity-30 hover:text-opacity-100 text-white font-bold py-2 px-2 rounded inline-flex items-center justify-center m-1 min-w-[150px] min-h-[200px]"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      {genre}
    </button>
  );
};

export default GenreButton;
