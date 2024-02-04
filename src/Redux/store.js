import { configureStore } from '@reduxjs/toolkit'
import currReducer from './features/currSlice';
import ansReducer from './features/ansSlice';
import statusReducer from './features/statusSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      questions: currReducer,
      answers: ansReducer,
      status: statusReducer,
    }
  })
}