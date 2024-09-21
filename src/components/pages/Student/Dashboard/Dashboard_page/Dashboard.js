import React from "react";
import Tab from "../Tab/Index";
import { FaPaperPlane, FaUser } from "react-icons/fa6";
import { CameraIcon, Thunderstorm, WorkOut } from "../../../../../assets/icon";
import { FiPlus } from "react-icons/fi";
import { Routing } from "../../../../shared/Routing";

const Dashboard = () => {
  const tabs = [
    { name: "Dashboard", href: Routing.StudentDashboard },
    { name: "My Messages", href: Routing.StudentMessages },
    { name: "My Classes", href: Routing.StudentClasses },
    { name: "My Invoices", href: Routing.StudentInvoices },
    { name: "Raise Dispute", href: Routing.StudentDispute },
  ];
  return (
    <>
      <Tab tabs={tabs} />

      <div className="mt-10 px-3 lg:px-8 grid lg:grid-cols-3 gap-5">
        <div className="bg-gay-600 h-[695px] rounded-3xl py-[27px] px-[27px]">
          <div className="w-[210px] h-[210px] bg-gay-250 rounded-full mx-auto flex items-center justify-center relative">
            <FaUser className="text-[60px] text-[#BDBBB5]" />
            <div className="h-[48px] w-[48px] bg-[#E1DFD7] rounded-full flex items-center justify-center absolute bottom-0 right-3">
              <CameraIcon />
            </div>
          </div>
          <h2 className="text-black text-2xl font-semibold text-center mt-4">
            Emily Roberts
          </h2>
          <div className="mt-[6px] mb-14 w-[115px] h-[30px] bg-Green-50 mx-auto rounded-full text-Green-200 flex items-center  justify-center gap-1 text-[14px]">
            <span className="bg-Green-200 h-2 w-2 block rounded-full"></span>
            Online Now
          </div>
          <div className="flex items-center">
            <p className="text-base">Joined as :</p>
            <h4 className="text-black/70 font-semibold ml-1"> Student</h4>
          </div>
          <div className="flex items-center mt-3">
            <p className="text-base">Joined on :</p>
            <h4 className="text-black/70 font-semibold ml-1">28 July, 2024</h4>
          </div>
          <div className="flex items-center mt-3">
            <p className="text-base">Profile Completion:</p>
            <span className="text-Green-200 ml-1">5%</span>
            <span className="text-red-200">(Complete Now)</span>
          </div>
        </div>
        <div className="lg:col-span-2 grid lg:grid-cols-2 gap-5">
          <div className=" bg-gay-600 rounded-3xl px-8 py-7">
            <div className="flex items-center justify-between">
              <h3 className="text-gay-300 text-lg font-medium">
                Class Requests
              </h3>
              <div className="h-7 w-7 rounded-full bg-black flex items-center justify-center text-white">
                <FiPlus className="text-white text-xl" />
              </div>
            </div>
            <div className="flex items-center justify-center flex-col mt-24">
              <FaPaperPlane className="text-[#BDBBB5] text-4xl" />
              <h3 className="text-black font-semibold text-lg">
                Requests list is empty!
              </h3>
              <p className="text-gay-300 text-[13px] text-center max-w-[346px] mx-auto">
                You haven't send any course inquiry requests yet! when you send
                It’s details will be shown here.
              </p>
            </div>
          </div>
          <div className=" bg-gay-600 rounded-3xl px-8 py-7">
            <div className="flex items-center justify-between">
              <h3 className="text-gay-300 text-lg font-medium">Payments</h3>
              <div className="h-7 w-7 rounded-full bg-black flex items-center justify-center text-white">
                <FiPlus className="text-white text-xl" />
              </div>
            </div>
            <div className="flex items-center justify-center flex-col mt-24">
              <Thunderstorm />
              <h3 className="text-black font-semibold text-lg">
                Nothing to Show!
              </h3>
              <p className="text-gay-300 text-[13px] text-center max-w-[346px] mx-auto">
                You haven't joined any courses yet! after joining it’s details
                wil be shown here.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 bg-gay-600 rounded-3xl px-8 py-7">
            <div className="flex items-center justify-between">
              <h3 className="text-gay-300 text-lg font-medium">
                Recent Classes
              </h3>
              <div className="h-7 w-7 rounded-full bg-black flex items-center justify-center text-white">
                <FiPlus className="text-white text-xl" />
              </div>
            </div>
            <div className="flex items-center justify-center flex-col mt-24">
              <WorkOut />
              <h3 className="text-black font-semibold text-lg">
                Your Class list is empty!
              </h3>
              <p className="text-gay-300 text-[13px] text-center mx-auto">
                You haven't bought any courses yet! when you join any course
                it’s details will be shown here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
