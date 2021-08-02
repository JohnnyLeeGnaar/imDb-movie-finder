import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ListOfMainActors from "./ListOfMainActors";
import { useParams } from "react-router";
import {Link} from "react-router-dom"

import { FaArrowCircleLeft } from "react-icons/fa";
import imDbIcon from "../assets/icons/4373222_imdb_logo_logos_icon.png";
import filmAfIcon from "../assets/icons/filmAf.png";
import metacriticIcon from "../assets/icons/metacritic.png";
import rottentomatoesIcon from "../assets/icons/rotten-tomatoes-rating-icons-1.png";

import { searchShow } from "../utils/api";
const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    searchShow(id).then((response) => setShow(response));
  }, [id]);
  return show ? (
    <>
      <div className="flex-wrapper title-rating">
        <h1 className="show-heading heading-one">
          {show.title}</h1>
        <div className="ratings-container">
          <span className="labelike-span">
            <img className="icons" src={imDbIcon} alt="imdb-icon"></img>
            {show.ratings.imDb}/10
            <br />
          </span>

          <span className="labelike-span">
            <img className="icons" src={filmAfIcon} alt="imdb-icon"></img>
            {show.ratings.metacritic}/100
            <br />
          </span>

          <span className="labelike-span">
            <img className="icons" src={metacriticIcon} alt="imdb-icon"></img>
            {show.ratings.rottenTomatoes}/100
            <br />
          </span>

          <span className="labelike-span">
            <img
              className="icons"
              src={rottentomatoesIcon}
              alt="imdb-icon"
            ></img>
            {show.ratings.filmAffinity}/10
            <br />
          </span>
        </div>
      </div>

      <div className="flex-wrapper show-type">
        <h3 className="show-heading">
          {show.type} • {show.year} - {show.tvSeriesInfo.yearEnd} •{" "}
          {show.contentRating} • {show.runtimeMins} minutes
        </h3>
      </div>
      <div className="flex-wrapper cast">
        <ListOfMainActors
          starList={show.starList}
          actorList={show.actorList}
        ></ListOfMainActors>

        <div className="series-image-container">
          <img
            className="series-list-image"
            src={show.image}
            alt="poster of the TV show"
          ></img>
          <div>
            <span className="tagline-span">{show.genres}</span>
          </div>
          <div>
            <span className="series-description-span">{show.tagline}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="show-plot">
          <h2 className="show-heading plot-heading">Storyline</h2>
          <p className="plot-paragraph">{show.plot}</p>
        </div>
      </div>
      
      <footer>
      <nav><span className="back-button-span"><Link to="/"><FaArrowCircleLeft size={40}/></Link> </span></nav>
      <p>{`© Made by Marko Robert Vučković`}</p>
      </footer>
    </>
  ) : (
    <Loading />
  );
};

export default Show;
