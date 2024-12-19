import React, { useRef } from "react";

function SearchBar({ onSearch }) {
  const query = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.current.value.trim() !== "") {
      onSearch(query.current.value);
      query.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input type="text" placeholder="Search for recipes..." ref={query} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
