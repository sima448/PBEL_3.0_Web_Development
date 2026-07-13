import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>📚 BookVerse</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        
        <li className="cart-nav">
          <Link to="/cart">
            🛒 Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/login">👤 Login</Link>
        </li>
      </ul>
    </nav>
  );
}
export { Navbar };
