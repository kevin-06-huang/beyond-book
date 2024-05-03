import { BookType } from "../../types/BookType";

const BookList = ({ books }: { books: BookType[] }) => {
  return (
    <div>
      {books.map((book: { id: number; title: string; pages: string[] }) => (
        <button
          key={book.id}
          className="relative group bg-blue-500 font-bold rounded inline-flex items-center justify-center m-1 transition ease-in-out duration-300"
        >
          <span className="absolute z-10 flex items-center justify-center text-opacity-30 group-hover:text-opacity-100 text-white font-bold">
            {book.title}
          </span>
          <span className="z-0 group-hover:brightness-50 w-[75px] h-[100px] rounded" />
        </button>
      ))}
    </div>
  );
};

export { BookList };
