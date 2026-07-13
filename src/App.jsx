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



import { Footer } from "./components/Footer";


function App() {
   
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ?
    JSON.parse(savedCart) : [];
  });

  const  filteredBooks = books.filter((book) => {
  const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase())
  const matchesCategory = category === "All" || book.category === category;

    return matchesSearch && matchesCategory;

  });
  
  function addToCart(book) {
    setCart([...cart, book]);
    
    setToast(`✅ ${book.title} added to cart`);

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
  })
  

  const totalPrice = cart.reduce((total, book) => {
    return total + Number(book.price.replace("₹", ""));
  }, 0);


  return (
    <div>
      <Navbar cartCount={cart.length} />
       
       {toast && (
        <div className="toast">{toast}</div>
       )}



      <Routes>
        <Route 
        path="/" 
        element={ 
          <Home 
           search={search}
           setSearch={setSearch}
           category={category}
           setCategory={setCategory}
           filteredBooks={filteredBooks}
           addToCart={addToCart}
          />
          }
          />


        <Route path="/books" element={<Books />} />


        <Route 
        path="/cart" 
        element={
        <Cart 
        cart={cart} 
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
        
        />
        }
        />


        <Route path="/login" element={< Login />} />
        <Route path="/book/:id" element={<BookDetails
        addToCart={addToCart} />} />
        <Route path="/about" element={<About />}/>

      </Routes>

    
      

      <Footer />
    </div>
  );
}

export default App;