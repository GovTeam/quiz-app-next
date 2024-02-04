'use client'
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "@/Redux/hooks";
import {setQuestion} from "@/Redux/features/currSlice";  
import Sidepane from "@/components/CorrectSP/Sidepane";
import styles from "../page.module.css";
import BottomPane from "@/components/CorrectBP/BottomPane";
import Select from '@/components/CQue/Select';
import Match from '@/components/CQue/Match';
import FillBlanks from "@/components/CQue/FillBlanks";


function page({params}) {
  const store = useAppStore()
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setQuestion(params.id));
  }, [])
    const allQuestions = useAppSelector(state => state.questions.allQuestions);
    const answer_key = useAppSelector((state) => state.answers.answerKey);
    let question = allQuestions[params.id];
    let answer = answer_key[params.id].answer;
    const handlePrev = (e) => {
      if(params.id == 0) e.preventDefault();
      console.log('prev');
    }
    const handleNext = () =>{
    }
  return(
    <div className={styles.container}>
    <Sidepane curr={params.id} />
    <BottomPane curr={Number(params.id)} next={handleNext} prev={handlePrev} />
    <div className={styles.cont2}>
      <div className={styles.head1}>Daily Quiz</div>

      {question.type === "select" && <Select question={question} answer = {answer} />}
      {question.type === "match" && <Match question={question} answer={answer} />}
      {question.type === "fill" && <FillBlanks question={question} answer = {answer} />}

    </div>
  </div>
  );
}

export default page;
