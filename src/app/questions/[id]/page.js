'use client'
import React, { useState } from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "@/Redux/hooks";
import { increment, decrement} from "@/Redux/features/currSlice";   


function page({params}) {
  const [questionNumber,setQuestionNumber]=useState(0);
  const  [score, setScore] = useState(0);
  const store = useAppStore()
  const dispatch = useAppDispatch();
    const allQuestions = useAppSelector(state => state.questions.allQuestions);
    let question = allQuestions[questionNumber];
    console.log(question);
    // Handle the error scenario when the params.id is not a number or out of limit
  return <div>
    Question {params.id}
    </div>;
}

export default page;
