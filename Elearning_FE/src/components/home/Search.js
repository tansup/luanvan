import React, { useState } from "react";
import "./Search.css";
const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Tìm kiếm..."
      />
      <button onClick={handleSearch}>Tìm</button>
    </div>
  );
};

export default Search;
