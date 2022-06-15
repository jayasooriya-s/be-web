import React from "react";
import SmallBlackButton from "../SmallBlackButton";
import styles from "./ContainerWithButton.module.css";

function ContainerWithButton() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat,
        architecto perspiciatis facere quo nisi labore deleniti fugit harum quae
      </div>
      <SmallBlackButton label="GET IN TOUCH"></SmallBlackButton>
    </div>
  );
}

export default ContainerWithButton;
