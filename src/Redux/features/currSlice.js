import { createSlice } from '@reduxjs/toolkit'
import initialQuestions from './Questions.json'
    // questions attributes:
    // order: the precedence level in which it should be shown
    // type: the type of question, select- select one of options; match-match the columns, fill- fill in the blanks
    // question: The statement
    // Options: Optional field to tell the options for select and match type of questions


export const currSlice = createSlice({
  name: 'questions',
  initialState: {
    currentQuestion: 0,
    allQuestions: initialQuestions,
    totalQuestions: initialQuestions.length,
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
      return;
    },
    setQuestion: (state, action) => {
      state.currentQuestion = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setQuestion } = currSlice.actions

export default currSlice.reducer