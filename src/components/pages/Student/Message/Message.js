import React from "react";
import Tabs from "../Tabs";
import { CiSearch } from "react-icons/ci";
import User from "../../../../assets/images/userImage.png";
import master from "../../../../assets/images/Instructor-4.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { ShareIcon } from "../../../../assets/icon";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiCheckDoubleFill } from "react-icons/ri";

const Chat = () => {
  return (
    <>
      <Tabs>
        <div className="grid md:grid-cols-4 grid-cols-1 h-[calc(100vh-180px)] overflow-y-auto">
          <div className="py-7 border-r border-[#6b6b6b63] ">
            <div className="px-4 mb-3">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-[55px] border border-black/30 bg-transparent rounded-full placeholder:text-black/40 pl-[55px] focus:outline-none"
                  placeholder="Search person"
                />
                <CiSearch className="absolute top-1/2 -translate-y-1/2 left-6 text-2xl" />
              </div>
            </div>
            <div className="h-[95px] border-b border-[#6B6B6B4D] px-4 flex items-center">
              <div className="flex items-center w-full">
                <div className="relative">
                  <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                    <img src={User} alt="" srcset="" className="grayscale" />
                  </div>
                  <div className="h-4 w-4 bg-green rounded-full absolute bottom-0 right-0 border-[3px] border-primary"></div>
                </div>
                <div className="ml-3 w-full">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="text-lg font-semibold">Kiya John</h2>
                    <p className="text-black/50 text-[11px] font-semibold">
                      09:27 AM
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-ellipsis w-[241px] overflow-hidden text-nowrap text-sm text-black/50">
                      Yes, sure! Learning Brazilian jiu jitsu Yes, sure!
                      Learning Brazilian jiu jitsu Yes, sure! Learning Brazilian
                      jiu jitsu Yes, sure! Learning Brazilian jiu jitsu
                    </p>
                    <div className="w-[25px] h-[18px] bg-green flex items-center justify-center rounded-full text-white text-[11px]">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 px-5 relative">
            <div className="h-[95px] bg-primary_dark px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[62px] h-[62px] rounded-full overflow-hidden grayscale">
                  <img src={User} alt="" srcset="" className="scale-x-[-1]" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Emily Roberts</h2>
                  <p className="text-black/50 text-[13px]">Student</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="cursor-pointer">
                  <ShareIcon />
                </div>
                <div className="cursor-pointer">
                  <BsThreeDotsVertical className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="max-w-[95%] bg-red-100 h-[55px] text-red-200/70 rounded-full mx-auto mt-8 flex items-center justify-between px-6">
              <p>
              You can send only 10 messages for now. To chat more, you need to book a session.
              </p>
              <h2 className="text-base text-red-200 font-semibold underline">Book Class Now</h2>
            </div>
            <div className="flex flex-col justify-end px-5 mt-auto h-[68%] overflow-y-auto pb-10">
              <div className="flex justify-between flex-col ">
                <div className="flex items-start gap-3">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src={master} alt="" srcset="" />
                  </div>
                  <div>
                    <div className="max-w-[335px] bg-white px-[18px] py-3 font-medium rounded-xl rounded-tl-none">
                      <p className="text-[15px]">
                        Hello! I want to know about Brazilian Jiu Jitsu. In how
                        much time i will learn it?
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1 ml-1">
                      <p className="font-semibold text-[11px] text-black/50">
                        09:10 AM
                      </p>
                      <RiCheckDoubleFill className="text-green" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div>
                    <div className="max-w-[380px] bg-black px-[18px] py-3 font-medium rounded-xl rounded-tr-none">
                      <p className="text-[15px] text-white text-right">
                        Yes, sure! Learning Brazilian Jiu Jitsu varies for each
                        person. On average, it takes several months to a few
                        years to become proficient.
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-2 mt-1 ml-1">
                      <RiCheckDoubleFill className="text-green" />
                      <p className="font-semibold text-[11px] text-black/50">
                        09:10 AM
                      </p>
                    </div>
                  </div>
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden grayscale">
                    <img src={User} alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[97%] absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="relative w-full h-full">
                <input
                  type="text"
                  className="w-full bg-transparent border border-black/30 h-[60px] rounded-full  px-4 placeholder:text-black/40 pr-[70px] focus:outline-none"
                  placeholder="Write your message here"
                />
                <button className="absolute top-1/2 -translate-y-1/2 right-6 font-semibold text-red-200">Send</button>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Chat;
