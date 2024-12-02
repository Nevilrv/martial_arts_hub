import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa6";
import GetInTouch from "../../common/Get_In_Touch";
import { Link, useLocation } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { ShareIcon } from "../../../../assets/icon";
import OutlineBtn from "../../common/OutlineBtn";
import { Routing } from "../../../shared/Routing";
import { Student_Profile_Details } from "../../../services/student/Profile/Profile";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import User from "../../../../assets/images/userProfile.jpg"

const StudentProfile = ({ children }) => {
  const ProfileTeab = [
    {
      name: "My Profile",
      pathname: Routing.StudentProfile,
    },
    {
      name: "Log In Details",
      pathname: Routing.StudentLogInDetails,
    },
    {
      name: "Forgot Password",
      pathname: Routing.Student_Forgot_Password,
    },
    {
      name: "Reset Password",
      pathname: Routing.Student_Reset_Password,
    },
    {
      name: "Favorite Instructors",
      pathname: Routing.Student_Favorite_Instructors,
    },
    {
      name: "Booking History",
      pathname: Routing.Student_Booking_History,
    },
  ];

  const [loading, setLoading] = useState(false);
  const [Profiledetails, setProfiledetails] = useState({});
  const studentId = JSON.parse(localStorage.getItem("_id"));

  const GetProfiledetails = async () => {
    setLoading(true);
    const result = await Student_Profile_Details(studentId);
    if (result?.success === true) {
      setProfiledetails(result?.data);
      setLoading(false);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    GetProfiledetails();
    // eslint-disable-next-line
  }, []);
  const { pathname } = useLocation();

  return (
    <>
      {loading && <Spinner />}
      <div className="bg-black px-[52px] pb-[47px] ">
        <div className="flex items-center justify-end">
          <div>
            <p className="text-right mt-[73px]">
              <FaQuoteRight className="text-5xl ml-auto text-primary/20 text-right" />
            </p>
            <p className="text-[26px] text-white text-right max-w-[525px]">
              We are what we repeatedly do. Excellence then is not an act but a
              habit.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-11">
        <div className="w-full pl-10 pt-10">
          <img
            src={Profiledetails?.profile?.profile_picture||User}
            alt=""
            className="min-w-[274px] h-[274px] rounded-full object-cover grayscale object-top scale-x-[-1]"
          />

          <div className="mt-[77px] flex flex-col gap-7">
            {ProfileTeab.map((items) => (
              <div className="pb-6 border-b border-black/30">
                <Link
                  to={items.pathname}
                  className={`${
                    pathname === items.pathname
                      ? "underline text-black font-bold text-xl"
                      : "text-black/70 text-xl"
                  }`}
                >
                  {items.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:col-span-3 pt-10 pr-12 pb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-Dark_black text-[40px] font-bold">
              {Profiledetails?.profile?.studentName}
              <span className="text-Dark_black/50 text-2xl font-normal">
                (Student)
              </span>
            </h2>
            <div className="flex items-center gap-2">
              <OutlineBtn
                text={"Edit"}
                className={"text-black font-semibold border-[#71717194]"}
                icon={<BiPencil className="text-gay-300 text-2xl" />}
              />
              <OutlineBtn
                text={"Share"}
                className={"text-white font-semibold bg-red-200 border-none"}
                icon={<ShareIcon color={"#fff"} />}
              />
            </div>
          </div>
          <div className="w-[120px] h-[27px] bg-gay-250 rounded-full mt-2 overflow-hidden">
            <div
              className={`w-[${JSON.stringify(Profiledetails?.profile?.profile_completion)}%] h-full bg-green rounded-full flex items-center justify-center text-white`}
            >
              {Profiledetails?.profile?.profile_completion}%
            </div>
          </div>
          <p className="text-black/50 mt-1">
            Your profile is incomplete.{" "}
            <span className="text-red-200 underline">Complete Now</span>
          </p>
          {children}
        </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default StudentProfile;
