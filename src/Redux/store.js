import { configureStore } from '@reduxjs/toolkit'
import currReducer from './features/currSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      questions: currReducer,
    }
  })
}