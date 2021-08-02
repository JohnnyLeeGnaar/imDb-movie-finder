import React from "react";
import { Link } from "react-router-dom";

const SeriesBodyRenderList = (props) => {
  const { series } = props;
  return (
    <div className="series-wrapper">
      {series.map((show) => (
        <div className="shows" key={show.id} value="test">
          <Link to={{ pathname: `/${show.id}` }}>
            <h1>{show.title}</h1>
            <hr />
            <img
              className="series-list-image"
              value={show.id}
              src={show.image}
              alt="Poster of the series"
            ></img>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SeriesBodyRenderList;
