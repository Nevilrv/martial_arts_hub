import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Finance_chart } from "../../../services/Admin/FinanceSection/Finance";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";
import { toast } from "react-toastify";

const FinanceDashboardChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Admin Earnings",
        data: [12, 71, 64, 28, 47, 13, 23],
      },
      {
        name: "Refunded Funds",
        data: [20, 14, 17, 11, 16, 10, 13],
      },
      {
        name: "Released Funds",
        data: [12, 11, 14, 18, 17, 13, 13],
      },
      {
        name: "Total Funds",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
    ], 
    options: {
      chart: {
        height: 350,
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#0F0F0F", "#CB3530", "#705DE4", "#34B175"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      grid: {
        borderColor: "#111",
        strokeDashArray: 0,
      },
      markers: {
        shape: "square",
      },
      yaxis: {
        labels: {
          show: true,
          align: "right",
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: ["#6B6B6B"],
            fontSize: "13px",
            fontFamily: "Poppins",
            fontWeight: 400,
            cssClass: "apexcharts-yaxis-label",
          },
          offsetX: -30,
          offsetY: 0,
          rotate: 0,
          formatter: (val) => {
            return val + "$";
          },
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "right",
        offsetY: 25,
        formatter: undefined,
        markers: {
          size: 12,
        },
      },
    },
  });
  const [Loading, setLoading] = useState(false);
  const [data, setdata] = useState();

  const navigate = useNavigate();

  const Get_Finance_chart = async () => {
    setLoading(true);
    const result = await Finance_chart();
    if (result?.success === true) {
      const { Admin_Earnings, refund_Funds, Release_Funds, total_Funds } = result.data;
      const chartData = [
        {
            name: "Admin Earnings",
            data: Admin_Earnings.map(Number),
        },
        {
            name: "Refunded Funds",
            data: refund_Funds.map(Number),
        },
        {
            name: "Released Funds",
            data: Release_Funds.map(Number),
        },
        {
            name: "Total Funds",
            data: total_Funds.map(Number),
        },
    ];
    setdata(chartData);
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
    Get_Finance_chart();
  }, []);

  return (
    <>
      <div className="FinanceDashboardChart">
        <Chart
          options={chartData.options}
          series={data||chartData.series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};

export default FinanceDashboardChart;
