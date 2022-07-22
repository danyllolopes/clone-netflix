import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Feito com{" "}
        <span role="img" aria-label="coração">
          ❤️
        </span>{" "}
        pela B7Web
      </p>
      <p>Direitos de imagem para Netflix</p>
      <p>Dados pegos do site Themoviedb.org</p>
    </footer>
  );
};

export default Footer;
