import React from "react";
import Adminlayout from "../../../layouts/Adminlayout";

const Dashboard = () => {
  const data = [
    {
      Titile: "Total Classes",
      number: 125,
      color: "text-black",
    },
    {
      Titile: "Active Classes",
      number: 80,
      color: "text-green",
    },
    {
      Titile: "Total Instructors",
      number: 20,
      color: "text-black",
    },
    {
      Titile: "Total Students",
      number: 450,
      color: "text-black",
    },
    {
      Titile: "Blocked Students",
      number: 28,
      color: "text-red-200",
    },
    {
      Titile: "Total Instructor Requests",
      number: 55,
      color: "text-black",
    },
    {
      Titile: "Accepted Inst. Requests",
      number: 35,
      color: "text-green",
    },
    {
      Titile: "Rejected Inst. Requests",
      number: 20,
      color: "text-red-200",
    },
    {
      Titile: "Total Earning",
      number: "$589.99",
      color: "text-black",
    },
    {
      Titile: "Total Refunds",
      number: "$150.0",
      color: "text-black",
    },
    {
      Titile: "Total Released Funds",
      number: "$450.99",
      color: "text-black",
    },
  ];

  return (
    <>
      <div className="pt-9">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {data.map((items) => (
            <>
              <div className="w-full h-[115px] bg-primary rounded-xl p-6 shadow-BoxShadow">
                <h2 className="text-gay-300 font-medium">{items.Titile}</h2>
                <h3 className={`${items.color} font-semibold text-4xl mt-2`}>
                  {items.number}
                </h3>
              </div>
            </>
          ))}
          <div className="grid md:grid-cols-5 grid-cols-2 col-span-3 h-[125px] gap-4">
            <div className="col-span-2 px-6 py-7 bg-primary rounded-xl">
              <p className="text-lg font-bold text-gay-300">Progress</p>
            </div>
            <div className="col-span-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
