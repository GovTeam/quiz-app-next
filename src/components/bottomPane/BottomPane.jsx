import React from "react";
import styles from "./BottomPane.module.css";
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from "@/Redux/hooks";
import {endTest} from "@/Redux/features/statusSlice";

function BottomPane(props) {
  const dispatch = useAppDispatch();

  const handleEndTest = () => {
    dispatch(endTest());
  };
  const total_que = useAppSelector((state) => state.questions.totalQuestions);
  let prev_num = props.curr - 1;
  let next_num = props.curr + 1;
  if(prev_num < 0) {
    prev_num = 0;
  }
  if(next_num >= total_que ) {
    next_num = total_que-1;
  }
  return (
    <div className={styles.container}>
      <button onClick={props.prev} disabled={props.curr == 0} className={styles.prevBtn}><Link href={`/questions/${prev_num}`}>Previous</Link></button>
      { ((props.curr == total_que-1) ? (<button onClick={handleEndTest} className={styles.nextBtn}><Link href={"/result"}>Submit</Link></button>):(<button onClick={props.next} className={styles.nextBtn}><Link href={`/questions/${next_num}`}>Next</Link></button>))}
    </div>
  );
}

export default BottomPane;
