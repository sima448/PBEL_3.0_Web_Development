import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart, totalPrice }) {
  return (
    <div className="cart-page">
      <div className="cart-left">
        <h1>Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart-container">
          <h2 className="empty-cart"> 🛒 Your cart is empty!</h2>

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

          <div class="price-row">
            <span>Total Items: </span>
            <span>{cart.length}</span>
          </div>

          <div>
            <h3>Total: ₹{totalPrice}</h3>
            <button>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export { Cart };
