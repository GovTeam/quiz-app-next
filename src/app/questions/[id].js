"use client"
import React, { useState } from "react";
import { useRouter } from 'next/router'

function page() {
  const router = useRouter();
  const [questionNumber,setQuestionNumber]=useState(0);
  const  [score, setScore] = useState(0);
  return <div>{router.query.slug}</div>;
}

export default page;
