import React, { useState } from "react";
import {
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
} from "react-icons/hi2";
import OutlineBtn from "../../common/OutlineBtn";
import { FaRegArrowAltCircleDown, FaSortUp } from "react-icons/fa";
import FinanceDashboardChart from "./FinanceDashboardChart";
import Instructor1 from "../../../../assets/images/Instructor-4.png";
import Instructor2 from "../../../../assets/images/Instructor-1.png";
import Instructor3 from "../../../../assets/images/Instructor-2.png";
import Instructor4 from "../../../../assets/images/Instructor-3.png";
import Inputfild from "../../common/Inputfild";
import { TbArrowDownToArc, TbArrowUpToArc } from "react-icons/tb";

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
  const [InstructorsList, setInstructorsList] = useState([
    {
      image: Instructor1,
      name: "Keyn Mojho",
      id: "#23352",
      ClassName: "Brazilian Jiu Jitsu",
      JoinedDate: "12/07/2024",
    },
  ]);
  const [isOpen, SetisOpen] = useState(false);

  return (
    <>
      <div className="pt-9 pb-6">
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
        <div className="sm:grid xl:grid-cols-6 grid-cols-1 flex flex-col gap-4 mt-4">
          <div className="lg:col-span-4 bg-primary p-7 rounded-xl">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl text-gay-300 font-semibold">
                Funds Overview
              </h2>
              <button className="text-primary font-medium text-xs bg-gay-300 p-2.5 px-3 rounded-full flex items-center gap-1">
                <FaRegArrowAltCircleDown className="text-base" /> Download
                Report
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              <OutlineBtn
                text={"All"}
                className={
                  "text-white bg-black border-none text-xs sm:w-auto w-full"
                }
              />
              <OutlineBtn
                text={"Total Funds"}
                className={"bg-transparent border text-xs sm:w-auto w-full"}
              />
              <OutlineBtn
                text={"Released Funds"}
                className={"bg-transparent border text-xs sm:w-auto w-full"}
              />
              <OutlineBtn
                text={"Refunded Funds"}
                className={"bg-transparent border text-xs sm:w-auto w-full"}
              />
              <OutlineBtn
                text={"Admin Earnings"}
                className={"bg-transparent border text-xs sm:w-auto w-full"}
              />
            </div>
            <FinanceDashboardChart />
          </div>
          <div className="lg:col-span-2 bg-primary p-7 rounded-xl">
            <h2 className="text-xl text-gay-300 font-semibold">
              Quick Transfer
            </h2>
            <div className="mt-3 w-full bg-blue-50 h-[70px] rounded-lg flex items-center p-3">
              <div className="flex items-center gap-3">
                <img
                  src={Instructor1}
                  alt=""
                  className="w-[44px] h-[44px] rounded-full"
                />
                <div>
                  <h3 className="text-black font-semibold text-base">
                    Kiya John
                  </h3>
                  <p className="text-gay-300 text-[12px]">Instructor</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gay-300 text-sm font-semibold">
                Recently Released Instructors
              </p>
              <div className="flex items-center mt-2">
                <img
                  src={Instructor1}
                  alt=""
                  className="w-[42px] h-[42px] border-2 border-primary rounded-full"
                />
                <img
                  src={Instructor2}
                  alt=""
                  className="w-[42px] h-[42px] border-2 border-primary rounded-full -ml-2.5"
                />
                <img
                  src={Instructor3}
                  alt=""
                  className="w-[42px] h-[42px] border-2 border-primary rounded-full -ml-2.5"
                />
                <img
                  src={Instructor4}
                  alt=""
                  className="w-[42px] h-[42px] border-2 border-primary rounded-full -ml-2.5"
                />
              </div>
            </div>
            <div className="mt-10">
              <Inputfild
                Label={"Insert Amount"}
                Labelclass={"customradiusBlack font-bold"}
                className={"rounded-lg h-[50px] md:w-full"}
                placeholder={"eg $5.99"}
                type={"number"}
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <h2 className="text-gay-300 text-base font-medium">
                Your Balance:
              </h2>
              <h2 className="text-green text-base font-medium">$124242</h2>
            </div>
            <div className="mt-9">
              <OutlineBtn
                text={"Release Fund Now"}
                className={"bg-black text-white border-none w-full"}
              />
            </div>
          </div>
        </div>
        <div className="bg-primary p-7 rounded-xl mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-gay-300 font-semibold">
              Previous Transactions
            </h2>
          </div>
          <div className="mt-6 w-full overflow-x-auto">
            <div className="h-[90px] flex items-center justify-between min-w-[916px]">
              <div className="flex items-center gap-4">
                <div className="bg-Green-150 h-12 w-12 rounded-xl flex justify-center items-center">
                  <TbArrowDownToArc className="text-green text-3xl" />
                </div>
                <div>
                  <h2 className="text-xl text-Dark_black font-medium">
                    Emily Roberts
                  </h2>
                  <p className="text-xs text-black/70">
                    <span className="font-semibold">Student • Class Name:</span>{" "}
                    Boxing • <span className="font-semibold">Class Date:</span>{" "}
                    26 July, 2024
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-black font-semibold text-base">
                  25 July, 2024
                </h2>
                <h2 className="text-black/70 text-xs">5:25 PM IST</h2>
              </div>
              <div>
                <h3 className="text-lg text-Dark_black font-semibold text-right">
                  $5.99
                </h3>
                <p className="text-green text-sm font-medium">
                  + Received from Student
                </p>
              </div>
            </div>
            <div className="h-[90px] flex items-center justify-between min-w-[916px]">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 h-12 w-12 rounded-xl flex justify-center items-center">
                  <TbArrowUpToArc className="text-red-200 text-3xl" />
                </div>
                <div>
                  <h2 className="text-xl text-Dark_black font-medium">
                    James Smith
                  </h2>
                  <p className="text-xs text-black/70">
                    <span className="font-semibold">Student • Class Name:</span>{" "}
                    Boxing • <span className="font-semibold">Class Date:</span>{" "}
                    26 July, 2024
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-black font-semibold text-base">
                  25 July, 2024
                </h2>
                <h2 className="text-black/70 text-xs">5:25 PM IST</h2>
              </div>
              <div>
                <h3 className="text-lg text-Dark_black font-semibold text-right">
                  $5.99
                </h3>
                <p className="text-red-200 text-sm font-medium">
                  - Refunded to Student
                </p>
              </div>
            </div>
            <div className="h-[90px] flex items-center justify-between min-w-[916px]">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 h-12 w-12 rounded-xl flex justify-center items-center">
                  <TbArrowUpToArc className="text-purple-500 text-3xl" />
                </div>
                <div>
                  <h2 className="text-xl text-Dark_black font-medium">
                    Liam Wilson
                  </h2>
                  <p className="text-xs text-black/70">
                    <span className="font-semibold">
                      Instructor • Class Name:
                    </span>{" "}
                    Boxing • <span className="font-semibold">Class Date:</span>{" "}
                    26 July, 2024
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-black font-semibold text-base">
                  25 July, 2024
                </h2>
                <h2 className="text-black/70 text-xs">5:25 PM IST</h2>
              </div>
              <div>
                <h3 className="text-lg text-Dark_black font-semibold text-right">
                  $5.99
                </h3>
                <p className="text-purple-500 text-sm font-medium">
                  Sent to Instructor (Released)
                </p>
              </div>
            </div>
            <div className="h-[90px] flex items-center justify-between min-w-[916px]">
              <div className="flex items-center gap-4">
                <div className="bg-Green-150 h-12 w-12 rounded-xl flex justify-center items-center">
                  <TbArrowDownToArc className="text-green text-3xl" />
                </div>
                <div>
                  <h2 className="text-xl text-Dark_black font-medium">
                    Emily Roberts
                  </h2>
                  <p className="text-xs text-black/70">
                    <span className="font-semibold">Student • Class Name:</span>{" "}
                    Boxing • <span className="font-semibold">Class Date:</span>{" "}
                    26 July, 2024
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-black font-semibold text-base">
                  25 July, 2024
                </h2>
                <h2 className="text-black/70 text-xs">5:25 PM IST</h2>
              </div>
              <div>
                <h3 className="text-lg text-Dark_black font-semibold text-right">
                  $5.99
                </h3>
                <p className="text-green text-sm font-medium">
                  + Received from Student
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end mt-8 min-w-[916px]">
              <OutlineBtn className={"bg-black text-white"} text={"View All"} />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div className="bg-primary rounded-xl p-7 flex items-center justify-between">
            <div>
              <p className="text-gay-300 text-base font-medium">
                Total Transactions
              </p>
              <div className="flex items-center gap-7 mt-3">
                <h2 className="text-black font-semibold text-[34px]">2500</h2>
                <h2 className="text-green text-sm font-medium">
                  <FaSortUp className="text-green text-base mx-auto" />
                  <span>0.5%</span>
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-24 w-3 bg-[#D9D7CF] rounded-full relative">
                <div className="absolute bottom-0 left-0 h-[35%] w-3 bg-green rounded-full"></div>
              </div>
              <div className="h-24 w-3 bg-[#D9D7CF] rounded-full relative">
                <div className="absolute bottom-0 left-0 h-[80%] w-3 bg-green rounded-full"></div>
              </div>
              <div className="h-24 w-3 bg-[#D9D7CF] rounded-full relative">
                <div className="absolute bottom-0 left-0 h-[50%] w-3 bg-green rounded-full"></div>
              </div>
              <div className="h-24 w-3 bg-[#D9D7CF] rounded-full relative">
                <div className="absolute bottom-0 left-0 h-[30%] w-3 bg-green rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-xl p-7 flex items-center justify-between">
            <div>
              <p className="text-gay-300 text-base font-medium">Total Funds</p>
              <div className="flex items-center gap-7 mt-3">
                <h2 className="text-black font-semibold text-[34px]">5540</h2>
                <div className="px-2 py-1 rounded-full bg-red-200 text-white flex items-center justify-center  text-sm font-medium">
                  -0.2%
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-xl p-7 flex items-center justify-between">
            <div>
              <p className="text-gay-300 text-base font-medium">
                Total Released Funds
              </p>
              <div className="flex items-center gap-7 mt-3">
                <h2 className="text-black font-semibold text-[34px]">865</h2>
                <div className="px-2 py-1 rounded-full bg-green text-white flex items-center justify-center  text-sm font-medium">
                  +0.5%
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-xl p-7 flex items-center justify-between">
            <div>
              <p className="text-gay-300 text-base font-medium">
                Funds Pending to Release
              </p>
              <div className="w-[200px] h-3 bg-[#D9D7CF] rounded-full mt-5 relative">
                <div className="w-[20%] h-3 bg-green rounded-full"></div>
              </div>
              <p className="text-sm font-medium text-gay-300 mt-5">
                <span className="text-red-200">- 0.5%</span> from last month
              </p>
            </div>
            <h2 className="text-Dark_black font-semibold text-[34px]">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gay-800">
                  <tr>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-gay-900 text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Instructor’s Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Instructor ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Instructor ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Joined Date
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-primary">
                  {InstructorsList.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <img
                          src={person.image}
                          alt=""
                          className="w-[45px] h-[45px] rounded-full"
                          srcset=""
                        />
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.ClassName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.JoinedDate}
                      </td>
                      <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                        <div className="flex items-center gap-2 justify-end">
                          <OutlineBtn
                            text={"Remove"}
                            className={"text-black h-[45px]"}
                          />
                          <OutlineBtn
                            text={"Block"}
                            className={
                              "text-red-200 bg-red-100 border-red-200 h-[45px]"
                            }
                            onClick={() => SetisOpen(true)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceDashboard;
