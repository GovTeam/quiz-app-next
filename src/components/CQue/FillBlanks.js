import styles from './page.module.css';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';

export default function FillBlanks(props) {
  const { question } = props;
  const { answer } = props;
    return (
    <div className="container px-10" >
        <div className={styles.qno}>Ques no:</div>
        <h1 className={styles.head2}>{question.question}</h1>
        <form>
        {question.options.map((option, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 py-4">
                <div className='border text-center border-gray-300 rounded-md p-2 w-full bg-white'>{option}</div>
                <input disabled value={answer[index]} type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                ))}
        </form>
            </div>
  )
}
