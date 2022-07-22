import React from "react";
import "./App.css";
import loading from "./Assets/loading.gif";
import Tmdb from "./Tmdb";
import MovieRow from "./Components/MovieRow/MovieRow";
import FeatureMovie from "./Components/FeatureMovie/FeatureMovie";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

const App = () => {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

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

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header blackHeader={blackHeader} />
      {featuredData && <FeatureMovie item={featuredData} />}
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.item} />
        ))}
      </section>
      <Footer />
      {movieList.length <= 0 && (
        <div className="loading">
          <img src={loading} alt="Carregando" />
        </div>
      )}
    </div>
  );
};

export default App;
