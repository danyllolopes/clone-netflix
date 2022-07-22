import React from "react";
import styles from "./Header.module.css";
import logo from "../../Assets/logo.png";
import icone from "../../Assets/icone.png";
const Header = ({ blackHeader }) => {
  return (
    <header
      className={`${styles.header} ${blackHeader ? styles.headerMove : ""}`}
    >
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.icone}>
        <img src={icone} alt="Icone" />
      </div>
    </header>
  );
};

export default Header;
