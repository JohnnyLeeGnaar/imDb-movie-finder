import React from "react";
import { Link } from "react-router-dom";
import Title from "../styled-components/Title.js";

const SeriesBodyRenderList = (props) => {
  const { series } = props;
  const theme = {
    textAlign: "center",
    inputColor: "whitesmoke",
    fontSize: "3em",
  };
  return (
    <div className="flex-wrapper">
      {series.map((show) => (
        <div
          className="shows"
          key={show.id}
          style={{
            backgroundImage: `url(${show.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <Link to={{ pathname: `/${show.id}` }}>
            <div className="shows-info">
              <Title theme={theme}>{show.title}</Title>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SeriesBodyRenderList;
