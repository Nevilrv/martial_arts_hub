// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { Finance_chart } from "../../../services/Admin/FinanceSection/Finance";
// import { useNavigate } from "react-router-dom";
// import { Routing } from "../../../shared/Routing";
// import { toast } from "react-toastify";
// import OutlineBtn from "../../common/OutlineBtn";
// import { FaRegArrowAltCircleDown } from "react-icons/fa";

// const FinanceDashboardChart = () => {
//   const [chartData] = useState({
//     series: [
//       {
//         name: "Admin Earnings",
//         data: [12, 71, 64, 28, 47, 13, 23],
//       },
//       {
//         name: "Refunded Funds",
//         data: [20, 14, 17, 11, 16, 10, 13],
//       },
//       {
//         name: "Released Funds",
//         data: [12, 11, 14, 18, 17, 13, 13],
//       },
//       {
//         name: "Total Funds",
//         data: [28, 29, 33, 36, 32, 32, 33],
//       },
//     ],
//     options: {
//       chart: {
//         height: 350,
//         zoom: {
//           enabled: true,
//         },
//         toolbar: {
//           show: false,
//         },
//       },
//       colors: ["#0F0F0F", "#CB3530", "#705DE4", "#34B175"],
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "straight",
//         width: 2,
//       },
//       grid: {
//         borderColor: "#111",
//         strokeDashArray: 0,
//       },
//       markers: {
//         shape: "square",
//       },
//       yaxis: {
//         labels: {
//           show: true,
//           align: "right",
//           minWidth: 0,
//           maxWidth: 160,
//           style: {
//             colors: ["#6B6B6B"],
//             fontSize: "13px",
//             fontFamily: "Poppins",
//             fontWeight: 400,
//             cssClass: "apexcharts-yaxis-label",
//           },
//           offsetX: -30,
//           offsetY: 0,
//           rotate: 0,
//           formatter: (val) => {
//             return val + "$";
//           },
//         },
//       },
//       xaxis: {
//         labels: {
//           show: false,
//         },
//       },
//       legend: {
//         horizontalAlign: "right",
//         offsetY: 25,
//         formatter: undefined,
//         markers: {
//           size: 12,
//         },
//       },
//     },
//   });
//   const [Loading, setLoading] = useState(false);
//   const [data, setdata] = useState();
//   const [selectedFilter, setSelectedFilter] = useState("All"); // New state for filter

//   const navigate = useNavigate();

//   const Get_Finance_chart = async () => {
//     setLoading(true);
//     const result = await Finance_chart();
//     if (result?.success === true) {
//       const { Admin_Earnings, refund_Funds, Release_Funds, total_Funds } = result.data;
//       const chartData = [
//         {
//           name: "Admin Earnings",
//           data: Admin_Earnings.map(Number),
//         },
//         {
//           name: "Refunded Funds",
//           data: refund_Funds.map(Number),
//         },
//         {
//           name: "Released Funds",
//           data: Release_Funds.map(Number),
//         },
//         {
//           name: "Total Funds",
//           data: total_Funds.map(Number),
//         },
//       ];
//       setdata(chartData);
//       setLoading(false);
//     } else {
//       if (
//         result?.message === "Invalid token, Please Log-Out and Log-In again"
//       ) {
//         navigate(Routing.AdminLogin);
//         setLoading(false);
//       } else {
//         toast.error(result?.message);
//         setLoading(false);
//       }
//     }
//   };
//   useEffect(() => {
//     Get_Finance_chart();
//   }, []);

//   return (
//     <>
//       <div className="flex items-center justify-between flex-wrap gap-2">
//         <h2 className="text-xl text-gay-300 font-semibold">
//           Funds Overview
//         </h2>
//         <button className="text-primary font-medium text-xs bg-gay-300 p-2.5 px-3 rounded-full flex items-center gap-1">
//           <FaRegArrowAltCircleDown className="text-base" /> Download
//           Report
//         </button>
//       </div>
//       <div className="flex items-center gap-1.5 mt-2 flex-wrap">
//         {["All", "Total Funds", "Released Funds", "Refunded Funds", "Admin Earnings"].map((filter) => (
//           <OutlineBtn
//             key={filter}
//             text={filter}
//             onClick={() => setSelectedFilter(filter)}
//             className={`text-black text-xs sm:w-auto w-full ${selectedFilter === filter ? "bg-black text-white" : "bg-transparent border"
//               }`}
//           />
//         ))}
//       </div>
//       <div className="FinanceDashboardChart">
//         <Chart
//           options={chartData.options}
//           series={data || chartData.series}
//           type="line"
//           height={350}
//         />
//       </div>
//     </>
//   );
// };

