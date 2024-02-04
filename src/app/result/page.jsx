"use client";
import React, { useEffect, useState } from "react";
import trophy from "@assets/Results/gymklogo.png";
import Image from "next/image";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/Redux/hooks";
import Link from 'next/link';

function page() {
  const { push } = useRouter();
  const matchArrays = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  };
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);
  const questions = useAppSelector((state) => state.questions.allQuestions);
  const answers = useAppSelector((state) => state.answers.answers);
  const answerKey = useAppSelector((state) => state.answers.answerKey);
  const status = useAppSelector((state) => state.status.currentStatus);
  const verifyAnswers = () => {
    console.log("Verifying answers");
    let attempted = 0,
      correct = 0;
    for (let i = 0; i < questions.length; i++) {
      if (!answers[i].answered) continue;
      attempted++;
      if (questions[i].type == "select") {
        if (answers[i].value == answerKey[i].answer) correct++;
      } else {
        console.log("Mathing arrays");
        console.log("arr1 = ", answers[i].value);
        console.log("arr2 = ", answerKey[i].answer);
        if (matchArrays(answers[i].value, answerKey[i].answer)) correct++;
      }
    }
    return { attempted, correct };
  };
  useEffect(() => {
    if(status === "NOT_STARTED")
    push("/questions")
    else if(status === "ONGOING")
    push("/questions/0")
    console.log("useEffect");
    console.log("questions", questions);
    console.log("answers", answers);
    console.log("answerKey", answerKey);
    console.log("status", status);
    let obj = verifyAnswers();
    console.log(obj);
    setAttempted(obj.attempted);
    setCorrect(obj.correct);
  }, []);
  return (
    <div className="container py-6 px-10">
      <h1 className="text-4xl text-center">Results</h1>
      {/* <h1 className="text-2xl py-7">Here's a summary of the quiz you attempted </h1> */}
      <div className="flex flex-row gap-4 justify-center py-10">
        <Card heading="9" description="Total Questions" />
        <Card heading={attempted} description="Attempted" />
        <Card heading={correct} description="Correct" />
      </div>
      <div className='flex flex-row justify-center py-7'> <Link href="/result/correct_answers/0"> <button className={styles.saveBtn}> View correct answers </button></Link> </div>
      <div className='flex flex-row justify-center py-7'> <Link href="/"> <button className={styles.saveBtn}> Back to Home </button> </Link></div>
    </div>
  );
}

export default page;
