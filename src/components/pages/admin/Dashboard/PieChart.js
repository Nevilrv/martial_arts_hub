import React, { useState } from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const [chartOptions] = useState({
    labels: [
      "Total Sessions",
      "Total Students",
      "Total Instructors",
      "Total Earning",
    ],
    colors: ["#6B6B6B", "#8A8A8A", "#B5B3B3", "#989898"],
    legend: {
      position: "right",
      offsetY: 50,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0
    },

    responsive: [
      {
        breakpoint: 1735,
        options: {
          legend: {
            position: "bottom",
            offsetY: 0,
          },
        },
      },
      {
        breakpoint: 1660,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
            offsetY: 0,
          },
        },
      },
      {
        breakpoint: 1405,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: "bottom",
            offsetY: 0,
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: 480,
          },
        },
      },
      {
        breakpoint: 1080,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 540,
        options: {
          chart: {
            width: 270,
          },
          legend: {
            position: "bottom",
          },
        },
      },

    ],
  });

  const [chartSeries] = useState([44, 55, 13, 43]);

  return (
    <div className="DonutChart">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default PieChart;
