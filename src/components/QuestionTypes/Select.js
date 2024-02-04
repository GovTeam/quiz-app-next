import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { setAnswer } from "@/Redux/features/ansSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useRouter } from "next/navigation";

function Select(props) {
  const { question, questionId } = props;
  const router = useRouter();
  const answers = useAppSelector((state) => state.answers.answers);
  const [selected, setSelected] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAnswer({ index: question.order, value: selected }));
    router.push(`/questions/${Number(questionId) + 1}`);
  };
  useEffect(() => {
    if (answers[question.order].answered) {
      setSelected(answers[question.order].value);
    }
  }, [answers]);

  return (
    <div>
      <div className={styles.qno}>Ques no: {' '}{Number(questionId) + 1} </div>
      <div className={styles.head2}>{question.question}</div>
      <center>
        <form onSubmit={handleSubmit}>
          {question.options.map((option, index) => {
            return (
              <div key={index}>
                <input
                  className={styles.inpRadio}
                  type="radio"
                  id="age1"
                  name="age"
                  value={option}
                  checked={selected == option}
                  onChange={(e) => setSelected(e.target.value)}
                />
                <label className={styles.label}>{option}</label>
                <br />
              </div>
            );
          })}
          <br />
          <br />
          <input className={styles.saveBtn} type="submit" value="Submit & Next" />
        </form>
      </center>
    </div>
  );
}
export default Select;
