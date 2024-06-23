// Header.jsx
import React from "react";
import styles from "../styles/Header.css";
import Switch from "./Switch";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>ToDos</h1>
      <p>Keeps You Organized!</p>
      <Switch aria-label="Toggle theme" />
    </header>
  );
};

export default React.memo(Header);
