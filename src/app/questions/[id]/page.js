'use client'
import React, { useState } from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "@/Redux/hooks";
import { increment, decrement} from "@/Redux/features/currSlice";  
import { setAnswer } from "@/Redux/features/ansSlice";


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
    <button onClick={()=> dispatch(setAnswer({index:questionNumber, value: 'Ans'}))}> Set Answer </button>
    </div>;
}

export default page;
