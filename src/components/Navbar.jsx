import { Link, useNavigate } from "react-router-dom";

function Navbar({ cartCount }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));
   //console.log(user);
   
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

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

        {user ? (
          <>
            <li>
              <Link to="/profile">👤 Profile</Link>
            </li>

            <li>
              <Link to="/orders">📦 My Orders</Link>
            </li>

            <li className="welcome-user">👋 {user.name}</li>

            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">👤 Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export { Navbar };
