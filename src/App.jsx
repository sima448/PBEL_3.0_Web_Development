import "./App.css";
import { books } from "./data/books";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SearchBox } from "./components/SearchBox";
import { Categories } from "./components/Categories";
import { BookCard } from "./components/BookCard";
import { useState } from "react";


import { Footer } from "./components/Footer";


function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const  filteredBooks = books.filter((book) => 
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBox 
        search={search}
        setSearch={setSearch}
      />
      <Categories />

      <section className="featured-books">
        <h2>Featured Books</h2>

        <div className="book-container">
          {filteredBooks.map((book) => (
            <BookCard 
               key={book.id}
               title={book.title}
               author={book.author}
               price={book.price}
               rating={book.rating}
            
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;