import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import User from "../../../../assets/images/userImage.png";
import OutlineBtn from "../../common/OutlineBtn";
import { Instructor_Booking_Requests } from "../../../services/Instructor/Booking/Booking";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";


const ConfirmedBookingRequests = ({ data }) => {

  const navigate =  useNavigate()

  return (
    <>
      {data?.length <= 0 && (
        <div className="flex items-center justify-center flex-col h-[calc(100vh-409px)]">
          <FaPaperPlane className="text-[80px] text-[#BDBBB5]" />
          <h2 className="text-[26px] font-medium text-center mt-7">
            Active Booking Requests list is empty!
          </h2>
          <p className="text-lg text-gay-300 max-w-[490px] mx-auto text-center">
            You haven't received any Active Booking Requests yet! When student
            send Booking message It’s details will be shown here.
          </p>
        </div>
      )}
      {data?.map((confirm) => (
        <div className="px-3 lg:px-8 md:h-[143px] md:py-0 gap-y-5 py-3 flex flex-wrap items-center sm:justify-between border-b border-gay-400">
          <div className="flex flex-wrap items-center gap-y-5">
            <div className="sm:w-[82px] sm:h-[82px] w-1/2 sm:mx-0 mx-auto overflow-hidden rounded-full">
              <img
                src={confirm?.studentProfile||User}
                alt="Wrestling"
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>
            <div className="sm:ml-5">
              <h2 className="text-black texrt-[20px] font-medium">
                {confirm?.studentName}
              </h2>
              
              <div className="flex items-center flex-wrap">
                <p className="text-[13px] text-black/70 font-light mt-0.5">
                  <span className="font-medium">Class Name:</span>
                  {confirm?.message?.slice(0, 20)}
                </p>
                <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                <p className="text-[13px] text-black/70 font-light mt-0.5">
                  <span className="font-medium">Class Date:</span>{" "}
                  {confirm?.classDate}
                </p>
                <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                <p className="text-[13px] text-black/70 font-light mt-0.5">
                  <span className="font-medium"> Joined on: </span>
                  {confirm?.joinDate}
                </p>
              </div>
              <div className="flex items-center flex-wrap">
                <p className="text-[13px] text-black/70 font-light mt-0.5">
                  <span className="font-medium">Class Time:</span>
                  {confirm?.startTimeLocal}
                </p>
                <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                <p className="text-[13px] mt-0.5 text-red-200 font-medium">
                  <span className="font-medium text-black/70 ">
                    Class Rate:
                  </span>
                  $ {confirm?.classRate}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap sm:w-auto w-full">
            <OutlineBtn
              text={confirm?.HostUrl === "FaceToFace" ? "FaceToFace" : "Start"}
              className={"bg-transparent min-w-[138px] border-black text-black font-medium sm:w-auto w-full"}
              onClick={() =>navigate(Routing.InstructorMyClass)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ConfirmedBookingRequests;