// export default FinanceDashboardChart;

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Finance_chart } from "../../../services/Admin/FinanceSection/Finance";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";
import { toast } from "react-toastify";
import OutlineBtn from "../../common/OutlineBtn";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const FinanceDashboardChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        zoom: { enabled: true },
        toolbar: { show: false },
      },
      colors: ["#0F0F0F", "#CB3530", "#705DE4", "#34B175"],
      dataLabels: { enabled: false },
      stroke: { curve: "straight", width: 2 },
      grid: { borderColor: "#111", strokeDashArray: 0 },
      markers: { shape: "square" },
      yaxis: {
        labels: {
          style: { colors: ["#6B6B6B"], fontSize: "13px", fontFamily: "Poppins" },
          offsetX: -30,
          formatter: (val) => `${val}$`,
        },
      },
      xaxis: { labels: { show: false } },
      legend: {
        horizontalAlign: "right",
        offsetY: 25,
        markers: { size: 12 },
      },
    },
  });
  const [selectedSeries, setSelectedSeries] = useState("All");
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const navigate = useNavigate();

  const Get_Finance_chart = async () => {
    setLoading(true);
    const result = await Finance_chart();
    if (result?.success === true) {
      const { Admin_Earnings, refund_Funds, Release_Funds, total_Funds } = result.data;
      const formattedData = [
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
      setData(formattedData);
      setChartData((prev) => ({
        ...prev,
        series: formattedData,
      }));
      setLoading(false);
    } else {
      if (result?.message === "Invalid token, Please Log-Out and Log-In again") {
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

  const filterData = (type) => {
    if (type === "All") {
      setChartData((prev) => ({
        ...prev,
        series: data,
      }));
    } else {
      const filtered = data?.filter((item) => item.name === type);
      setChartData((prev) => ({
        ...prev,
        series: filtered || [],
      }));
    }
    setSelectedSeries(type);
  };

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl text-gray-300 font-semibold">Funds Overview</h2>
        <button className="text-primary font-medium text-xs bg-gray-300 p-2.5 px-3 rounded-full flex items-center gap-1">
          <FaRegArrowAltCircleDown className="text-base" /> Download Report
        </button>
      </div>
      <div className="flex items-center gap-1.5 mt-2 flex-wrap">
        <OutlineBtn
          text={"All"}
          className={`${
            selectedSeries === "All" ? "text-white bg-black" : "bg-transparent"
          } border text-xs sm:w-auto w-full`}
          onClick={() => filterData("All")}
        />
        <OutlineBtn
          text={"Total Funds"}
          className={`${
            selectedSeries === "Total Funds" ? "text-white bg-black" : "bg-transparent"
          } border text-xs sm:w-auto w-full`}
          onClick={() => filterData("Total Funds")}
        />
        <OutlineBtn
          text={"Released Funds"}
          className={`${
            selectedSeries === "Released Funds" ? "text-white bg-black" : "bg-transparent"
          } border text-xs sm:w-auto w-full`}
          onClick={() => filterData("Released Funds")}
        />
        <OutlineBtn
          text={"Refunded Funds"}
          className={`${
            selectedSeries === "Refunded Funds" ? "text-white bg-black" : "bg-transparent"
          } border text-xs sm:w-auto w-full`}
          onClick={() => filterData("Refunded Funds")}
        />
        <OutlineBtn
          text={"Admin Earnings"}
          className={`${
            selectedSeries === "Admin Earnings" ? "text-white bg-black" : "bg-transparent"
          } border text-xs sm:w-auto w-full`}
          onClick={() => filterData("Admin Earnings")}
        />
      </div>
      <div className="FinanceDashboardChart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};

export default FinanceDashboardChart;
