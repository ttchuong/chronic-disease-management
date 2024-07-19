import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    token: '',
    username: ''
  },
  reducers: {
    setIsAuthenticated: (state, data) => {
      console.log(data);
      state.authenticated = data.payload.authenticated;
      state.token = data.payload.token;
      state.username = data.payload.username;
    },

  },
});

export const { setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
