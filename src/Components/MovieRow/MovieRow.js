import React from "react";
import styles from "./MovieRow.module.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MovieRow = ({ title, items }) => {
  const [scroollX, setScroollX] = React.useState(0);

  function handleLeft() {
    let x = scroollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScroollX(x);
  }

  function handleRigth() {
    let x = scroollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScroollX(x);
  }

  return (
    <section className={styles.movieRow}>
      <h2>{title}</h2>
      <div className={styles.left} onClick={handleLeft}>
        <NavigateBeforeIcon style={{ fontSize: "50" }} />
      </div>
      <div className={styles.rigth} onClick={handleRigth}>
        <NavigateNextIcon style={{ fontSize: "50" }} />
      </div>
      <div className={styles.movieRowListArea}>
        <div
          className={styles.movieRowList}
          style={{
            marginLeft: scroollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className={styles.movieRowItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MovieRow;
