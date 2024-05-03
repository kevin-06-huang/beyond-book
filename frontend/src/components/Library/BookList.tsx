import { BookType } from "../../types/BookType";

interface BookListProps {
  books: BookType[];
  setCurrentBook: (book: BookType) => void;
}

const BookList = ({ books, setCurrentBook }: BookListProps) => {
  return (
    <div className="flex flex-wrap mt-2">
      {books.map((book: { id: number; title: string; pages: string[] }) => (
        <button
          key={book.id}
          className="relative bg-blue-500 rounded m-1 transition ease-in-out duration-300"
          onClick={() => setCurrentBook(book)}
        >
          <span className="w-[75px] h-[100px] flex items-center justify-center text-opacity-30 hover:text-opacity-100 text-white text-xs">
            {book.title}
          </span>
        </button>
      ))}
    </div>
  );
};

export { BookList };
