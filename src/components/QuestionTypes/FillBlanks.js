import styles from './page.module.css';

export default function FillBlanks(props) {
  const { question } = props;
    return (
    <div className="container px-10" >
        <div className={styles.qno}>Ques no:</div>
        <h1 className={styles.head2}>{question.question}</h1>
        {question.options.map((option, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 py-4">
                <div className='border text-center border-gray-300 rounded-md p-2 w-full bg-white'>{option}</div>
                <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                </div>
                ))}
                <div className='flex flex-row justify-center'>
                            <input
              className={styles.saveBtn}
              type="submit"
              value="Submit"
            />
            </div>
    </div>
  )
}
