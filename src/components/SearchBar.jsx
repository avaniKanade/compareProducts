import React from "react";

const SearchBar = ({ query, onChange }) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by name or brand..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
