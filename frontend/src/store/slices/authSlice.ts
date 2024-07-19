import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    token: ''
  },
  reducers: {
    setIsAuthenticated: (state, data) => {
      console.log(data);
      state.authenticated = data.payload.authenticated;
      state.token = data.payload.token;
    },

  },
});

export const { setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
