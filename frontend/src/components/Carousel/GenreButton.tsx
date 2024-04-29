const GenreButton = ({ genre, src }: { genre: string; src: string }) => {
  return (
    <button className="relative group bg-blue-500 font-bold rounded inline-flex items-center justify-center m-1 transition ease-in-out duration-300">
      <span className="absolute z-10 flex items-center justify-center text-opacity-30 group-hover:text-opacity-100 text-white font-bold">
        {genre}
      </span>
      <span
        className="z-0 group-hover:brightness-50 w-[150px] h-[200px] rounded"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />
    </button>
  );
};

export default GenreButton;
