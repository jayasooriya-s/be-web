import React from "react";
import styles from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="search" className={styles.search_bar}></input>
      <div className={styles.search_icon}>
        <AiOutlineSearch />
      </div>
    </div>
  );
}

export default SearchBar;
