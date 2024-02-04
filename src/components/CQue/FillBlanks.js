import styles from './page.module.css';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';

export default function FillBlanks(props) {
  const { question } = props;
  let qn=question.order;
  qn++;
  const { answer } = props;
    return (
    <div className="container px-10" >
        <div className={styles.qno}>Ques no:{qn}</div>
        <h1 className={styles.head2 + " text-normal lg:text-xl"}>{question.question}</h1>
        <form>
        {question.options.map((option, index) => (
            <div key={index} className="grid grid-cols-2 gap-1 lg:gap-2 py-1 lg:py-2">
                <div className='border text-center border-gray-300 rounded-md p-1 w-full bg-white'>{option}</div>
                <input disabled value={answer[index]} type="text" className="border border-gray-300 rounded-md p-1 w-full" />
                </div>
                ))}
        </form>
            </div>
  )
}
