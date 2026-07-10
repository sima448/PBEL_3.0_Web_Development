function SearchBox({ search, setSearch }){
    return (
      <section className="search-section">
        <input
          type="text"
          placeholder="Search books..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
    );
}

export { SearchBox };