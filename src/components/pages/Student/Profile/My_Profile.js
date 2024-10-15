import React from "react";
import OutlineBtn from "../../common/OutlineBtn";
import CategoriesCard from "../../common/Categories_Card";
import { IoIosArrowRoundForward } from "react-icons/io";
import Wrestling from "../../../../assets/images/Wrestling.png";
import Boxing from "../../../../assets/images/Boxing.png";
import StudentProfile from "./StudentProfile";

const My_Profile = () => {

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
    

  return (
    <>
    <StudentProfile>
      <div className="border border-[#71717194] py-7 px-6 rounded-lg min-h-[212px] mt-14">
        <p className="font-semibold text-lg">About Me</p>
        <p className="text-black/70 mt-1">
          Hi, I'm Emily Roberts! I started my martial arts journey 5 years ago
          and have been dedicated to improving my skills ever since. Training in
          Karate, Taekwondo, Brazilian Jiu-Jitsu has boosted my confidence,
          discipline, and physical fitness. I enjoy the challenges and
          continuous learning that come with martial arts. Outside of training,
          I love [hobbies/interests], which help keep me balanced and active.
          I'm grateful to be part of such a supportive martial arts community!
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
                className={"bg-green text-white border-none px-4 h-[35px] mt-1"}
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
      </StudentProfile>
    </>
  );
};

export default My_Profile;
