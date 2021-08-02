import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ListOfMainActors from "./ListOfMainActors";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";
import imDbIcon from "../assets/icons/4373222_imdb_logo_logos_icon.png";
import filmAfIcon from "../assets/icons/filmAf.png";
import metacriticIcon from "../assets/icons/metacritic.png";
import rottentomatoesIcon from "../assets/icons/rotten-tomatoes-rating-icons-1.png";

import { searchShow } from "../utils/api";
const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    searchShow(id).then(response => setShow(response));
  }, [id]);
  return show ? (
    <>
      <nav className="navbar">
        <span className="back-button-span">
          <Link to="/">
            <FaArrowLeft size={30} color="white" />
          </Link>{" "}
        </span>
      </nav>
      <div className="flex-wrapper title-rating">
        <h1 className="show-heading heading-one">{show.title}</h1>
        <div className="ratings-container">
          <span className="labelike-span">
            <img className="icons" src={imDbIcon} alt="imdb-icon"></img>
            {show.ratings.imDb}/10{" "}
          </span>

          <span className="labelike-span">
            <img className="icons" src={filmAfIcon} alt="imdb-icon"></img>
            {show.ratings.metacritic}/100{" "}
          </span>

          <span className="labelike-span">
            <img className="icons" src={metacriticIcon} alt="imdb-icon"></img>
            {show.ratings.rottenTomatoes}/100{" "}
          </span>

          <span className="labelike-span">
            <img
              className="icons"
              src={rottentomatoesIcon}
              alt="imdb-icon"
            ></img>
            {show.ratings.filmAffinity}/10{" "}
          </span>
        </div>
      </div>

      <div className="flex-wrapper show-type">
        <h3 className="show-heading">
          {show.type} • {show.year} - {show.tvSeriesInfo.yearEnd} •{" "}
          {show.contentRating} • {show.runtimeMins} minutes
        </h3>
      </div>
      <div className="content-wrapper">
        <ListOfMainActors
          starList={show.starList}
          actorList={show.actorList}
        ></ListOfMainActors>

        <div className="main-image-container">
          <img
            className="main-list-image"
            src={show.image}
            alt="poster of the TV show"
          ></img>
          <div className="show-genres-container">
            {show.genres.split(",").map(genre => (
              <div className="show-genre">{genre}</div>
            ))}
          </div>
          <div>
            <span className="main-description-span">{show.tagline}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="show-plot">
          <h2 className="show-heading plot-heading">Storyline</h2>
          <p className="plot-paragraph">{show.plot}</p>
        </div>
      </div>

      <footer>{`© Made by Marko Robert Vučković`}</footer>
    </>
  ) : (
    <Loading />
  );
};

export default Show;
