import {MonitordTracker} from "@/types/MonitordTracker";
import {MonitoredPlan} from "@/types/MonitoredPlan";

export type PatientItem = {
  avatar: string;
  name: string;
  visitId: string;
  date: string;
  gender: string;
  diseases: string;
  status: string;
  monitoringTrackers: MonitordTracker[],
  monitoringPlan: MonitoredPlan | null,
};
