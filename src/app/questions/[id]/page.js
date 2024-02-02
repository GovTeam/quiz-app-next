"use client"
import React, { useState } from "react";

function page({params}) {
  const [questionNumber,setQuestionNumber]=useState(0);
  const  [score, setScore] = useState(0);
//   if(typeof(params.id) !== 'number')
//   return { notFound: true };
  return <div>Question {params.id}</div>;
}

export default page;
