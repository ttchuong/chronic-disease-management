import { createSlice } from "@reduxjs/toolkit";
import {MonitordTracker} from "@/types/MonitordTracker";

const initialState = [
  {
    type: "Blood Pressure",
    reportingTime: "Thirst Time @ 8:00 am",
    reminders: "3:00 pm, 8:00 pm",
    freqAndReview: "The only way to know if you have high blood pressure",
  },
  {
    type: "Exercise",
    reportingTime: "Daily @ 06:00-8:00 am",
    reminders: null,
    freqAndReview: "Your doctor will probably order and have neurological changes",
  },
  {
    type: "Food",
    reportingTime: "Thirst Time @ 8:00 am",
    reminders: "3:00 pm, 8:00 pm",
    freqAndReview: "Your doctor will probably order and have neurological changes",
  },
] satisfies MonitordTracker[] as MonitordTracker[]

export const patientsSlice = createSlice({
  name: "patients",
  initialState: initialState,
  reducers: {
    deletePatient: (state, data) => {
      const idx = data.payload.key;
      state.splice(idx, 1);
    },
  },
});

export const { deletePatient } = patientsSlice.actions;
export default patientsSlice.reducer;
