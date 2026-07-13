function Categories({ setCategory }) {
    return (
      <section className="categories">
        <h2>Categories</h2>

        <div className="category-list">
          <button onClick={() => setCategory("All")}>
            All
            </button>

          <button onClick={() => setCategory("Programming")}>
            Programming
          </button>

          <button onClick={() => setCategory("Fiction")}>
            Fiction
          </button>

          <button onClick={() => setCategory("Science")}>
            Science
          </button>

          <button onClick={() => setCategory("History")}>
            History
          </button>
        </div>
      </section>
    );
}
export { Categories };