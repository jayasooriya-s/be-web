import React from "react";
import styles from "./SmallBlackButton.module.css";
interface props {
  label: string;
}
function SmallBlackButton(props: props) {
  return (
    <div>
      <button className={styles.button}>{props.label}</button>
    </div>
  );
}

export default SmallBlackButton;
