import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { books } from "../data/books";

function BookDetails({ addToCart, apiBooks }) {
  const { id } = useParams();
  const navigate = useNavigate();

const book =
  books.find((b) => b.id === Number(id)) || apiBooks.find((b) => b.id === id);

  const allBooks = [...books, ...apiBooks];

  const relatedBooks = allBooks
    .filter((b) => b.category === book?.category && b.id !== book?.id)
    .slice(0, 5);

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      navigate("/login");
      return;
    }

    addToCart(book);
  };

  const handleBuyNow = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      navigate("/login");
      return;
    }

    addToCart(book);
    navigate("/cart");
  };

  return (
    <>
      <p className="breadcrumb">Home / Books / {book.title}</p>

      <div className="book-title-page">
        <img src={book?.image} alt={book?.title} className="details-image" />

        <div className="details-info">
          <h1 className="book-title">{book?.title}</h1>

          <p>
            <b>Author: </b>
            {book?.author}
          </p>
          <p className="price">
            <b>Price: </b> {book?.price}
          </p>
          <p className="rating">
            <b>Rating: </b> ⭐ {book?.rating}
          </p>

          <p className="description">
            {book?.description || "No description available for this book."}
          </p>

          <div className="quantity-box">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              {" "}
              -{" "}
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}> + </button>
          </div>

          <div className="details-buttons">
            <button className="buy-btn" onClick={handleAddToCart}>
              Add To Cart
            </button>

            <button className="order-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <section className="related-books">
        <h2>You May Also Like</h2>

        <div className="related-container">
          {relatedBooks.map((item) => (
            <Link
              key={item.id}
              to={`/book/${item.id}`}
              className="related-link"
            >
              <div key={item.id} className="related-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="related-image"
                />

                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export { BookDetails };
