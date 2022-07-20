import React from "react";
import Tmdb from "./Tmdb";
const App = () => {
  React.useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
    };
    loadAll();
  }, []);

  return <div>aaaa</div>;
};

export default App;
