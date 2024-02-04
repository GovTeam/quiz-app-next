import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
    name: 'status',
    initialState: {
        currentStatus: "NOT_STARTED",
    },
    reducers: {
      startTest: (state) => {
        state.currentStatus = "ONGOING";
      },
        endTest: (state) => {
            state.currentStatus = "COMPLETED";
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { startTest, endTest } = statusSlice.actions
  
  export default statusSlice.reducer