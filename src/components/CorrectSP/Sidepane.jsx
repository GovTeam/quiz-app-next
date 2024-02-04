import React from "react";
import styles from "./Sidepane.module.css";
import { useAppSelector } from "@/Redux/hooks";
import Link from "next/link";

function Sidepane(props) {
  const questions = useAppSelector((state) => state.questions.allQuestions);
  const answers = useAppSelector((state) => state.answers.answers);
  return (
    <div className={styles.container}>
      <div className={styles.head1}>Browse Your questions</div>

      <div className="grid grid-cols-5 gap-4">
        {questions.map((question, index) => (
          <Link key={index} href={`/result/correct_answers/${index}`}>
          <button className={`${styles.btn1} ${(answers[index].answered? styles.answered:"")} ${(index==props.curr? styles.current:"")}`}>
            {index + 1}
          </button>
          </Link>
        ))}
      </div>


    </div>
  );
}

export default Sidepane;
