import { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {MonitordTracker} from "@/types/MonitordTracker";

export const metadata: Metadata = {
    title: "Chronic Disease Management | Monitor Plan",
    description: "Monitor Plan",
};

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

const MonitoringPlan = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Monitoring Plan" />

            <div className="flex">
                <div className="flex flex-col gap-6">
                    <section className="flex flex-col gap-3">
                        <div className="font-bold">Clinic consultation at @MedSyl</div>
                        <div className="font-bold">11/07/2021 @ 11:11</div>
                        <div className="font-semibold">Dr.Sphen Conley</div>
                        <p className="bg-transparent">
                            A negative test result only means that you did not have COVID-19 at the time of testing.
                            However, that does not mean you will not get COVID-19
                        </p>
                    </section>
                    <section className="flex flex-col gap-3">
                        <div className="font-bold">Clinical summary</div>
                        <p className="bg-transparent">
                            An after-visit summary that provides a patient with relevant and actionable information and
                            instructions containing the patient name, provider's office contact information, date and
                            location
                            of visit, an updated medication list, updated vitals, reason(s) for visit
                        </p>
                    </section>
                    <section className="flex flex-col gap-3">
                        <div className="font-bold">Prescribed Monitoring Plan</div>
                        <div className="font-semibold">Stephen Conley (1 month)</div>
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

                        {monitoredData.map((monitoredItem, key) => (
                            <div
                                className={`grid grid-cols-3 ${
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
                            </div>
                        ))}
                    </div>
                </div>

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

export default MonitoringPlan;