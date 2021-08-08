import React, { useState } from "react";
import { searchImdbSeries } from "../utils/api";

import SearchBar from "./SearchBar";
import SeriesBodyRenderList from "./SeriesBodyRenderList";
import Wrapper from "../styled-components/Wrapper.js";

function Series() {
  const [search, setSearch] = useState(null);
  const [marker, setMarker] = useState(true);
  const [series, setSeries] = useState([]);

  const onChangeToolbarHandler = (searchQuery) => {
    setSearch(searchQuery);
  };

  const onClickToolbarHandler = (e) => {
    e.preventDefault();
    searchImdbSeries(search).then((response) => {
      setSeries(response);
      setMarker(!marker);
    });
  };

  return series ? (
    <Wrapper>
      <SearchBar
        onChangeHandler={onChangeToolbarHandler}
        onClickToolbarHandler={onClickToolbarHandler}
        marker={marker}
      ></SearchBar>
      <div className="series">
        <SeriesBodyRenderList series={series}></SeriesBodyRenderList>
      </div>
    </Wrapper>
  ) : (
    <h1>API call limit of 100 requests has been reached for today...</h1>
  );
}

export default Series;
