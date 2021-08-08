import React from "react";
import SecondHeadingText from "../styled-components/SecondHeadingText.js";

const ListOfMainActors = (props) => {
  const { actorList } = props;
  const Headingtheme = { inputColor: "#1f1f1f" };

  function filterById(actor, i) {
    if (i < 8) {
      return actor;
    }
  }

  return (
    <div className="flex-info-wrapper">
      <SecondHeadingText theme={Headingtheme}>Top cast: </SecondHeadingText>
      {actorList
        .filter((actor, i) => filterById(actor, i))
        .map((actor) => (
          <div className="info-container" key={actor.id}>
            <div className="flex-wrapper cast">
              <div
                className="mainStar-image"
                style={{
                  backgroundImage: `url(${actor.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
              />
              <span className="mainStar-infoSpan">
                <p>{actor.name}</p>
                <p>as {actor.asCharacter}</p>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListOfMainActors;
