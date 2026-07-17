import { Link, useNavigate } from "react-router-dom";


function BookCard({
  id,
  title,
  author,
  price,
  oldPrice,
  discount,
  rating,
  image,
  addToCart,
  addToWishlist,
  description,
}) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    console.log("User:", user);

    if (!user) {
      navigate("/login");
      return;
    }

    //addToCart();
    addToCart({
      id,
      title,
      author,
      price,
      oldPrice,
      discount,
      rating,
      image,
      description,
    });
  };

  return (
    <div className="book-card">
      <img
        src={image}
        alt={title}
        className="book-image"
        onError={(e) => {
          e.target.src = "https://placehold.co/150x200";
        }}
      />

      <h3>{title}</h3>
      <p className="author">{author}</p>

      <div className="price-section">
        <span className="price">{price}</span>
        <span className="old-price">{oldPrice}</span>
        <span className="discount">{discount}</span>
        <span
          className="wishlist-heart"
          onClick={() =>
            addToWishlist({
              id,
              title,
              author,
              price,
              oldPrice,
              discount,
              rating,
              image,
            })
          }
        >
          ❤️
        </span>
      </div>
      <p className="rating">{rating}</p>

      <div className="card-buttons">
        <button onClick={handleAddToCart}>Add To Cart</button>
        <Link to={`/book/${String(id)}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export { BookCard };
