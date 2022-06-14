import React from "react";
import styles from "./SubscribeEmail.module.css";

function SubscribeEmail() {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
      <button className={styles.button} onClick={() => alert("success")}>
        LOREM IPSUM
      </button>
    </div>
  );
}

export default SubscribeEmail;
