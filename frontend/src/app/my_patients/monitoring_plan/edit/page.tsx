"use client";

import {MonitordTracker} from "@/types/MonitordTracker";
import {useEffect, useState} from "react";
import flatpickr from "flatpickr";
import Image from "next/image";

const monitoredData: MonitordTracker[] = [
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
];

const EditMonitoredTrackerList = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4">
        <div className="p-2.5 xl:p-5">
          <h5 className="text-sm font-medium xsm:text-base">Monitored Trackers</h5>
        </div>
        <div className="p-2.5 xl:p-5">
          <h5 className="text-sm font-medium xsm:text-base">Reporting Time & Reminder</h5>
        </div>
        <div className="p-2.5 xl:p-5">
          <h5 className="text-sm font-medium xsm:text-base">Frequency and Review</h5>
        </div>
        <div className="p-2.5 xl:p-5">
          <h5 className="text-sm font-medium xsm:text-base">Actions</h5>
          <button className="hover:text-primary">
            <Image
              height={20}
              width={20}
              src="/images/icon/add-3.svg"
              alt="add"/>
          </button>
        </div>
      </div>

      {monitoredData.map((monitoredItem, key) => (
        <div
          className={`grid grid-cols-4 ${
            key === monitoredData.length - 1
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
          <div className="flex items-center p-2.5 xl:p-5">
            <button className="hover:text-primary">
              <Image
                height={20}
                width={20}
                src="/images/icon/delete-3.svg"
                alt="delete"/>
            </button>
            <button className="hover:text-primary">
              <Image
                height={20}
                width={20}
                src="/images/icon/edit-3.svg"
                alt="edit"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const MonitoringPlanEdit = () => {
  const [isVisibleToPatient, setIsVisibleToPatient] = useState<boolean>(false);
  const [healthCareProvider, setHealthcareProvider] = useState<string>();
  const [consultationType, setConsultationType] = useState<string>();
  const [patientName, setPatientName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [startTime, setStartTime] = useState<string>();
  const [dateOfConsultation, setDateOfConsultation] = useState<Date>();
  const [reasonForConsultation, setReasonForConsultation] = useState<string>()
  const [reviewNote, setReviewNote] = useState<string>()

  const submit = () => {
    console.log(healthCareProvider, dateOfConsultation, patientName, isVisibleToPatient);
  }

  useEffect(() => {
    // Init flatpickr
    flatpickr(".form-datepicker", {
      onChange: function (selectedDates, dateStr, instance) {
        setDateOfConsultation(selectedDates[0])
      },
      defaultDate: dateOfConsultation,
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });
  }, []);

  return (
    <div className="flex flex-col flex-1 gap-8 text-sm">
      <div className="flex">
        <input
          onClick={submit}
          type="button"
          value="Submit"
          className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-lg shadow-sm"/>
      </div>
      <div className="flex justify-between gap-8">
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-gray-500 dark:text-white">
            Healthcare Provider
          </label>
          <input
            value={healthCareProvider}
            onChange={(e) => {
              setHealthcareProvider(e.target.value);
            }}
            type="text"
            placeholder="Please input a healthcare provider"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-gray-500 dark:text-white">
            Consultation Type
          </label>
          <input
            value={consultationType}
            onChange={(e) => setConsultationType(e.target.value)}
            type="text"
            placeholder="Please input a consultation type"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="flex justify-between gap-8">
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-gray-500 dark:text-white">
            Patient Name
          </label>
          <input
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            type="text"
            placeholder="Please input a name"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-gray-500 dark:text-white">
            Location
          </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Please input a location"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="flex justify-between gap-8">
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-gray-500 dark:text-white">
            Start Time
          </label>
          <input
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            type="text"
            placeholder="Please input start time"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-gray-500 dark:text-white">
            Date of Consultation
          </label>
          <div className="relative">
            <input
              className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              placeholder="mm/dd/yyyy"
              data-class="flatpickr-right"
            />

            <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                  fill="#64748B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-gray-500 dark:text-white">
            Reason For Consultation
          </label>
          <textarea
            value={reasonForConsultation}
            onChange={(e) => setReasonForConsultation(e.target.value)}
            rows={4}
            placeholder="Default textarea"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div>
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-gray-500 dark:text-white">
            Review Notes
          </label>
          <textarea
            value={reviewNote}
            onChange={(e) => setReviewNote(e.target.value)}
            rows={4}
            placeholder="Default textarea"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          <label
            htmlFor="checkboxLabelTwo"
            className="flex cursor-pointer select-none items-center"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="checkboxLabelTwo"
                className="sr-only"
                onChange={() => {
                  setIsVisibleToPatient(!isVisibleToPatient);
                }}
              />
              <div
                className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                  isVisibleToPatient && "border-primary bg-gray dark:bg-transparent"
                }`}
              >
            <span className={`opacity-0 ${isVisibleToPatient && "!opacity-100"}`}>
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                  fill="#3056D3"
                  stroke="#3056D3"
                  strokeWidth="0.4"
                ></path>
              </svg>
            </span>
              </div>
            </div>
            Visible To Patient
          </label>
        </div>
      </div>

      <EditMonitoredTrackerList />

      <div className="flex">
        <input
          onClick={submit}
          type="button"
          value="Submit"
          className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-lg shadow-sm"/>
      </div>
    </div>
  );
};

export default MonitoringPlanEdit;