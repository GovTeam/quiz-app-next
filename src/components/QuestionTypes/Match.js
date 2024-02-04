import React, {useState, useEffect} from "react";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setAnswer } from '@/Redux/features/ansSlice';

function Match(props) {
  const { question } = props;
  let qn=question.order;
  qn++;
  const dispatch  = useAppDispatch();
  const all_ans = useAppSelector((state) => state.answers.answers);
  const [answers, setAnswers] = useState(Array(question.options.length).fill(''));
    useEffect(() => {
        console.log("Inside use effect of Match the paris")
        console.log(all_ans[question.order])
        if(all_ans[question.order].answered){
            console.log("This question is already submitted")
            setSubmitted(true);
            setAnswers(all_ans[question.order].value);
        }
    }, [all_ans]);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log(answers);
        dispatch(setAnswer({index: question.order, value: answers}))
    }
    const handleChange = (e, index) => {
        const newAnswers = [...answers];
        newAnswers[index] = e.target.value;
        setAnswers(newAnswers);
    }
  return (
    <div>
      <center>
        <div className={styles.qno}>Ques no:{qn}</div>
        <div className={styles.head2}>{question.question}</div>
        <div className={styles.instru} >Please enter the correct option in the blank provided.</div>
        <form onSubmit={handleSubmit}>
        <div className={styles.match1}>
          <div className={styles.matchCol1}>
            {question.options.left.map((option, index) => {
              return (
                <div key={index} className={styles.inpCol}>
                  <p key={index} className={styles.col2t}>
                    {option}
                  </p>
                  <input type="text" onChange={(e)=>{handleChange(e, index)}} value={answers[index]} maxLength={1} className={styles.colInput} />
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
        <div className='flex flex-row justify-center'>
                    <input className={styles.saveBtn}  type="submit" value="Submit" />
        </div>
        </form>
      </center>
    </div>
  );
}
export default Match;
