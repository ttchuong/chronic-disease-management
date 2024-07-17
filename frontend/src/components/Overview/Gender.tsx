import React from "react";
import ReactApexChart from "react-apexcharts";

function Gender() {
  const options = {
    labels: ["Male", "Female", "Other"],
    colors: ["#008FFB", "#FF4560", "#00E396"], // Optional: customize segment colors
    legend: {
      position: "bottom", // Move legends to the bottom
      labels: {
        colors: "#FFFFFF", // Change legend text color to white
      },
    },
    dataLabels: {
      style: {
        colors: ["#FFFFFF"], // Change data label text color to white
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
            labels: {
              colors: "#FFFFFF", // Ensure text color is white on smaller screens too
            },
          },
        },
      },
    ],
  };
  const series = [45, 55, 5];
  return (
    <div className="col-span-12 xl:col-span-6">
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
          width={"100%"}
        ></ReactApexChart>
      </div>
    </div>
  );
}

export default Gender;
