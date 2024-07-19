import { createSlice } from "@reduxjs/toolkit";
import {MonitordTracker} from "@/types/MonitordTracker";
import {PatientItem} from "@/types/PatientItem";

interface PatientData {
  patients: PatientItem[]
}

const initialMonitoringList = [
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

const initialState = {
  patients: [
    {
      avatar: "/images/user/user-01.png",
      name: "Deveon Lane",
      visitId: "OPD-2345",
      date: "5/7/21",
      gender: "Male",
      diseases: "Diabetes",
      status: "Out-Patient",
      monitoringTrackers: initialMonitoringList,
      monitoringPlan: {
        healthcareProvider: "MedSyl",
        consultationType: "Clinic consultation",
        patientName: "Stephen Conley",
        location: "167 Ferry, Windsor, ON",
        startTime: "11:11",
        dateOfConsultation: new Date("2021/07/11"),
        reasonForConsultation: "A negative test result only means that you did not have COVID-19 at the time of testing. However, that does not mean you will not get COVID-19",
        reviewNote: "An after-visit summary that provides a patient with relevant and actionable information and instructions containing the patient name, provider&amps office contact information, date and location of visit, an updated medication list, updated vitals, reason(s) for visit",
        isVisibleToPatient: true,
      }
    },
    {
      avatar: "/images/user/user-02.png",
      name: "Albert Flores",
      visitId: "IDP-2424",
      date: "5/7/21",
      gender: "Male",
      diseases: "Diabetes",
      status: "Out-Patient",
      monitoringTrackers: [],
      monitoringPlan: null,
    },
    {
      avatar: "/images/user/user-03.png",
      name: "Ella Lucia",
      visitId: "OPD-2345",
      date: "5/7/21",
      gender: "Male",
      diseases: "Diabetes",
      status: "Out-Patient",
      monitoringTrackers: [],
      monitoringPlan: null,
    },
    {
      avatar: "/images/user/user-02.png",
      name: "Matthew Stone",
      visitId: "IDP-2424",
      date: "5/7/21",
      gender: "Male",
      diseases: "Diabetes",
      status: "Out-Patient",
      monitoringTrackers: [],
      monitoringPlan: null,
    },
  ]
} satisfies PatientData as PatientData

export const patientsSlice = createSlice({
  name: "patients",
  initialState: initialState,
  reducers: {
    deletePatient: (state, data) => {
      const idx = data.payload.key;
      state.patients.splice(idx, 1);
    },
    updateMonitoringPlan: (state, data) => {
      const idx = data.payload.patientIndex;
      state.patients[idx].monitoringPlan = data.payload.monitoringPlan;
    },
    deleteMonitoringTracker: (state, data) => {
      const {patientIndex, monitoringTrackerIndex} = data.payload;
      state.patients[patientIndex].monitoringTrackers.splice(monitoringTrackerIndex, 1);
    }
  },
});

export const { deletePatient, deleteMonitoringTracker , updateMonitoringPlan} = patientsSlice.actions;
export default patientsSlice.reducer;
