import React, { useState, useEffect } from "react";
import { searchShow } from "../utils/api";

import Loading from "./Loading";
import ShowRatings from "./ShowRatings";
import ListOfMainActors from "./ListOfMainActors";

import Wrapper from "../styled-components/Wrapper.js";
import Title from "../styled-components/Title.js";
import SecondHeadingText from "../styled-components/SecondHeadingText.js";

import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const Titletheme = {
    textAlign: "center",
    inputColor: "whitesmoke",
    fontSize: "3em",
  };
  const Headingtheme = { inputColor: "whitesmoke", fontSize: "2rem" };

  useEffect(() => {
    searchShow(id).then((response) => setShow(response));
  }, [id]);

  return show ? (
    <Wrapper>
      <nav className="navbar">
        <span className="back-button-span">
          <Link to="/">
            <FaArrowLeft size={30} color="white" />
          </Link>{" "}
        </span>
      </nav>

      <div className="flex-wrapper title-rating">
        <Title theme={Titletheme}>{show.title}</Title>
        <ShowRatings ratings={show.ratings} />
      </div>
      <div className="flex-wrapper show-type">
        <h3
          className="show-heading"
          style={{ paddingTop: "1%", color: "whitesmoke" }}
        >
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
            {show.genres.split(",").map((genre, index) => (
              <div key={index} className="show-genre">
                {genre}
              </div>
            ))}
          </div>
          <div>
            <span className="main-description-span">{show.tagline}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="show-plot">
          <SecondHeadingText theme={Headingtheme}>Storyline</SecondHeadingText>
          <p className="plot-paragraph">{show.plot}</p>
        </div>
      </div>

      <footer>{`© Made by Marko Robert Vučković`}</footer>
    </Wrapper>
  ) : (
    <Loading />
  );
};

export default Show;
