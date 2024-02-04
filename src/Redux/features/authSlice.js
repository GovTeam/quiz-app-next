import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticated: "false",
        email: ''
    },
    reducers: {
      verify_token: (state) =>{
        axios.get("/api/auth/verify-token")
        .then((res)=>{
          data = res.data;
          if(data.success)
           state.authenticated = "true";
          else
            state.authenticated = "false";
        }).catch((err)=>{
          state.authenticated = "false";
        });
      },
      login: (state) => {
        state.authenticated = "true";
        // state.email = action.payload;
      },
        logout: (state) => {
            state.authenticated = "false";
            state.email = '';
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { login, logout, verify_token } = authSlice.actions
  
  export default authSlice.reducer