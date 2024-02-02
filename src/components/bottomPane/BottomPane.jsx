import React from "react";
import styles from "./BottomPane.module.css";
import Link from 'next/link';

function BottomPane(props) {
  return (
    <div className={styles.container}>
      <button onClick={props.prev} disabled={props.curr==0} className={styles.prevBtn}><Link href={`/questions/${props.curr - 1}`}>Previous</Link></button>
      <button onClick={props.next} className={styles.nextBtn}><Link href={`/questions/${props.curr + 1}`}>Next</Link></button>
    </div>
  );
}

export default BottomPane;
