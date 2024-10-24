import React from "react";
import Instructor4 from "../../../../assets/images/Instructor-4.png";
import PieChart from "./PieChart";
import OutlineBtn from "../../common/OutlineBtn";
import { MdCalendarToday } from "react-icons/md";
import BarChart from "./BarChart";
import StudentsPieChart from "./StudentsPieChart";

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
        <div className="sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 flex flex-col gap-4">
          {data.map((items) => (
            <>
              <div className="w-full bg-primary rounded-xl p-6 shadow-BoxShadow">
                <h2 className="text-gay-300 font-medium">{items.Titile}</h2>
                <h3 className={`${items.color} font-semibold text-4xl mt-2`}>
                  {items.number}
                </h3>
              </div>
            </>
          ))}
          <div className="row-span-2 bg-primary rounded-xl p-6 shadow-BoxShadow">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-gay-300">Notifications</p>
              <p className="text-red-200 underline font-medium">View All</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 mt-5">
                <div className="h-[32px] w-[34px] bg-gay-300 rounded-md flex items-center justify-center">
                  <MdCalendarToday className="text-primary text-base" />
                </div>
                <div>
                  <p className="text-black text-sm font-medium">
                    Kiya John have 1 Class on 24 Aug
                  </p>
                  <p className="text-black/70 text-sm font-medium">
                    12 Minutes ago
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-5 grid-cols-2 xl:col-span-3 col-span-2 gap-4">
            <div className="col-span-2 px-6 py-7 bg-primary rounded-xl">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gay-300">Progress</p>
                <select
                  name=""
                  id=""
                  className="bg-transparent px-2 py-2 rounded-full border border-black/30"
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="flex items-center justify-center">
                <PieChart />
              </div>
            </div>
            <div className="xl:col-span-3 col-span-2 bg-primary rounded-xl p-6 shadow-BoxShadow">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gay-300">
                  Instructor Requests
                </p>
                <p className="text-red-200 underline font-medium">View All</p>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                      <img src={Instructor4} alt="" />
                    </div>
                    <div>
                      <h2 className="text-sm text-black font-semibold">
                        Kiya John
                      </h2>
                      <div className="flex items-center mt-1">
                        <p className="text-xs text-black/70">
                          <span className="font-semibold">Date:</span>29 July
                          2024
                        </p>
                        <span className="h-1 w-1 bg-black/70 rounded-full mx-0.5"></span>
                        <p className="text-xs text-black/70">
                          <span className="font-semibold">Class Name:</span>
                          Brazilian Jiu Jitsu
                        </p>
                      </div>
                    </div>
                  </div>
                  <OutlineBtn text={"View Profile"} className={"h-[40px] bo"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
          <div className="bg-primary rounded-xl p-6 shadow-BoxShadow  mt-4 lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-gay-300">
                Weekly Transactions
              </p>
            </div>
            <BarChart />
          </div>
          <div className="bg-primary rounded-xl p-6 shadow-BoxShadow  mt-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-gay-300">
                Students & Instructors by Country
              </p>
            </div>
            <div className="grid 2xl:grid-cols-2 items-center gap-[10px] mt-4">
              <div className="border border-gay-300/15 rounded-2xl">
                <h2 className="text-center text-base font-semibold text-Dark_black mt-6 mb-2">
                  No. of Students
                </h2>
                {/* <StudentsPieChart /> */}
              </div>
              <div className="border border-gay-300/15 rounded-2xl">
                {/* <BarChart /> */}
                <h2 className="text-center text-base font-semibold text-Dark_black mt-6 mb-2">
                  No. of Instructors
                </h2>
                {/* <StudentsPieChart /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
