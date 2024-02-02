import { createSlice } from '@reduxjs/toolkit';



export const ansSlice = createSlice({
    name: 'answers',
    initialState: {
        answers: [],
    },
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes.
        // Also, no return statement is required from these functions.
        // state.questions.currentQuestion += 1
        state.currentQuestion += 1
        state.currentQuestion = state.currentQuestion % state.totalQuestions
      },
      decrement: (state) => {
        state.currentQuestion -= 1
      },
      gotoQue: (state, action) => {
        state.currentQuestion = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, gotoQue } = currSlice.actions
  
  export default ansSlice.reducer