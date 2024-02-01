import { configureStore } from '@reduxjs/toolkit'
import currReducer from './features/currSlice';

export default configureStore({
  reducer: {
    questions: currReducer,
  },
})