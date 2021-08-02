import React, { useState } from "react";
import { searchImdbSeries } from "../utils/api";

import SearchBar from "./SearchBar";
import SeriesBodyRenderList from "./SeriesBodyRenderList";
import Loading from "./Loading"

function Series() {
  const [search, setSearch] = useState(null);
  const [series, setSeries] = useState([]);

  const onChangeToolbarHandler = (searchQuery) => {
    setSearch(searchQuery);
  };

  const onClickToolbarHandler = (e) => {
    e.preventDefault();
    searchImdbSeries(search).then((response) => setSeries(response));
  };

  return (
    <div className="app">
      <div className="search-bar">
        <SearchBar
          onChangeHandler={onChangeToolbarHandler}
          onClickToolbarHandler={onClickToolbarHandler}
        ></SearchBar>
      </div>
      <div className="series">
        <SeriesBodyRenderList series={series}></SeriesBodyRenderList>
      </div>
    </div>
  );
}

export default Series;
