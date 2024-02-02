import React from "react";
import styles from './page.module.css';
function Match(props){
    const {question} = props;
    return (
        <div>
        <center>
          <div className={styles.qno}>Ques no:</div>
          <div className={styles.head2}>{question.question}</div>
          <div className={styles.match1}>
            <div className={styles.matchCol1}>
              {question.options.left.map((option, index) => {
                return(
                  <p key={index} className={styles.col2t}>{option}</p>
                )
              })}
            </div>
            <div className={styles.matchCol2}>
            {question.options.right.map((option, index) => {
                return(
                  <p key={index} className={styles.col2t}>{option}</p>
                )
              })}
            </div>
          </div>
        </center>
      </div>
    )
}
export default Match;