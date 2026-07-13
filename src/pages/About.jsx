function About() {
  return (
    <div className="about-page">
      <h1>📚 About BookVerse</h1>

      <p className="tagline">Learn • Explore • Grow</p>

      <p className="about-intro">
        Welcome to BookVerse, your one-stop destination for discovering and
        exploring quality books. Whether you're a student, programmer, or
        passionate reader, BookVerse helps you find the perfect book for your
        learning journey.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>📖 Wide Collection</h3>
          <p>
            Explore Programming, Science, Technology and many other categories
            of books.
          </p>
        </div>

        <div className="about-card">
          <h3>🔍 Easy Search</h3>
          <p>Quickly search books and filter them by categories.</p>
        </div>

        <div className="about-card">
          <h3>🛒 Smart Shopping</h3>
          <p>Add books to your cart and manage your purchases easily.</p>
        </div>

        <div className="about-card">
          <h3>⭐ Detailed Information</h3>
          <p>View book details, ratings, prices, discounts and more.</p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-box">
          <h2>500+</h2>
          <p>Books</p>
        </div>

        <div className="stat-box">
          <h2>1000+</h2>
          <p>Readers</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Authors</p>
        </div>

        <div className="stat-box">
          <h2>4.8★</h2>
          <p>Rating</p>
        </div>
      </div>

      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our goal is to make book discovery simple, enjoyable and accessible
          for everyone through a modern online bookstore experience.
        </p>
      </div>
      <div className="developer-section">
        <h2>👩‍💻 Developed By</h2>
        <p className="developer-name">Sima Kumari</p>
        <p>B.Tech Information Technology</p>
        <p>RKGIT, Ghaziabad</p>
      </div>
    </div>
  );
}

export { About };
