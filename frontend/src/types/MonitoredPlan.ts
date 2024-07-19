export type MonitoredPlan = {
  healthcareProvider: string,
  consultationType: string,
  patientName: string,
  location: string,
  startTime: string,
  dateOfConsultation: Date,
  reasonForConsultation: string,
  reviewNote: string,
  isVisibleToPatient: boolean,
};