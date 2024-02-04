import React, {useState, useEffect} from "react";
import styles from './page.module.css';
import { setAnswer } from "@/Redux/features/ansSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";

function Select(props){

    const {question, answer } = props;
    let qn=question.order;
    qn++;

    return(        
    <div>
        <div className={styles.qno}>Ques no:{qn}</div>
        <div className={styles.head2}>
          {question.question}
        </div>
        <center>
          <form>
            {question.options.map((option, index) => {
              return(
                <div key={index}>
                  <input
                    className={styles.inpRadio}
                    type="radio"
                    id="age1"
                    name="age"
                    value={option}
                    checked = {answer == option}
                    disabled
                  />
                  <label className={styles.label}>{option}</label>
                  <br />
                </div>
              )
            })}
            <br />
            <br />
          </form>
        </center>
      </div>)
}
export default Select;