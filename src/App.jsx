import "./App.css";
import { books } from "./data/books";

import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";

import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { BookDetails } from "./pages/BookDetails";
import { About } from "./pages/About";
import { Signup } from "./pages/Signup";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Profile } from "./pages/Profile";
import { MyOrders } from "./pages/MyOrders";
import { OrderDetails } from "./pages/OrderDetails";
import { Wishlist } from "./pages/Wishlist";


import { Footer } from "./components/Footer";


function App() {

   
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [apiBooks, setApiBooks] = useState([]);
 
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ?
    JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });


  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      search.trim() === "" ||
      book.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || book.category === category;

    return matchesSearch && matchesCategory;
  });
  const suggestions = [...books, ...apiBooks].filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  function addToCart(book) {
    setCart([...cart, book]);
    
    setToast(`✅ ${book.title} added to cart`);

    setTimeout(() => {
      setToast("");
    }, 2000);

  }
  function addToWishlist(book) {
    const alreadyExists = wishlist.find((item) => item.id === book.id);

    if (alreadyExists) {
      alert("Book already in wishlist ❤️");
      return;
    }

    setWishlist([...wishlist, book]);

    setToast(`❤️ ${book.title} added to wishlist`);

    setTimeout(() => {
      setToast("");
    }, 2000);
  }
  function removeFromCart(index) {
    const updatedCart = cart.filter(
    (_, i) => i !== index);
    setCart(updatedCart);
  }

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  

   useEffect(() => {
     if (search.length < 3) {
       setApiBooks([]);
       return;
     }

     const timer = setTimeout(async () => {
       try {
         const response = await fetch(
           `https://openlibrary.org/search.json?q=${search}`,
         );

         const data = await response.json();

          const books = (data.docs || [])
            .filter((book) => book.cover_i)
            .slice(0, 12)
            .map((book, index) => {
              const price = Math.floor(Math.random() * 500 + 200);

              return {
                id: book.key ? book.key.split("/").pop() : index.toString(),
                title: book.title || "No Title",
                author: book.author_name?.[0] || "Unknown Author",
                image: book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : "https://placehold.co/200x300?text=No+Cover",
                price: `₹${price}`,
                oldPrice: `₹${price + 300}`,
                discount: `${Math.floor(
                  ((price + 300 - price) / (price + 300)) * 100,
                )}% OFF`,
                rating: `${(Math.random() * 2 + 3).toFixed(1)}⭐`,

                description:
                  book.first_sentence?.[0] ||
                  `${book.title} is a comprehensive book by ${
                    book.author_name?.[0] || "unknown author"
                  } that helps readers learn and understand important concepts.`,

                category: "Books",
              };
            });

         console.log("API Books:", books);
         setApiBooks(books);
       } catch (error) {
         console.log(error);
       }
     }, 200);

     return () => clearTimeout(timer);
   }, [search]);


  const totalPrice = cart.reduce((total, book) => {
    return total + Number(book.price.replace("₹", ""));
  }, 0);

  return (
    <div>
      <Navbar cartCount={cart.length} wishlistCount={wishlist.length} />
      {toast && <div className="toast">{toast}</div>}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              filteredBooks={
                search.trim().length < 3 ? filteredBooks : apiBooks
              }
              suggestions={suggestions}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />

        <Route
          path="/books"
          element={
            <Books
              addToCart={addToCart}
              apiBooks={apiBooks}
              search={search}
              setSearch={setSearch}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
              totalPrice={totalPrice}
            />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/book/:id"
          element={<BookDetails apiBooks={apiBooks} addToCart={addToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              setWishlist={setWishlist}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;