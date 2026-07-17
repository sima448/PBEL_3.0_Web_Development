function Categories({ setCategory, setSearch }) {
  return (
    <section className="categories">
      <h2>Categories</h2>

      <div className="category-list">
        <button
          onClick={() => {
            setSearch("");
            setCategory("All");
          }}
        >
          All
        </button>{" "}

        <button
          onClick={() => {
            setSearch("");
            setCategory("Programming");
          }}
        >
          Programming
        </button>
        <button
          onClick={() => {
            setSearch("");
            setCategory("Fiction");
          }}
        >
          Fiction
        </button>
        <button
          onClick={() => {
            setSearch("");
            setCategory("Science");
          }}
        >
          Science
        </button>
        <button
          onClick={() => {
            setSearch("");
            setCategory("History");
          }}
        >
          History
        </button>{" "}
      </div>
    </section>
  );
}
export { Categories };