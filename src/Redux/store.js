import { configureStore } from '@reduxjs/toolkit'
import currReducer from './features/currSlice';
import ansReducer from './features/ansSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      questions: currReducer,
      answers: ansReducer,
    }
  })
}