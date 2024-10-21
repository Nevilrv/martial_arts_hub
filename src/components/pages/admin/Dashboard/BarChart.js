import React, { useState } from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const [series] = useState([
    {
      name: "Q1 Budget",
      group: "budget",
      data: [44, 55, 41, 67, 22, 43,44, 55, 41, 67, 22, 43,],
    },
    {
      name: "Q2 Budget",
      group: "budget",
      data: [44, 55, 41, 67, 22, 43,44, 55, 41, 67, 22, 43,],
    },
    {
      name: "Q3 Budget",
      group: "budget",
      data: [35, 45, 11, 77, 34, 70,35, 45, 11, 77, 34, 70,],
    },
    {
      name: "Q4 Budget",
      group: "budget",
      data: [35, 45, 11, 77, 25, 50,35, 45, 11, 77, 25, 50,],
    },
    {
      name: "Q5 Budget",
      group: "budget",
      data: [35, 45, 11, 77, 20, 40,35, 45, 11, 77, 20, 40,],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    fill: {
      opacity: 1,
    },
    colors: ["#6B6B6B", "#9C9C9C", "#C0C0C0", "#9C9C9C","#B8B7B4"],
    yaxis: {
      labels: {
        formatter: (val) => {
          return val;
        },
      },
    },
    axisTicks: {
      show: true,
      width: 1,
      offsetX: 50,
      offsetY: 50
  },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "center",
    },
  });
  return (
    <>
      <div className="DonutChart">
        <Chart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};

export default BarChart;
