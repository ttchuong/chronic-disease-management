import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice"; // Example slice
import patientSlice from "./slices/patientsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    patients: patientSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;