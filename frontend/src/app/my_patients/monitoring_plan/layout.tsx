"use client";

import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {MonitordTracker} from "@/types/MonitordTracker";

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

export default function MonitoringPlanLayout(
  {
    children,
  }: {
  children: React.ReactNode
}) {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Monitoring Plan" />

      <div className="flex justify-between">
        {children}

        <div>
          <div className="bg-gray-2 flex flex-col ml-10 rounded-lg w-[330px]">
            <div className="flex flex-col items-center m-5">
              <div className="flex justify-center">
                <Image
                  src={"/images/user/user-01.png"}
                  width={80}
                  height={80}
                  alt="profile"
                />
              </div>
              <span className="font-bold">Mr. Jone Martin</span>
              <span className="text-graydark text-sm">22 years, Male</span>
            </div>
            <hr className="border-t-gray-300 mx-2"/>
            <div className="flex flex-col m-5 gap-3 text-sm">
              <section>
                <p className="text-gray-500">Email</p>
                <p className="font-semibold">jubed435@gmail.com</p>
              </section>
              <section>
                <p className="text-gray-500">Phone</p>
                <p className="font-semibold">(704)555-0127</p>
              </section>
              <section>
                <p className="text-gray-500">Diseases</p>
                <p className="font-semibold">Cardiology</p>
              </section>
            </div>
            <hr className="border-t-gray-300 mx-2"/>
            <div className="grid grid-cols-2 gap-2 m-5">
              <div className="bg-pink-100 flex flex-col font-bold p-2 text-sm rounded-lg">
                <span>Blood Pressure</span>
                <div className="my-3">
                  <span className="">35%</span>
                  <div className="w-full bg-pink-300 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-pink-600 h-1.5 rounded-full dark:bg-blue-500"
                         style={{"width": "35%"}}></div>
                  </div>
                </div>
                <span className="text-pink-800">141/90 mm/hg</span>
              </div>
              <div className="bg-purple-100 flex flex-col font-bold p-2 text-sm rounded-lg">
                <span>Body Temperature</span>
                <div className="my-3">
                  <span className="">15%</span>
                  <div className="w-full bg-purple-300 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-1.5 rounded-full dark:bg-blue-500"
                         style={{"width": "15%"}}></div>
                  </div>
                </div>
                <span className="text-purple-800">29°C</span>
              </div>
              <div className="bg-blue-100 flex flex-col font-bold p-2 text-sm rounded-lg">
                <span>Body Weight</span>
                <div className="my-3">
                  <span className="">40%</span>
                  <div className="w-full bg-blue-300 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-600"
                         style={{"width": "40%"}}></div>
                  </div>
                </div>
                <span className="text-blue-800">78 kg</span>
              </div>
              <div className="bg-orange-100 flex flex-col font-bold p-2 text-sm rounded-lg">
                <span>Body Height</span>
                <div className="my-3">
                  <span className="">30%</span>
                  <div className="w-full bg-orange-300 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-orange-600 h-1.5 rounded-full dark:bg-blue-500"
                         style={{"width": "30%"}}></div>
                  </div>
                </div>
                <span className="text-orange-800">172 cm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};