import { useState } from "react";
import { books } from "../data/books";
import { BookCard } from "../components/BookCard";
import { SearchBox } from "../components/SearchBox";

function Books({ addToCart }) {
  const [search, setSearch] = useState("");
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="books-page">
      <h1>All Books</h1>
      <SearchBox search={search} setSearch={setSearch} />

      <div className="books-container">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} addToCart={() => addToCart(book)} />
        ))}
      </div>
    </div>
  );
}

export { Books };
