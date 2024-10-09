import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import User from "../../../../assets/images/userImage.png";
import OutlineBtn from "../../common/OutlineBtn";

const ActiveBookingRequests = () => {
  return (
    <>
      {/* <div className="flex items-center justify-center flex-col h-[calc(100vh-409px)]">
          <FaPaperPlane className='text-[80px] text-[#BDBBB5]' />
          <h2 className="text-[26px] font-medium text-center mt-7">
          Active Booking Requests list is empty!
          </h2>
          <p className="text-lg text-gay-300 max-w-[490px] mx-auto text-center">
          You haven't received any Active Booking Requests yet! When student send Booking message It’s details will be shown here.
          </p>
        </div>  */}

      <div className="px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400 min-w-[975px]">
        <div className="flex items-center">
          <div className="w-[82px] h-[82px] overflow-hidden rounded-full">
            <img
              src={User}
              alt="Wrestling"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          <div className="ml-5">
            <h2 className="text-black texrt-[20px] font-medium">
              Emily Roberts
            </h2>
            <div className="flex items-center">
            <p className="text-[13px] text-black/70 font-light mt-0.5">
                <span className="font-medium">Class Name:</span>{" "}
                Boxing
              </p>
              <p className="text-[13px] text-black/70 font-light mt-0.5">
                <span className="font-medium">Class Date:</span>{" "}
                26 Aug, 2024
              </p>
              <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
              <p className="text-[13px] text-black/70 font-light mt-0.5">
                <span className="font-medium"> Joined on: </span>
                03 Aug, 2024
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[13px] text-black/70 font-light mt-0.5">
                <span className="font-medium">Class Time:</span>
                10:00 AM
              </p>
              <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
              <p className="text-[13px] mt-0.5 text-red-200 font-medium">
                <span className="font-medium text-black/70 ">Class Rate:</span>$
                {/* {parseInt(upcoming_class?.rate).toFixed(2)} */}
                4.99
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <OutlineBtn
            text={"See Profile"}
            className={"bg-transparent border-black text-black font-medium"}
          />
          <OutlineBtn
            text={"Confirm Booking"}
            className={"bg-red-100 border-red-200 text-red-200 font-medium"}
          />
        </div>
      </div>
    </>
  );
};

export default ActiveBookingRequests;
