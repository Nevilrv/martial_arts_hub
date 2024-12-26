import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Weekly_Transactions } from "../../../services/Admin/DashboardAPI";
import { toast } from "react-toastify";
import { Routing } from "../../../shared/Routing";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../layouts/Spinner";
import dayjs, { utc } from "dayjs";

const BarChart = () => {
  const navigate = useNavigate();
  dayjs.extend(utc);
  const currentTime = dayjs.utc();
  const [series, setSeries] = useState([
    {
      name: "Q1 Budget",
      group: "budget",
      data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43],
    },
    {
      name: "Q2 Budget",
      group: "budget",
      data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43],
    },
    {
      name: "Q3 Budget",
      group: "budget",
      data: [35, 45, 11, 77, 34, 70, 35, 45, 11, 77, 34, 70],
    },
    {
      name: "Q4 Budget",
      group: "budget",
      data: [35, 45, 11, 77, 25, 50, 35, 45, 11, 77, 25, 50],
    },
    {
      name: "Q5 Budget",
      group: "budget",
      data: [35, 45, 11, 77, 20, 40, 35, 45, 11, 77, 20, 40],
    },
  ]);
  const [Loading, setLoading] = useState(false);

  const Get_Bar_chart_Data = async () => {
    setLoading(true);
    const result = await Weekly_Transactions(currentTime.format("YYYY"));
    if (result?.success === true) {
      const originalData = JSON.parse(result?.data?.data);
      const transformedData = Object.keys(originalData).map((key, i) => ({
        name: `${key} Budget`,
        group: "budget",
        data: originalData[key]?.map((value) => parseFloat(value)),
      }));
      setSeries(transformedData);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
        setLoading(false);
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    Get_Bar_chart_Data();
  }, []);

  const [options] = useState({
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
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
    colors: ["#6B6B6B", "#9C9C9C", "#C0C0C0", "#9C9C9C", "#B8B7B4"],
    yaxis: {
      labels: {
        formatter: (val) => {
          return val;
        },
        offsetX: -15,
      },
    },
    axisTicks: {
      show: true,
      width: 1,
      offsetX: 50,
      offsetY: 50,
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "center",
    },
  });
  return (
    <>
      {Loading && <Spinner />}
      <div className="DonutChart">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </>
  );
};

export default BarChart;