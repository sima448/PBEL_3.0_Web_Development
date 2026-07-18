import { Link, useNavigate } from "react-router-dom";

function Cart({ cart, setCart, removeFromCart, totalPrice }) {
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    try {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if (!currentUser.address) {
        alert("Please add delivery address in your profile first 📍");
        navigate("/profile");
        return;
      }

      const response = await fetch(
        "https://bookverse-backend-ti49.onrender.com/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: currentUser.email,
            books: cart,
            totalPrice,
            address: currentUser.address,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("🎉 Order Placed Successfully");

      localStorage.removeItem("cart");

      setCart([]);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-left">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart-container">
            <h2 className="empty-cart">🛒 Your cart is empty!</h2>

            <Link to="/">
              <button className="shop-btn">Shop Now</button>
            </Link>
          </div>
        ) : (
          cart.map((book, index) => (
            <div key={index} className="cart-item">
              <Link to={`/book/${book.id}`} className="cart-link">
                <img src={book.image} alt={book.title} className="cart-image" />

                <div className="cart-details">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <p>{book.price}</p>
                  <p>{book.rating}</p>
                </div>
              </Link>

              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-right">
          <h2>Price Details</h2>

          <hr />

          <div className="price-row">
            <span>Total Items: </span>
            <span>{cart.length}</span>
          </div>

          <h3>Total: ₹{totalPrice}</h3>

          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export { Cart };
