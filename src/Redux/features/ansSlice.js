import { createSlice } from '@reduxjs/toolkit';
import { UseSelector } from 'react-redux';

let initialAns = Array(3).fill({
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
        state.answers[action.payload.index].value = action.payload.value;
        state.answers[action.payload.index].answered = true;
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setAnswer } = ansSlice.actions
  
  export default ansSlice.reducer