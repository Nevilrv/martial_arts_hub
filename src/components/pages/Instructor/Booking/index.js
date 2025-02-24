import React, { useEffect, useState } from "react";
import { Routing } from "../../../shared/Routing";
import OutlineBtn from "../../common/OutlineBtn";
import ActiveBookingRequests from "./ActiveBookingRequests";
import ConfirmedBookingRequests from "./ConfirmedBookingRequests";
import Tabs from "../index";
import Spinner from "../../../layouts/Spinner";
import { Instructor_Booking_Requests } from "../../../services/Instructor/Booking/Booking";
import Socket from "../../common/Socket";

const Index = () => {
  const [calssType, setcalssType] = useState("Pending Booking Requests");

  const [loading, setLoading] = useState(false);
  const [bookingdata, setbookingdata] = useState([]);

  const instructorId = JSON.parse(localStorage.getItem("_id"));

  const getBookingRequests = async () => {
    setLoading(true);
    const result = await Instructor_Booking_Requests(instructorId);
    if (result?.success === true) {
      setLoading(false);
      setbookingdata(result.data)
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookingRequests();
  }, [calssType]);

  return (
    <>
      {loading && <Spinner />}
      <Tabs>
        <div className="mt-11 px-3 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-black text-3xl font-semibold">
              Booking Overview
            </h1>
          </div>
          <div className="md:flex grid sm:grid-cols-2 grid-cols-1 items-center mt-6 gap-2">
            <OutlineBtn
              text={"Pending Booking Requests"}
              className={`${calssType === "Pending Booking Requests"
                ? "bg-gay-300 text-white font-semibold"
                : null
                } h-[45px] text-[15px] `}
              onClick={() => setcalssType("Pending Booking Requests")}
            />
            <OutlineBtn
              text={"Confirmed Booking Requests"}
              className={`${calssType === "Confirmed Booking Requests"
                ? "bg-gay-300 text-white font-semibold"
                : null
                } h-[45px] text-[15px] `}
              onClick={() => setcalssType("Confirmed Booking Requests")}
            />
          </div>
        </div>
        <div className="mt-6 w-full overflow-x-auto">
          {calssType === "Active Booking Requests" ? (
            <ActiveBookingRequests data={bookingdata.Active} getBookingRequests={getBookingRequests} />
          ) : calssType === "Confirmed Booking Requests" ? (
            <ConfirmedBookingRequests data={bookingdata.Confirm} />
          ) : null}
        </div>
      </Tabs>
    </>
  );
};

export default Index;
