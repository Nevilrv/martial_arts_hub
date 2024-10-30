import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import OutlineBtn from "../../common/OutlineBtn";
import Instructor1 from "../../../../assets/images/Instructor-4.png";
// import { LuEye } from "react-icons/lu";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";

const DisputeDetails = () => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-x-5 flex-wrap sm:justify-start justify-center">
          <FaArrowLeft className="text-2xl" />
          <h2 className="text-Dark_black font-bold text-2xl">
            Dispute Details
          </h2>
          <p className="text-[#6F6F6F] text-[15px] sm:-ml-5 sm:text-left text-center mt-2">
            (Dispute Center/All Dispute Requests/View Details)
          </p>
        </div>
        <OutlineBtn
          text="Close Dispute"
          className="text-white bg-red-200 border-none sm:w-auto w-full"
        />
      </div>
      <div className="mt-7 bg-primary p-7 rounded-xl">
        <div className="grid md:grid-cols-2 gap-y-3">
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute ID:</h3>
            <p className="text-Dark_black font-[450]">#2221</p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Raised Date:</h3>
            <p className="text-Dark_black font-[450]">05/07/2024</p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Raised by:</h3>
            <p className="text-Dark_black font-[450]">Emily Roberts</p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Amount:</h3>
            <p className="text-Dark_black font-[450]">$4.00</p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Against:</h3>
            <p className="text-Dark_black font-[450]">Keyn Mojho</p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Status:</h3>
            <p className="text-green font-[450]">
              {" "}
              <span className="h-2 w-2 rounded-full bg-green inline-block mr-0.5"></span>{" "}
              Active
            </p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Type/Reason:</h3>
            <p className="text-Dark_black font-[450]">
              Miscommunication Regarding Class
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-7">
        <div className="bg-primary p-7 rounded-xl">
          <p className="text-gay-300 text-base">
            Detailed description of dispute given by Student
          </p>
          <p className="text-black text-lg mt-3">
            The class content delivered by the instructor significantly deviated
            from what was initially promised. The syllabus outlined during the
            course introduction did not align with the actual lessons. Important
            topics were either briefly mentioned or entirely skipped, leaving
            gaps in the promised learning outcomes.
          </p>
        </div>
        <div className="bg-primary p-7 rounded-xl">
          <p className="text-gay-300 text-base">
            Evidence(screenshots, documents, receipts)
          </p>
          <div className="flex items-center gap-3 mt-5 flex-wrap sm:justify-start justify-center">
            <Zoom className="sm:w-auto w-full">
              <div className="sm:mx-0 mx-auto w-[125px] h-[100px] rounded-md overflow-hidden group relative cursor-pointer">
                <img
                  src={Instructor1}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
                {/* <div className="h-7 w-7 rounded-full bg-[#0F0F0F5E] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 eye_bg items-center justify-center flex opacity-0 group-hover:opacity-100 duration-[0.5s]">
                  <LuEye className="text-white text-sm" />
                </div> */}
              </div>
            </Zoom>
            <Zoom className="sm:w-auto w-full">
              <div className="sm:mx-0 mx-auto w-[125px] h-[100px] rounded-md overflow-hidden group relative cursor-pointer">
                <img
                  src={Instructor1}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
                {/* <div className="h-7 w-7 rounded-full bg-[#0F0F0F5E] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 eye_bg items-center justify-center flex opacity-0 group-hover:opacity-100 duration-[0.5s]">
                  <LuEye className="text-white text-sm" />
                </div> */}
              </div>
            </Zoom>
            <Zoom className="sm:w-auto w-full">
              <div className="sm:mx-0 mx-auto w-[125px] h-[100px] rounded-md overflow-hidden group relative cursor-pointer">
                <img
                  src={Instructor1}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
                {/* <div className="h-7 w-7 rounded-full bg-[#0F0F0F5E] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 eye_bg items-center justify-center flex opacity-0 group-hover:opacity-100 duration-[0.5s]">
                  <LuEye className="text-white text-sm" />
                </div> */}
              </div>
            </Zoom>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-Dark_black font-bold text-2xl">
          Group Chat (Review)
        </h2>
        <p className="text-[#6F6F6F] text-sm mt-2">
          In this step, the dispute raiser and defendant will negotiate the
          issue. As Admin, you can monitor all messages and step in with replies
          when necessary.
        </p>
        <div className="mt-6 bg-primary rounded-xl pt-10 lg:px-6 px-3 pb-7">
          <div className="flex flex-col gap-8 max-h-">
            {/* student chat */}
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <img src={Instructor1} alt="" className="w-full h-full" />
              </div>
              <div className="max-w-[75%]">
                <div className="w-full p-4 bg-red-100 rounded-xl text-gay-400 text-sm rounded-tl-none border border-red-200/15">
                  At this stage, students and instructors can discuss about the
                  dispute, and the Admin can monitor and provide input.
                </div>
                <p className="text-red-200 text-xs mt-2">
                  Student | July 23, 2024 at 05:43 IST
                </p>
              </div>
            </div>
            {/* admin chat */}
            <div className="flex items-start gap-4 justify-end">
              <div className="max-w-[75%]">
                <div className="p-4 bg-black rounded-xl text-white text-sm rounded-tr-none border border-red-200/15">
                  At this stage, students and instructors can discuss about the
                  dispute, and the Admin can monitor and provide input.
                </div>
                <p className="text-black text-xs mt-2 text-right">
                  Student | July 23, 2024 at 05:43 IST
                </p>
              </div>
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <img src={Instructor1} alt="" className="w-full h-full" />
              </div>
            </div>
            {/* student chat */}
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <img src={Instructor1} alt="" className="w-full h-full" />
              </div>
              <div className="max-w-[75%]">
                <div className="w-full p-4 bg-red-100 rounded-xl text-gay-400 text-sm rounded-tl-none border border-red-200/15">
                  At this stage, students and instructors can discuss about the
                  dispute, and the Admin can monitor and provide input. At this
                  stage, students and instructors can discuss about the dispute,
                  and the Admin can monitor and provide input.
                </div>
                <p className="text-red-200 text-xs mt-2">
                  Student | July 23, 2024 at 05:43 IST
                </p>
              </div>
            </div>
            {/* admin chat */}
            <div className="flex items-start gap-4 justify-end">
              <div className="max-w-[75%]">
                <div className="p-4 bg-black rounded-xl text-white text-sm rounded-tr-none border border-red-200/15">
                  At this stage, students and instructors can discuss about the
                  dispute, and the Admin can monitor and provide input. At this
                  stage, students and instructors can discuss about the dispute,
                  and the Admin can monitor and provide input.
                </div>
                <p className="text-black text-xs mt-2 text-right">
                  Student | July 23, 2024 at 05:43 IST
                </p>
              </div>
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <img src={Instructor1} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="mt-7 flex items-center gap-2 justify-between">
            <div className="relative 2xl:w-[70%] xl:w-[50%] w-[80%]">
              <input
                type="text"
                className="w-full py-6 bg-[#DAD8D0] block h-[75px] text-lg px-7 pr-[84px] rounded-full focus:outline-none placeholder:text-black/40"
                placeholder="Write your message here"
              />
              <button className="bg-transparent text-red-200 border-none text-lg font-medium absolute top-1/2 -translate-y-1/2 right-6">
                Send
              </button>
            </div>
            <div className="items-center justify-between gap-2 xl:flex hidden">
              <OutlineBtn text="Move to Arbitration Stage" />
              <OutlineBtn className="bg-red-200 text-white border-none" text="Close Dispute" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisputeDetails;
