import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import User from "../../../../assets/images/userImage.png";
import OutlineBtn from "../../common/OutlineBtn";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaArrowLeft } from "react-icons/fa";
import {
  SeeStudentProfile,
  Student_Message_status,
} from "../../../services/Instructor/MessageRequests/MessageRequests";
import Spinner from "../../../layouts/Spinner";
import { Confirm_Booking_status } from "../../../services/Instructor/Booking/Booking";
const ActiveBookingRequests = ({ data,getBookingRequests }) => {
  const [StudentProfile, setStudentProfile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [studentDetils, setStudentDetils] = useState({});
  let studentid = null;

  const GetStudentDetails = async () => {
    setLoading(true);
    const result = await SeeStudentProfile(studentid);
    if (result?.success === true) {
      setLoading(false);
      setStudentDetils(result.data);
      setStudentProfile(true);
    } else {
      setLoading(false);
    }
  };

  const heandleStudentDetails = (id) => {
    studentid = id;
    GetStudentDetails();
  };

  const heandleConform = async (Bookingid) => {
    setLoading(true);
    const result = await Confirm_Booking_status(Bookingid);
    if (result?.success === true) {
      setLoading(false);
      getBookingRequests()
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
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
      {data?.map((booking) => (
        <div className="px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400 min-w-[975px]">
          <div className="flex items-center">
            <div className="w-[82px] h-[82px] overflow-hidden rounded-full">
              <img
                src={booking?.studentProfile||User}
                alt="Wrestling"
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-black texrt-[20px] font-medium">
                {booking?.studentName}
              </h2>
              <div className="flex items-center">
                <p className="text-[13px] text-black/70 font-light mt-0.5">
                  <span className="font-medium">Class Name:</span>{" "}
                  {booking?.message?.slice(0, 20)}
                </p>
                <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                <p className="text-[13px] text-black/70 font-light mt-0.5">
                  <span className="font-medium">Class Date:</span>{" "}
                  {booking?.classDate}
                </p>
                <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                <p className="text-[13px] text-black/70 font-light mt-0.5">
                  <span className="font-medium"> Joined on: </span>
                  {booking?.joinDate}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[13px] text-black/70 font-light mt-0.5">
                  <span className="font-medium">Class Time:</span>
                  {booking?.startTimeLocal}
                </p>
                <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                <p className="text-[13px] mt-0.5 text-red-200 font-medium">
                  <span className="font-medium text-black/70 ">
                    Class Rate:
                  </span>
                  ${booking?.classRate}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <OutlineBtn
              text={"See Profile"}
              className={"bg-transparent border-black text-black font-medium"}
              onClick={() => heandleStudentDetails(booking.studentId)}
            />
            <OutlineBtn
              text={"Confirm Booking"}
              className={"bg-red-100 border-red-200 text-red-200 font-medium"}
              onClick={() => heandleConform(booking.bookingId)}
            />
          </div>
        </div>
      ))}

      <Dialog
        open={StudentProfile}
        onClose={setStudentProfile}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-[16.4px] transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-black text-white pt-12 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full md:max-w-[90%] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex items-center px-11">
                <FaArrowLeft
                  className="text-2xl cursor-pointer"
                  onClick={() => setStudentProfile(false)}
                />
                <h2 className="font-semibold text-lg ml-4">Student Profile</h2>
              </div>
              <div>
                <div className="xl:py-20 py-10 bg-black px-14 relative flex items-center md:justify-between justify-center flex-wrap">
                  <div>
                    <h2 className="text-white text-[30px]">
                      {studentDetils?.name}
                    </h2>
                    <h2 className="text-white/50 text-[15px] md:text-left text-center md:mb-0 mb-5">
                      ({studentDetils?.joinedAs})
                    </h2>
                  </div>
                  <div className="w-[329px] h-[329px] rounded-full object-cover object-top grayscale scale-x-[-1] border-[5px] border-primary xl:absolute top-7 right-14 overflow-hidden">
                    <img src={studentDetils?.profile||User} />
                  </div>
                </div>
                <div className="py-14 bg-primary lg:px-14 px-6">
                  <div className="flex items-start justify-between flex-wrap">
                    <div>
                      <h3 className="text-black text-lg font-medium">
                        About Student
                      </h3>
                      <p className="text-black/70 text-lg 2xl:max-w-[871px] xl:max-w-[700px] w-full">
                        {studentDetils?.about ||
                          "Not found about details for that studnet"}
                      </p>
                      <div className="mt-[73px]">
                        <h3 className="text-black text-lg font-medium">
                          Additional Details
                        </h3>
                        <p className="text-black/70 text-lg 2xl:max-w-[871px] xl:max-w-[700px] w-full">
                          {studentDetils?.adetail ||
                            "Not found Additional Details for that studnet"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ActiveBookingRequests;
