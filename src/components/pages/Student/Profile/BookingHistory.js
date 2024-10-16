import React from "react";
import StudentProfile from "./StudentProfile";
import { IoIosArrowRoundForward } from "react-icons/io";
import Wrestling from "../../../../assets/images/Wrestling.png";
import Boxing from "../../../../assets/images/Boxing.png";
import OutlineBtn from "../../common/OutlineBtn";

const BookingHistory = () => {
  return (
    <>
      <StudentProfile>
        <div className="border border-[#71717194] py-7 px-6 rounded-lg mt-14">
          <h2 className="text-Dark_black text-2xl font-semibold">
            Booking History
          </h2>
          <div className="flex items-center justify-between border-b mt-8 border-black/40 pb-4">
            <div className="flex items-start gap-4">
              <img
                src={Boxing}
                alt=""
                className=" h-[95px] object-cover rounded-md"
              />
              <div>
                <h2 className="text-base text-black font-semibold">
                  Wrestling
                </h2>
                <p className="text-sm font-medium text-black/70">
                Class Date:{" "}
                  <span className="font-normal">26 Aug, 2024</span>{" "}
                </p>
                <p className="text-sm font-medium text-black/70">
                  Instructor Name:{" "}
                  <span className="font-normal">Mr. Smith Martin</span>{" "}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-right">$10.99</h2>
              <OutlineBtn
                text={"Payment Unsuccessful"}
                className={
                  "bg-red-200 text-white border-none px-4 h-[35px] mt-1"
                }
                endicon={
                  <IoIosArrowRoundForward className="text-2xl ml-1 -rotate-45" />
                }
              />
            </div>
          </div>
        </div>
      </StudentProfile>
    </>
  );
};

export default BookingHistory;
