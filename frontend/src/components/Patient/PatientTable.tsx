"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import {RootState} from "@/store";
import {useSelector} from "react-redux";

const PatientTable = () => {
  const router = useRouter()

  const patients = useSelector(
    (state: RootState) => state.patientData.patients
  );

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex flex-row px-7.5">
        <span className="text-xl font-semibold text-black dark:text-white">
          Recent Patients
        </span>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Patient Name</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Visit Id</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Date</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Gender</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Diseases</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Status</h5>
          </div>
        </div>

        {patients.map((patient, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6
            ${patient.monitoringPlan ? "cursor-pointer" : ""}  
            ${
              key === patients.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            onClick={() => {
              if (patient.monitoringPlan)
                router.push(`/my_patients/${key}/monitoring_plan`)
            }}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image
                  src={patient.avatar}
                  alt="Patient"
                  width={48}
                  height={48}
                />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {patient.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{patient.visitId}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{patient.date}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{patient.gender}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{patient.diseases}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{patient.status}</p>
              <div className="relative">
                <button className="absolute -right-6 -top-2">
                  <Image
                    width={20}
                    height={20}
                    alt="three dot vertical"
                    src={"/images/icon/three-dots-vertical.svg"}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientTable;
