import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import GetInTouch from "../../common/Get_In_Touch";
import { Link, useLocation } from "react-router-dom";
import My_Profile from "./My_Profile";
import LogInDetails from "./LogInDetails";
import { BiPencil } from "react-icons/bi";
import { ShareIcon } from "../../../../assets/icon";
import OutlineBtn from "../../common/OutlineBtn";
import ForgotPassword from "./ForgotPassword";

const StudentProfile = () => {
  const ProfileTeab = [
    {
      name: "My Profile",
      pathname: "/student/my_profile",
    },
    {
      name: "Log In Details",
      pathname: "/myprofile",
    },
    {
      name: "Forgot Password",
      pathname: "/myprofile",
    },
    {
      name: "Reset Password",
      pathname: "/myprofile",
    },
    {
      name: "Favorite Instructors",
      pathname: "/myprofile",
    },
    {
      name: "Booking History",
      pathname: "/myprofile",
    },
  ];
  const { pathname } = useLocation();

  return (
    <>
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
      <div className="grid md:grid-cols-4 gap-11 ">
        <div className="w-full pl-10 pt-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/c9d6/ec66/592fab583ee733ef0ca4062635a2de72?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Taj7qBpE1SBEUd8MsMfOFxTmmH9neTGLC-1TKL~RyZS2rQs0dKWcO3Ol4XzG3zhkvbtfLAdy0qPCNd8OSrEe71y4NHmngqkdsxSBoUycRnJ3B4Jik8aX-QG8GQuwajaE6ycMN2P-MsfMXYYSYCCQPety70ubet6cvbjqQSqoohNZeM-RyRyzeAdEPo7P~HusKWJsdKwyiKkSUf90kqMApuDgWaw4IZOPDjp6EM5~XZBFuegp9OdrLzENibOO2BIL0hu3XVCj~D9XQVc6s5G-XRNXardHsBzMbRZcHeezLJnJpPq7LOtDXniuYJOXHsbILtMJfq6VSb80UNUuQa1Ung__"
            alt=""
            className="min-w-[274px] h-[274px] rounded-full object-cover grayscale object-top scale-x-[-1]"
          />

          <div className="mt-[77px] flex flex-col gap-7">
            {ProfileTeab.map((items) => (
              <div className="pb-6 border-b border-black/30">
                <Link
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
              Emily Roberts{" "}
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
            <div className="w-[75%] h-full bg-green rounded-full flex items-center justify-center text-white">
              75%
            </div>
          </div>
          <p className="text-black/50 mt-1">
            Your profile is incomplete.{" "}
            <span className="text-red-200 underline">Complete Now</span>
          </p>
          {/* <My_Profile /> */}
          {/* <LogInDetails /> */}
          <ForgotPassword />
        </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default StudentProfile;