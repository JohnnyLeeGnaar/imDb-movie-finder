import React from "react";
import { Link } from "react-router-dom";

const SeriesBodyRenderList = props => {
  const { series } = props;
  return (
    <div className="series-wrapper">
      {series.map(show => (
        <div
          className="shows"
          key={show.id}
          style={{
            backgroundImage: `url(${show.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <Link to={{ pathname: `/${show.id}` }}>
            <div className="shows-info">
              <h1>{show.title}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SeriesBodyRenderList;
