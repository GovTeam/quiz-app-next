import React from "react";
import styles from './page.module.css';
function Match(){
    return (
        <div>
        <center>
          <div className={styles.qno}>Ques no:</div>
          <div className={styles.head2}>Match the pairs</div>
          <div className={styles.match1}>
            <div className={styles.matchCol1}>
              {/* <p className={styles.col1t}>Column A</p> */}
              <p className={styles.col2t}>A. Bird</p>
              <p className={styles.col2t}>B. Lion</p>
              <p className={styles.col2t}>C. Human</p>
              <p className={styles.col2t}>D. Monkey</p>
              <p className={styles.col2t}>E. Fish</p>
            </div>
            <div className={styles.matchCol2}>
              {/* <p className={styles.col1t}>Column B</p> */}
              <p className={styles.col2t}>1. Water</p>
              <p className={styles.col2t}>2. Nest</p>
              <p className={styles.col2t}>3. Trees</p>
              <p className={styles.col2t}>4. House</p>
              <p className={styles.col2t}>5. Den</p>
            </div>
          </div>
        </center>
      </div>
    )
}
export default Match;