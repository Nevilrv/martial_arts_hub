import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import GetInTouch from "../../common/Get_In_Touch";
import { Link, useLocation } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { ShareIcon } from "../../../../assets/icon";
import OutlineBtn from "../../common/OutlineBtn";
import { Routing } from "../../../shared/Routing";

const StudentProfile = ({children}) => {
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
      <div className="grid md:grid-cols-4 gap-11">
        <div className="w-full pl-10 pt-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/c9d6/ec66/592fab583ee733ef0ca4062635a2de72?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYaw9pE9k-4BVd0TwMqP6cOE0XxBw3CfwlUiPg~ij6oPfV02fnA6DGMIowASMHqxNP5apYfUNR7CsLK9ZVMuI95SU6ShDEkS09BL6WJHaQBrjdaDcy5I7htyoLIJ3Rs-mfSvDyCTAlh4UbK-KAP8Id58EAlEDgYKEer46TwUwOM7yJQAqaPB9boc4TOR9pR0l7XHHPKkDrUqKMEypJKGrQsll7Nos3LI97MVDuhn3sqxUmSJEhNsuNpJiG9Oty7TK~UyUfP5qLIGnbLYRIjEYgxR6A-cHBKSfYx66htLYA6ZHcsun3WgF6oMqP-LfFh768JsWOeEgUOq8WhO-mDb4A__"
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
          {children}
        </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default StudentProfile;
