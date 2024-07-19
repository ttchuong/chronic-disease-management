import Link from "next/link";
import Image from "next/image";
import { Appointment } from "@/types/appointment";
import { AppointmentData } from "./data";

const appointmentData: Appointment[] = AppointmentData;

const TodayAppointments = () => {
  const renderHourMinute = (time: number) => {
    const date = new Date(time * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-6 flex flex-row px-7.5">
        <span className="text-xl font-semibold text-black dark:text-white">
          Today Appointments
        </span>
      </div>

      <div>
        {appointmentData.map((chat, key) => (
          <Link
            href="/"
            className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image
                width={56}
                height={56}
                src={chat.avatar}
                alt="User"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {chat.type}
                  </span>
                </p>
              </div>
              {chat.time}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TodayAppointments;
