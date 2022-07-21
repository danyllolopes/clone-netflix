import React from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./Components/MovieRow/MovieRow";
import FeatureMovie from "./Components/FeatureMovie/FeatureMovie";

const App = () => {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  React.useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();

      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let random = Math.floor(
        Math.random() * (originals[0].item.results.length - 1)
      );
      let chosen = originals[0].item.results[random];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeatureMovie item={featuredData} />}
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.item} />
        ))}
      </section>
    </div>
  );
};

export default App;
