import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import initialQuestions from './Questions.json'

let initialAns = Array(initialQuestions.length).fill({
    answered: false,
    value : ''
})
    
export const ansSlice = createSlice({
    name: 'answers',
    initialState: {
        answers: initialAns,
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