import React, {useState, useEffect} from "react";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setAnswer } from '@/Redux/features/ansSlice';

function Match(props) {
  const { question } = props;
  const { answer } = props;
  return (
    <div>
      <center>
        <div className={styles.qno}>Ques no:</div>
        <div className={styles.head2}>{question.question}</div>
        <div className={styles.instru} >Please enter the correct option in the blank provided.</div>
        <form >
        <div className={styles.match1}>
          <div className={styles.matchCol1}>
            {question.options.left.map((option, index) => {
              return (
                <div key={index} className={styles.inpCol}>
                  <p key={index} className={styles.col2t}>
                    {option}
                  </p>
                  <input type="text" disabled value={answer[index]} className={styles.colInput} />
                </div>
              );
            })}
          </div>
          <div className={styles.matchCol2}>
            {question.options.right.map((option, index) => {
              return (
                <p key={index} className={styles.col3t}>
                  {option}
                </p>
              );
            })}
          </div>
        </div>
        </form>
      </center>
    </div>
  );
}
export default Match;
