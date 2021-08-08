import React from "react";

import imDbIcon from "../assets/icons/4373222_imdb_logo_logos_icon.png";
import filmAfIcon from "../assets/icons/filmAf.png";
import metacriticIcon from "../assets/icons/metacritic.png";
import rottentomatoesIcon from "../assets/icons/rotten-tomatoes-rating-icons-1.png";

const ShowRatings = (props) => {
  const { ratings } = props;

  return (
    <div className="ratings-container">
      <span className="ratings-span">
        <img className="icons" src={imDbIcon} alt="imdb-icon"></img>
        {ratings.imDb}/10{" "}
      </span>

      <span className="ratings-span">
        <img className="icons" src={filmAfIcon} alt="imdb-icon"></img>
        {ratings.metacritic}/100{" "}
      </span>

      <span className="ratings-span">
        <img className="icons" src={metacriticIcon} alt="imdb-icon"></img>
        {ratings.rottenTomatoes}/100{" "}
      </span>

      <span className="ratings-span">
        <img className="icons" src={rottentomatoesIcon} alt="imdb-icon"></img>
        {ratings.filmAffinity}/10{" "}
      </span>
    </div>
  );
};

export default ShowRatings;
