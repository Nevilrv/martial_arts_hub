import React, { useState } from "react";
import { Routing } from "../../../shared/Routing";
import OutlineBtn from "../../common/OutlineBtn";
import ActiveBookingRequests from "./ActiveBookingRequests";
import ConfirmedBookingRequests from "./ConfirmedBookingRequests";
import Tabs from "../index";

const Index = () => {
  
  const [calssType, setcalssType] = useState("Active Booking Requests");
  return (
    <>
    <Tabs>
      <div className="mt-11 px-3 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-3xl font-semibold">
          Booking Overview
          </h1>
        </div>
        <div className="md:flex grid sm:grid-cols-2 grid-cols-1 items-center mt-6 gap-2">
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
      <div className="mt-6 w-full overflow-x-auto">
         {calssType === "Active Booking Requests" ? (
          <ActiveBookingRequests />
        ) : calssType === "Confirmed Booking Requests" ? (
          <ConfirmedBookingRequests />
        ) : null} 
      </div>
    </Tabs>
    </>
  );
};

export default Index