import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import OutlineBtn from "../../common/OutlineBtn";
import { BiPencil } from "react-icons/bi";
import { ShareIcon } from "../../../../assets/icon";
import GetInTouch from "../../common/Get_In_Touch";
import Wrestling from "../../../../assets/images/Wrestling.png";
import Boxing from "../../../../assets/images/Boxing.png";
import CategoriesCard from "../../common/Categories_Card";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  const data = [
    {
      images: Wrestling,
      headding: "Wrestling",
      details:
        "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
      Button: "Starts on 22 Aug",
    },
    {
      images: Boxing,
      headding: "Boxing",
      details:
        "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
      Button: "See Details",
    },
  ];

  const ProfileTeab = [
    {
      name: "My Profile",
      pathname: "/myprofile",
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
            className="w-[374px] h-[374px] rounded-full object-cover grayscale object-top scale-x-[-1]"
          />

          <div className="mt-[77px] flex flex-col gap-7">
            {ProfileTeab.map((items) => (
              <div className="pb-6 border-b border-black/30">
                <Link className="text-black font-bold text-xl underline">
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
          <div className="border border-[#71717194] py-7 px-6 rounded-lg min-h-[212px] mt-14">
            <p className="font-semibold text-lg">About Me</p>
            <p className="text-black/70 mt-1">
              Hi, I'm Emily Roberts! I started my martial arts journey 5 years
              ago and have been dedicated to improving my skills ever since.
              Training in Karate, Taekwondo, Brazilian Jiu-Jitsu has boosted my
              confidence, discipline, and physical fitness. I enjoy the
              challenges and continuous learning that come with martial arts.
              Outside of training, I love [hobbies/interests], which help keep
              me balanced and active. I'm grateful to be part of such a
              supportive martial arts community!
            </p>
          </div>
          <div className="border border-[#71717194] py-7 px-6 rounded-lg mt-4 min-h-[212px]">
            <p className="font-semibold text-lg">Additional Details</p>
            <p className="text-black/70 mt-1"></p>
          </div>
          <div className="border border-[#71717194] py-7 px-6 rounded-lg mt-4 min-h-[212px]">
            <p className="font-semibold text-lg">My Classes</p>
            <div className="flex items-center gap-6 mt-3">
              {data.map((datas) => (
                <CategoriesCard data={datas} />
              ))}
            </div>
          </div>
          <div className="border border-[#71717194] py-7 px-6 rounded-lg mt-4 min-h-[212px]">
            <p className="font-semibold text-lg pb-4 border-b border-black/25">
              Payment History
            </p>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-black/40 pb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={Wrestling}
                    alt=""
                    className=" h-[95px] object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-base text-black font-semibold">
                      Wrestling
                    </h2>
                    <p className="text-black/50 max-w-[450px]">
                      A grappling sport focused on takedowns, holds, and pins,
                      enhancing strength and agility.
                    </p>
                    <p className="text-sm font-medium text-black/70">
                      Course Duration:{" "}
                      <span className="font-normal">Time here</span>{" "}
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
                    text={"Payment Succeed"}
                    className={
                      "bg-green text-white border-none px-4 h-[35px] mt-1"
                    }
                    endicon={
                      <IoIosArrowRoundForward className="text-2xl ml-1 -rotate-45" />
                    }
                  />
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-black/40 pb-4">
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
                    <p className="text-black/50 max-w-[450px]">
                      A grappling sport focused on takedowns, holds, and pins,
                      enhancing strength and agility.
                    </p>
                    <p className="text-sm font-medium text-black/70">
                      Course Duration:{" "}
                      <span className="font-normal">Time here</span>{" "}
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
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default StudentProfile;
