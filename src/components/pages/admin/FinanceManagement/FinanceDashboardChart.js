// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { Finance_chart } from "../../../services/Admin/FinanceSection/Finance";
// import { useNavigate } from "react-router-dom";
// import { Routing } from "../../../shared/Routing";
// import { toast } from "react-toastify";
// import OutlineBtn from "../../common/OutlineBtn";
// import { FaRegArrowAltCircleDown } from "react-icons/fa";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

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
//           offsetX: -40,
//           offsetY: 0,
//           rotate: 0,
//           formatter: (val) => {
//             return val + "$";
//           },
//         },
//       },
//       xaxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt',
//           'Oct', 'Nav', 'Dec'
//         ]
//         // labels: {
//         //   show: true,

//         // },
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

//   const generateReport = async () => {
//     const chartElement = document.querySelector(".FinanceDashboardChart"); // Selector for the chart container

//     if (!chartElement) {
//       alert("Chart not found!");
//       return;
//     }

//     try {
//       // Capture the chart as an image
//       const canvas = await html2canvas(chartElement, {
//         scale: 2, // Higher scale improves image quality
//       });
//       const imgData = canvas.toDataURL("image/png");

//       // Create a new PDF
//       const pdf = new jsPDF("landscape", "mm", "a4");
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//       // Add the chart image to the PDF
//       pdf.addImage(imgData, "PNG", 10, 30, pdfWidth - 20, pdfHeight);

//       // Save the PDF
//       pdf.save("Funds_Overview.pdf");
//     } catch (error) {
//       console.error("Error generating report:", error);
//     }
//   };


//   return (
//     <>
//       <div className="flex items-center justify-between flex-wrap gap-2">
//         <h2 className="text-xl text-gay-300 font-semibold">
//           Funds Overview
//         </h2>
//         <button onClick={generateReport} className="text-primary font-medium text-xs bg-gay-300 p-2.5 px-3 rounded-full flex items-center gap-1">
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
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
          offsetX: -40,
          offsetY: 0,
          rotate: 0,
          formatter: (val) => {
            return val + "£";
          },
        },
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
      },
      legend: {
        horizontalAlign: "right",
        offsetY: 25,
        markers: {
          size: 12,
        },
      },
    },
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const navigate = useNavigate();

  const Get_Finance_chart = async () => {
    setLoading(true);
    const result = await Finance_chart();
    if (result?.success === true) {
      const { Admin_Earnings, refund_Funds, Release_Funds, total_Funds } = result.data;
      const chartDataFromAPI = [
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
      setData(chartDataFromAPI);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
      } else {
        toast.error(result?.message);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    Get_Finance_chart();
  }, []);

  // Filter the series based on the selected filter
  const filteredSeries = (data || chartData.series).filter((series) => {
    if (selectedFilter === "All") return true;
    return series.name === selectedFilter;
  });

  const generateReport = async () => {
    const chartElement = document.querySelector(".FinanceDashboardChart");

    if (!chartElement) {
      alert("Chart not found!");
      return;
    }

    try {
      // Capture the chart as an image
      const canvas = await html2canvas(chartElement, {
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png");

      // Create a new PDF
      const pdf = new jsPDF("landscape", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add the chart image to the PDF
      pdf.addImage(imgData, "PNG", 10, 30, pdfWidth - 20, pdfHeight);

      // Save the PDF
      pdf.save("Funds_Overview.pdf");
    } catch (error) {
      console.error("Error generating report:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl text-gay-300 font-semibold">Funds Overview</h2>
        <button onClick={generateReport} className="text-primary font-medium text-xs bg-gay-300 p-2.5 px-3 rounded-full flex items-center gap-1">
          <FaRegArrowAltCircleDown className="text-base" /> Download
          Report
        </button>
      </div>
      <div className="flex items-center gap-1.5 mt-2 flex-wrap">
        {["All", "Total Funds", "Released Funds", "Refunded Funds", "Admin Earnings"].map((filter) => (
          <OutlineBtn
            key={filter}
            text={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`text-black text-xs sm:w-auto w-full ${selectedFilter === filter
              ? "bg-black text-white"
              : "bg-transparent border"
              }`}
          />
        ))}
      </div>
      <div className="FinanceDashboardChart">
        <Chart
          options={chartData.options}
          series={filteredSeries}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};

export default FinanceDashboardChart;



