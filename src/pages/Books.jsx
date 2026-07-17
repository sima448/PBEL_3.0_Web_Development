import { books } from "../data/books";
import { BookCard } from "../components/BookCard";
import { SearchBox } from "../components/SearchBox";

function Books({ addToCart, apiBooks, search, setSearch }) {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  const displayBooks =
    search.trim().length >= 3 && apiBooks.length > 0 ? apiBooks : filteredBooks;

  return (
    <div className="books-page">
      <h1>All Books</h1>

      <SearchBox
        search={search}
        setSearch={setSearch}
        suggestions={displayBooks}
      />

      <div className="books-container">
        {displayBooks.length > 0 ? (
          displayBooks.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              addToCart={() => addToCart(book)}
            />
          ))
        ) : (
          <h3>No books found</h3>
        )}
      </div>
    </div>
  );
}

export { Books };