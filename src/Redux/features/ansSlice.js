import { createSlice } from '@reduxjs/toolkit';
import initialQuestions from './Questions.json';
import answerKey from './AnswerKey.json';

let initialAns = Array(initialQuestions.length).fill({
    answered: false,
    value : ''
})
    
export const ansSlice = createSlice({
    name: 'answers',
    initialState: {
        answers: initialAns,
        answerKey: answerKey
    },
    reducers: {
      setAnswer: (state, action) => {
        state.answers[action.payload.index].answered = true;
        state.answers[action.payload.index].value = action.payload.value;
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setAnswer } = ansSlice.actions
  
  export default ansSlice.reducer