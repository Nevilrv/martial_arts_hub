import React, { useState } from "react";
import { Routing } from "../../../shared/Routing";
import Tab from "../../common/Tab/Index";
import OutlineBtn from "../../common/OutlineBtn";
import ActiveBookingRequests from "./ActiveBookingRequests";
import ConfirmedBookingRequests from "./ConfirmedBookingRequests";

const Index = () => {
  const tabs = [
    { name: "Dashboard", href: Routing.InstructorDashboard },
    { name: "My Classes", href: Routing.InstructorMyClass },
    { name: "Message Requests", href: Routing.InstructorMessageRequest },
    { name: "Chat", href: "" },
    { name: "Booking Overview", href: Routing.InstructorBooking  },
    { name: "Earnings Report", href: "" },
    { name: "Reviews", href: Routing.InstructorReviews },
    { name: "Create Class", href: Routing.InstructorCreateClass },
  ];
  const [calssType, setcalssType] = useState("Active Booking Requests");

  return (
    <>
      <Tab tabs={tabs} />
      <div className="mt-11 px-3 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-3xl font-semibold">
            Message Requests
          </h1>
        </div>
        <div className="flex items-center mt-6 gap-2">
          <OutlineBtn
            text={"Received/Active Booking Requests"}
            className={`${
              calssType === "Active Booking Requests" ? "bg-gay-300 text-white font-semibold" : null
            } h-[45px] text-[15px] `}
            onClick={() => setcalssType("Active Booking Requests")}
          />
          <OutlineBtn
            text={"Confirmed Booking Requests"}
            className={`${
              calssType === "Confirmed Booking Requests"
                ? "bg-gay-300 text-white font-semibold"
                : null
            } h-[45px] text-[15px] `}
            onClick={() => setcalssType("Confirmed Booking Requests")}
          />
        </div>
      </div>
      <div className="mt-6">
         {calssType === "Active Booking Requests" ? (
          <ActiveBookingRequests />
        ) : calssType === "Confirmed Booking Requests" ? (
          <ConfirmedBookingRequests />
        ) : null} 
      </div>
    </>
  );
};

export default Index