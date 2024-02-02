'use client'
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "@/Redux/hooks";
import { increment, decrement, setQuestion} from "@/Redux/features/currSlice";  
import { setAnswer } from "@/Redux/features/ansSlice";
import Sidepane from "@/components/sidepane/Sidepane";
import styles from "../page.module.css";
import BottomPane from "@/components/bottomPane/BottomPane";
import { redirect } from 'next/navigation';


function page({params}) {
  const store = useAppStore()
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setQuestion(params.id));
  }, [])
  const handleSubmit = (e) => {}
    const allQuestions = useAppSelector(state => state.questions.allQuestions);
    let question = allQuestions[params.id];
    const handlePrev = () => {
      if(params.id == 0) return;
      console.log('prev');
    }
    const handleNext = () =>{
    }

    // Handle the error scenario when the params.id is not a number or out of limit
  return(
    <div className={styles.container}>
    <Sidepane curr={params.id} />
    <BottomPane curr={Number(params.id)} next={handleNext} prev={handlePrev} />
    <div className={styles.cont2}>
      <div className={styles.head1}>Daily Quiz</div>

      {/* Type:Select */}
      {question.type === "select" && (
        <div>
          <div className={styles.qno}>Ques no:</div>
          <div className={styles.head2}>
            Select the smallest number from the given options.
          </div>
          <center>
            <form>
              <input
                className={styles.inpRadio}
                type="radio"
                id="age1"
                name="age"
                value="25"
              />
              <label className={styles.label}>A. 25</label>
              <br />
              <input
                className={styles.inpRadio}
                type="radio"
                id="age1"
                name="age"
                value="55"
              />
              <label className={styles.label}>B. 55</label>
              <br />
              <input
                className={styles.inpRadio}
                type="radio"
                id="age1"
                name="age"
                value="15"
              />
              <label className={styles.label}>C. 15</label>
              <br />
              <input
                className={styles.inpRadio}
                type="radio"
                id="age1"
                name="age"
                value="65"
              />
              <label className={styles.label}>D. 65</label>
              <br />
              <br />
              <input
                className={styles.saveBtn}
                type="submit"
                value="Submit"
              />
            </form>
          </center>
        </div>
      )}
    </div>
  </div>
  );
}

export default page;
