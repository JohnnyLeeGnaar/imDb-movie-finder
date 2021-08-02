import React from "react";

const ListOfMainActors = props => {
  const { actorList } = props;

  function filterById(actor, i) {
    if (i < 8) {
      return actor;
    }
  }

  return (
    <div className="flex-info-wrapper">
      <h2 className="main-star-heading">Top cast: </h2>
      {actorList
        .filter((actor, i) => filterById(actor, i))
        .map(actor => (
          <div className="info-container" key={actor.id}>
            <div className="flex-wrapper cast">
              <div
                className="mainStar-image"
                style={{
                  backgroundImage: `url(${actor.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center"
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
