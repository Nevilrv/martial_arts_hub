import React from "react";
import { HiMiniArrowTrendingDown, HiMiniArrowTrendingUp } from "react-icons/hi2";

const FinanceDashboard = () => {
  const data = [
    {
      title: "Total Funds",
      amount: "$ 24520",
      trend: "positive",
      change_in_Percentage: "3.52%",
      pastEarning: "$9500",
    },
    {
      title: "Released Funds",
      amount: "$ 15570",
      trend: "positive",
      change_in_Percentage: "3.52%",
      pastEarning: "$9500",
    },
    {
      title: "Refunded Funds",
      amount: "$ 3725",
      trend: "negative",
      change_in_Percentage: "2.54%",
      pastEarning: "$4500",
    },
    {
      title: "Admin Earnings",
      amount: "$ 1525",
      trend: "positive",
      change_in_Percentage: "3.54%",
      pastEarning: "$3500",
    },
  ];

  return (
    <>
      <div className="pt-9">
        <div className="sm:grid xl:grid-cols-4 md:grid-cols-2 flex flex-col gap-4">
          {data.map((carddata) => (
            <div className="bg-[#E1DFD7] rounded-xl p-6">
              <p className="text-gay-300 text-base ">{carddata.title}</p>
              <h2 className="text-Dark_black text-[32px] font-semibold pb-3 border-b border-gay-300/25">
                {carddata.amount}
              </h2>
              <div className="flex items-center mt-4">
                {carddata.trend === "positive" ? (
                  <HiMiniArrowTrendingUp className="text-green text-lg" />
                ) : (
                  <HiMiniArrowTrendingDown className="text-red-200 text-lg" />
                )}
                <h4 className="text-green font-semibold ml-2">
                  {carddata.change_in_Percentage}
                </h4>
                <p className="text-gay-300 text-base ml-3">
                  Last month {carddata.pastEarning}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:grid xl:grid-cols-5 md:grid-cols-2 flex flex-col gap-4"></div>
      </div>
    </>
  );
};

export default FinanceDashboard;
