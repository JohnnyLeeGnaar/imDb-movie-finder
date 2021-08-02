import React from "react";

import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
  const { onClickToolbarHandler, onChangeHandler } = props;

  return (
    <div className="search-wrapper">
      <form className="search-input-form">
        <input
          className="search-series-input"
          onChange={(e) => onChangeHandler(e.target.value)}
          type="text"
          placeholder="Find your favourite TV series "
        ></input>
        <button
          onClick={(e) => onClickToolbarHandler(e)}
          className="search-button"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
