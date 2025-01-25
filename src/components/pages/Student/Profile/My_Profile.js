import React, { useState } from "react";
import OutlineBtn from "../../common/OutlineBtn";
import CategoriesCard from "../../common/Categories_Card";
import { IoIosArrowRoundForward } from "react-icons/io";
import Wrestling from "../../../../assets/images/Wrestling.png";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Student_Profile_Details } from "../../../services/student/Profile/Profile";
import StudentProfile from "./StudentProfile";
import Spinner from "../../../layouts/Spinner";

const My_Profile = () => {

  const [loading, setLoading] = useState(false);
  const [Profiledetails, setProfiledetails] = useState({});
  const studentId = JSON.parse(localStorage.getItem("_id"));

  const GetProfiledetails = async () => {
    setLoading(true);
    const result = await Student_Profile_Details(studentId);
    if (result?.success === true) {
      setProfiledetails(result?.data);
      setLoading(false);

    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    GetProfiledetails();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <StudentProfile>
        <div className="border border-[#71717194] py-7 px-6 rounded-lg  mt-14">
          <p className="font-semibold text-lg">About Me</p>
          <p className="text-black/70 mt-1">
            {Profiledetails?.profile?.aboutMe || "No about found"}
          </p>
        </div>
        <div className="border border-[#71717194] py-7 px-6 rounded-lg mt-4 ">
          <p className="font-semibold text-lg">Additional Details</p>
          <p className="text-black/70 mt-1">
            {" "}
            {Profiledetails?.profile?.additionalDetail || "No about found"}
          </p>
        </div>
        <div className="border border-[#71717194] py-7 px-6 rounded-lg mt-4 min-h-[212px]">
          <p className="font-semibold text-lg">My Classes</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center gap-6 mt-3">
            {Profiledetails?.Myclass?.map((datas) => (
              <CategoriesCard data={datas} />
            ))}
          </div>
        </div>
        <div className="border border-[#71717194] py-7 px-6 rounded-lg mt-4 min-h-[212px]">
          <p className="font-semibold text-lg pb-4 border-b border-black/25">
            Payment History
          </p>
          <div className="mt-4 flex flex-col gap-4">
            {Profiledetails?.payments?.map((item) => (
              <div className="flex items-center justify-between border-b border-black/40 pb-4 flex-wrap">
                <div className="flex items-start gap-4 flex-wrap">
                  <img
                    src={item.instructor.profile_picture || Wrestling}
                    alt=""
                    className="sm:w-auto w-full sm:h-[95px] object-cover rounded-md"
                  />
                  <div className="sm:w-auto w-full flex flex-col gap-y-1.5">
                    <h2 className="text-base text-black font-semibold">
                      {item.className}
                    </h2>
                    <p className="text-black/50 max-w-[450px]">
                      {item.className}
                    </p>
                    <p className="text-sm font-medium text-black/70">
                      Course Duration:{" "}
                      <span className="font-normal">{item.classDuration}</span>{" "}
                    </p>
                    <p className="text-sm font-medium text-black/70">
                      Instructor Name:{" "}
                      <span className="font-normal">
                        {item.instructor.name}
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="sm:w-auto w-full">
                  <h2 className="text-2xl font-semibold sm:text-right sm:my-0 my-2">
                    ${item.paidAmount}
                  </h2>
                  <OutlineBtn
                    text={`Payment ${item.paymentStatus}`}
                    className={`${item.paymentStatus === "success"
                        ? "bg-green"
                        : "bg-red-200"
                      } text-white border-none px-4 sm:h-[35px] h-10 mt-1 sm:w-auto w-full`}
                    endicon={
                      <IoIosArrowRoundForward className="text-2xl ml-1 -rotate-45" />
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </StudentProfile>
    </>
  );
};

export default My_Profile;
