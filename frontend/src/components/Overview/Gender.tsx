import React from "react";
import ReactApexChart from "react-apexcharts";

function Gender() {
  const options = {
    labels: ["Male", "Female", "Other"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  const series = [45, 55, 5];
  return (
    <div className="col-span-12 py-6 xl:col-span-6">
      <div className="mb-6 flex flex-row px-7.5">
        <span className="text-xl font-semibold text-black dark:text-white">
          Gender
        </span>
      </div>
      <div className="flex items-center rounded-sm border border-stroke bg-white px-7.5 py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          height={400}
          width={300}
        ></ReactApexChart>
      </div>
    </div>
  );
}

export default Gender;
