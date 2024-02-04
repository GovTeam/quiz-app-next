import styles from './page.module.css';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { setAnswer } from '@/Redux/features/ansSlice';

export default function FillBlanks(props) {
  const { question } = props;
  const dispatch  = useAppDispatch();
  const all_ans = useAppSelector((state) => state.answers.answers);
  const [answers, setAnswers] = useState(Array(question.options.length).fill(''));
    useEffect(() => {
        console.log("Inside use effect of fill in the blanks")
        console.log(all_ans[question.order])
        if(all_ans[question.order].answered){
            console.log("This question is already submitted")
            setSubmitted(true);
            setAnswers(all_ans[question.order].value);
        }
    }, [all_ans]);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log(answers);
        dispatch(setAnswer({index: question.order, value: answers}))
    }
    const handleChange = (e, index) => {
        const newAnswers = [...answers];
        newAnswers[index] = e.target.value;
        setAnswers(newAnswers);
    }
    return (
    <div className="container px-10" >
        <div className={styles.qno}>Ques no:</div>
        <h1 className={styles.head2 + " text-normal lg:text-xl"}>{question.question}</h1>
        <form onSubmit={handleSubmit}>
        {question.options.map((option, index) => (
            <div key={index} className="grid grid-cols-4 gap-1 lg:gap-2 py-1 lg:py-2">
                <div className=' col-span-3 border text-center border-gray-300 rounded-md p-1 w-full bg-white'>{option}</div>
                <input onChange={(e)=>{handleChange(e, index)}} value={answers[index]} type="text" className="border border-gray-300 rounded-md p-1 w-full" />
                </div>
                ))}
                <div className='flex flex-row justify-center'>
                    <input className={styles.saveBtn} type="submit" value="Submit" />
                </div>
        </form>
            </div>
  )
}
