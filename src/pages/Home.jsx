import { Hero } from "../components/Hero";
import { SearchBox } from "../components/SearchBox";
import { Categories } from "../components/Categories";
import { BookCard } from "../components/BookCard";
//import { useEffect, useState } from "react";




function Home({
  search,
  setSearch,
  category,
  setCategory,
  filteredBooks,
  suggestions,
  addToCart,
  addToWishlist,
}) {
  return (
    <>
      <Hero />
      <SearchBox
        search={search}
        setSearch={setSearch}
        suggestions={filteredBooks}
      />
      <Categories
        category={category}
        setCategory={setCategory}
        setSearch={setSearch}
      />

      <section className="featured-books">
        <h2>Featured Books</h2>
        <p className="result-count">{filteredBooks.length} Books Found</p>{" "}
        {filteredBooks.length === 0 ? (
          <h3 className="no-books">😔 No books found Try another search</h3>
        ) : (
          <div className="book-container">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                oldPrice={book.oldPrice}
                discount={book.discount}
                rating={book.rating}
                image={book.image}
                addToCart={() => addToCart(book)}
                addToWishlist={addToWishlist}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export { Home }

