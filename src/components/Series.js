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

  return series ? (
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
  ) : <h1>API call limit of 100 requests has been reached for today...</h1>
}

export default Series;
