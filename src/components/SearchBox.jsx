import { useState } from "react";

function SearchBox({ search, setSearch, suggestions = [] }) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <section className="search-section">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search books..."
          className="search-box"
          value={search}
          onFocus={() => setShowSuggestions(true)}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setShowSuggestions(false);
            }
          }}
        />

        {showSuggestions && search.trim() !== "" && suggestions.length > 0 && (
          <div className="suggestions-box">
            {suggestions.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="suggestion-item"
                onMouseDown={() => {
                  setSearch(item.title);
                  setShowSuggestions(false);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="suggestion-image"
                />

                <div>
                  <p>{item.title}</p>
                  <small>{item.author}</small>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export { SearchBox };
