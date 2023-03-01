import React from "react";

function Search({ filteredPlantList, setFilteredPlantList }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={filteredPlantList}
        onChange={(e) => setFilteredPlantList(e.target.value)}
      />
    </div>
  );
}

export default Search;
