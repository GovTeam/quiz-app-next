import { configureStore } from '@reduxjs/toolkit'
import currReducer from './features/currSlice';
import ansReducer from './features/ansSlice';
import statusReducer from './features/statusSlice';
import authReducer from './features/authSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      questions: currReducer,
      answers: ansReducer,
      status: statusReducer,
      auth: authReducer,
    }
  })
}