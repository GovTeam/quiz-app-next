import React from "react";
import styles from "./Sidepane.module.css";

function Sidepane() {
  return (
    <div className={styles.container}>
      <div className={styles.head1}>Browse Your questions</div>

      {/* smallest number */}
      <div className={styles.head2}>Find the Smallest Number</div>
      <div className={styles.box1}>
        <button className={styles.btn1}>1</button>
        <button className={styles.btn1}>2</button>
        <button className={styles.btn1}>3</button>
        <button className={styles.btn1}>4</button>
        <button className={styles.btn1}>5</button>
      </div>

      {/* Match the column */}
      <div className={styles.head2}>Match the column</div>
      <div className={styles.box1}>
        <button className={styles.btn1}>1</button>
        <button className={styles.btn1}>2</button>
        <button className={styles.btn1}>3</button>
        <button className={styles.btn1}>4</button>
        <button className={styles.btn1}>5</button>
      </div>

      {/* Fill in the blanks */}
      <div className={styles.head2}>Fill in the blanks</div>
      <div className={styles.box1}>
        <button className={styles.btn1}>1</button>
        <button className={styles.btn1}>2</button>
        <button className={styles.btn1}>3</button>
        <button className={styles.btn1}>4</button>
        <button className={styles.btn1}>5</button>
      </div>
    </div>
  );
}

export default Sidepane;
