import React from "react";
import "./FeatureMovie.css";

const FeatureMovie = ({ item }) => {
  const {
    original_name,
    backdrop_path,
    vote_average,
    number_of_seasons,
    overview,
    id,
    first_air_date,
    genres,
  } = item;

  let firstDate = new Date(first_air_date);
  let genresList = [];
  for (let i in genres) {
    genresList.push(genres[i].name);
  }
  let description = overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

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
          <div className="featured--year">{firstDate.getFullYear()}</div>
          <div className="featured--seasons">
            {number_of_seasons === 1
              ? number_of_seasons + " temporada"
              : number_of_seasons + " temporadas"}
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a href={`/watch/${id}`} className="featured--watchbuttons">
              ► Assistir
            </a>
            <a href={`/list/add/${id}`} className="featured--myListButtons">
              + Minha Lista
            </a>
          </div>

          <div className="featured--genres">
            Gêneros: <strong>{genresList.join(", ")}</strong>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMovie;
