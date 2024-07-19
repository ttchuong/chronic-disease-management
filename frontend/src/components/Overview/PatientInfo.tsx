"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import Calendar from "@/components/Calender";
import TableThree from "@/components/Tables/TableThree";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
    ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
    ssr: false,
});

const PatientInfo: React.FC = () => {
    return (
        <>
            <div className="p-4">
                <p className="text-xl font-bold text-black">Welcome, Jenny Willson</p>
                <p>Have a nice day</p>
            </div>

            <div className="flex flex-col gap-10">
                <TableThree/>
                <Calendar />
            </div>

            <div className="mt-4 grid grid-cols-12 gap-3 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <ChartOne/>
                <ChartTwo/>
                <ChartThree/>
            </div>
        </>
    );
};

export default PatientInfo;
