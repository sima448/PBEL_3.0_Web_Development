import { Link } from "react-router-dom";

function Wishlist({ wishlist, setWishlist, addToCart }) {
  const removeFromWishlist = (index) => {
    const updated = wishlist.filter((_, i) => i !== index);

    setWishlist(updated);
  };

  return (
    <div className="wishlist-page">
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No books in wishlist</h2>
      ) : (
        wishlist.map((book, index) => (
          <div key={index} className="wishlist-card">
            <img src={book.image} alt={book.title} />

            <h3>{book.title}</h3>

            <p>{book.author}</p>

            <h4>{book.price}</h4>

            <button onClick={() => addToCart(book)}>Add To Cart</button>

            <button onClick={() => removeFromWishlist(index)}>Remove</button>
          </div>
        ))
      )}

      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export { Wishlist };
