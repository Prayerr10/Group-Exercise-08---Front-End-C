import React from "react";
import SearchBar from "./SearchBar";
import Evolution from "./Evolution";
const Search = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Search Section</h2>
      <SearchBar />
      <Evolution />
    </div>
  );
};

export default Search;
