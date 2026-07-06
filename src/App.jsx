import "./App.css";

function App() {
  return (
    <>
    <nav className="navbar">
      <h2>📚 BookVerse</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Books</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </nav>

    <div className="hero">
      <h1>Welcome to BookVerse</h1>
      <p>Discover, Explore and Buy Your Favorite Books</p>

      <button>Shop Now</button>
    </div>

    <section className="books-section">
     <h2>Featured Books</h2>

     <div className="book-container">
        <div className="book-card">
          <img src="https://via.placeholder.com/150x200" alt="Book"/>

          <h3>React Basic</h3>
            <p>₹499</p>
          <button>Add to Cart</button>
        </div>
        
        <div className="book-card">
           <img src="https://via.placeholder.com/150x200" alt="Book"/>
           <h3>JavaScript</h3>
        </div>
        


      </div>
    </section>



    </>
  );
}

export default App;