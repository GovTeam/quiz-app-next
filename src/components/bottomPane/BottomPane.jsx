import React from "react";
import styles from "./BottomPane.module.css";

function BottomPane() {
  return (
    <div className={styles.container}>
      <button className={styles.prevBtn}>Previous Question</button>
      <button className={styles.nextBtn}>Next Question</button>
    </div>
  );
}

export default BottomPane;
