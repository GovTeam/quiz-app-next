"use client";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "@/Redux/hooks";
import { increment, decrement, setQuestion } from "@/Redux/features/currSlice";
import { setAnswer } from "@/Redux/features/ansSlice";
import Sidepane from "@/components/sidepane/Sidepane";
import styles from "../page.module.css";
import BottomPane from "@/components/bottomPane/BottomPane";
import Select from "@/components/QuestionTypes/Select";
import Match from "@/components/QuestionTypes/Match";
import FillBlanks from "@/components/QuestionTypes/FillBlanks";

function page({ params }) {
  const store = useAppStore();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setQuestion(params.id));
  }, []);
  const handleSubmit = (e) => {};
  const allQuestions = useAppSelector((state) => state.questions.allQuestions);
  let question = allQuestions[params.id];
  const handlePrev = (e) => {
    if (params.id == 0) e.preventDefault();
    console.log("prev");
  };
  const handleNext = () => {};

  // Handle the error scenario when the params.id is not a number or out of limit
  return (
    <div className={styles.container}>
      <Sidepane curr={params.id} />
      <BottomPane
        curr={Number(params.id)}
        next={handleNext}
        prev={handlePrev}
      />
      <div className={styles.cont2}>
        <div className={styles.head1}>Daily Quiz</div>

        {question.type === "select" && (
          <Select question={question} questionId={params.id} />
        )}
        {question.type === "match" && (
          <Match question={question} questionId={params.id} />
        )}
        {question.type === "fill" && (
          <FillBlanks question={question} questionId={params.id} />
        )}
      </div>
    </div>
  );
}

export default page;
