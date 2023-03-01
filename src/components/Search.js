import React, { useState } from "react";

function Search({ handleFilter }) {
  const [filterInput, setFilterInput] = useState("");

  function trackFilterInput(e) {
    setFilterInput(e.target.value);
    handleFilter(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={filterInput}
        onChange={trackFilterInput}
      />
    </div>
  );
}

export default Search;
