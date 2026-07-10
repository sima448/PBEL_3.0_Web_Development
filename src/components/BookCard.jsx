function BookCard({ title, author, price, rating }) {
    return (
      <div className="book-card">
        <div className="book-image">
            📚
        </div>
        <h3>{title}</h3>
        <p className="author">{author}</p>
        <p>{price}</p>
        <p className="rating">{rating}</p>

        <div className="card-buttons">
          <button>Add To Cart</button>
          <button>View Details</button>
        </div>
      </div>
    );
}

export { BookCard };