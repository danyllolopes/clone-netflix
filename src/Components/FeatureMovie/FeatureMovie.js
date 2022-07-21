import React from "react";
import "./FeatureMovie.css";

const FeatureMovie = ({ item }) => {
  console.log(item);
  const {
    original_name,
    backdrop_path,
    vote_average,
    number_of_seasons,
    overview,
  } = item;

  return (
    <section
      className="feature"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--name">{original_name}</div>
        <div className="featured--info">
          <div className="featured--points">{vote_average} pontos</div>
          <div className="featured--year">2999</div>
          <div className="featured--seasons">
            {number_of_seasons === 1
              ? number_of_seasons + " temporada"
              : number_of_seasons + " temporadas"}
          </div>
          <div className="featured--description">{overview}</div>
          <div className="featured--description"></div>

          <div className="featured--genres">Gêneros: </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMovie;
