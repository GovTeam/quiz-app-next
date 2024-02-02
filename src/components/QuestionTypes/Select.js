import React, {useState} from "react";
import styles from './page.module.css';
import { setAnswer } from "@/Redux/features/ansSlice";
import { useAppDispatch } from "@/Redux/hooks";

function Select(props){
    const {question} = props;
    const [selected, setSelected] = useState('');
    const dispatch = useAppDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selected);
        dispatch(setAnswer({index: question.order, value: selected}));
    }

    return(        
    <div>
        <div className={styles.qno}>Ques no:</div>
        <div className={styles.head2}>
          {question.question}
        </div>
        <center>
          <form onSubmit={handleSubmit}>
            {question.options.map((option, index) => {
              return(
                <div key={index}>
                  <input
                    className={styles.inpRadio}
                    type="radio"
                    id="age1"
                    name="age"
                    value={option}
                    selected = {selected === option}
                    onChange={(e) => setSelected(e.target.value)}
                  />
                  <label className={styles.label}>{option}</label>
                  <br />
                </div>
              )
            })}
            <br />
            <br />
            <input
              className={styles.saveBtn}
              type="submit"
              value="Submit"
            />
          </form>
        </center>
      </div>)
}
export default Select;