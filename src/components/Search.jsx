import React from "react";

const Search = ({ search }) => {
  return (
    <div className="active-pink-3 active-pink-4 mb-4">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={search}
      />
    </div>
  );
};

export default Search;
