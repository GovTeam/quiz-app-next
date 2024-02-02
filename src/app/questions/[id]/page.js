"use client"
import React, { useState } from "react";

function page({params}) {
  const [questionNumber,setQuestionNumber]=useState(0);
  const  [score, setScore] = useState(0);
    // Handle the error scenario when the params.id is not a number or out of limit
  return <div>Question {params.id}</div>;
}

export default page;
