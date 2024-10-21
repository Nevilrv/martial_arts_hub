import React, { useState } from "react";
import Chart from "react-apexcharts";

const StudentsPieChart = () => {
  const [chartOptions] = useState({
    labels: ["Canada", "United States", "Australia", "India", "South Africa"],
    colors: ["#151515", "#404040", "#6B6B6B", "#929292", "#A6A6A6"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: 0,
    },
    chart: {
      height: 410,
    },

    // responsive: [
    //   {
    //     breakpoint: 540,
    //     options: {
    //       chart: {
    //         width: 270,
    //       },
    //     },
    //   },
    // ],
  });

  const [chartSeries] = useState([44, 55, 13, 43, 59]);

  return (
    <div className="">
      <Chart options={chartOptions} series={chartSeries} type="pie" />
    </div>
  );
};

export default StudentsPieChart;
