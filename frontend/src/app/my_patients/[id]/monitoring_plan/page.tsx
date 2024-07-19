"use client";

import Link from "next/link";
import {RootState} from "@/store";
import {useSelector} from "react-redux";
import {usePathname} from "next/navigation";

const MonitoringPlan = ({ params }: { params: { id: string } }) => {
    const patient = useSelector(
      (state: RootState) => state.patientData.patients[parseInt(params.id)]
    );
    const monitoringTrackers = patient.monitoringTrackers;
    const monitoringPlan = patient.monitoringPlan;

  const pathname = usePathname();

    return (
      <div className="flex flex-col gap-6">
          <div className="relative">
              <div className="absolute right-0">
                  <Link className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-lg shadow-sm"
                        href={`${pathname}/edit`}>
                      Edit
                  </Link>
              </div>
          </div>
          <section className="flex flex-col gap-3">
              <div className="font-bold">{monitoringPlan?.consultationType} at {monitoringPlan?.healthcareProvider}</div>
              <div className="font-bold">{monitoringPlan?.dateOfConsultation.toISOString().split('T')[0]} @ {monitoringPlan?.startTime}</div>
              <div className="font-semibold">Dr.Sphen Conley</div>
              <p className="bg-transparent">
                {monitoringPlan?.reasonForConsultation}
              </p>
          </section>
          <section className="flex flex-col gap-3">
              <div className="font-bold">Clinical summary</div>
              <p className="bg-transparent">
                {monitoringPlan?.reviewNote}
              </p>
          </section>
          <section className="flex flex-col gap-3">
              <div className="font-bold">Prescribed Monitoring Plan</div>
              <div className="font-semibold">Matt Devon (1 month)</div>
              <div className="font-bold">11/07/2021</div>
              <div className="text-blue-600 font-semibold">Amount: $300</div>
          </section>
          <div className="flex flex-col">
              <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4">
                  <div className="p-2.5 xl:p-5">
                      <h5 className="text-sm font-medium xsm:text-base">Monitored Trackers</h5>
                  </div>
                  <div className="p-2.5 xl:p-5">
                      <h5 className="text-sm font-medium xsm:text-base">Reporting Time & Reminder</h5>
                  </div>
                  <div className="p-2.5 xl:p-5">
                      <h5 className="text-sm font-medium xsm:text-base">Frequency and Review</h5>
                  </div>
              </div>

              {monitoringTrackers.map((monitoredItem, key) => (
                <div
                  className={`grid grid-cols-3 ${
                    key === monitoringTrackers.length - 1
                      ? ""
                      : "border-b border-stroke dark:border-strokedark"
                  }`}
                  key={key}
                >
                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">
                            {monitoredItem.type}
                        </p>
                    </div>

                    <div className="flex flex-col p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">{monitoredItem.reportingTime}</p>
                        <p className="text-black dark:text-white">{monitoredItem.reminders}</p>
                    </div>

                    <div className="flex items-center p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">{monitoredItem.freqAndReview}</p>
                    </div>
                </div>
              ))}
          </div>
      </div>);
};

export default MonitoringPlan;