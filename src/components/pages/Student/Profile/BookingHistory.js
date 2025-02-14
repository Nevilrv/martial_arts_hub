import React, { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";
import { IoIosArrowRoundForward } from "react-icons/io";
import Boxing from "../../../../assets/images/Boxing.png";
import OutlineBtn from "../../common/OutlineBtn";
import { Student_Booking_History } from "../../../services/student/Profile/Profile";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import dayjs from "dayjs";

const BookingHistory = () => {
  const [loading, setLoading] = useState(false);
  const [Student_Booking, setStudent_Booking] = useState([]);
  const studentId = JSON.parse(localStorage.getItem("_id"));

  const Get_Student_Booking = async () => {
    setLoading(true);
    const result = await Student_Booking_History(studentId);
    if (result?.success === true) {
      setLoading(false);
      setStudent_Booking(result?.data);

    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Student_Booking();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <StudentProfile>
        <div className="border border-[#71717194] py-7 px-6 rounded-lg mt-14">
          <h2 className="text-Dark_black text-2xl font-semibold">
            Booking History
          </h2>
          {Student_Booking.map((Booking) => (
            <div className="flex items-center justify-between border-b mt-8 border-black/40 pb-4">
              <div className="flex items-start gap-4">
                <img
                  src={Booking.instructor.profile_picture || Boxing}
                  alt=""
                  className=" h-[95px] object-cover rounded-md"
                />
                <div>
                  <h2 className="text-base text-black font-semibold">
                    {Booking.className}
                  </h2>
                  <p className="text-sm font-medium text-black/70">
                    Class Date:{" "}
                    <span className="font-normal">
                      {dayjs(Booking.createdAt).format("DD MMM, YYYY")}
                    </span>{" "}
                  </p>
                  <p className="text-sm font-medium text-black/70">
                    Instructor Name:{" "}
                    <span className="font-normal">
                      {Booking.instructor.name}
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-right">{Booking.paidAmount}</h2>
                <OutlineBtn
                  text={Booking.paymentStatus}
                  className={`${Booking.paymentStatus === "success"
                      ? "bg-green"
                      : "bg-red-200"
                    } text-white border-none px-4 h-[35px] mt-1`}
                  endicon={
                    <IoIosArrowRoundForward className="text-2xl ml-1 -rotate-45" />
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </StudentProfile>
    </>
  );
};

export default BookingHistory;
