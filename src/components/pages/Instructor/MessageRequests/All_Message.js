import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import User from "../../../../assets/images/userImage.png";
import OutlineBtn from "../../common/OutlineBtn";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaArrowLeft } from "react-icons/fa";

const All_Message = () => {
  const [MessageRequest, setMessageRequest] = useState(false);
  return (
    <>
      {/* <div className="flex items-center justify-center flex-col h-[calc(100vh-409px)]">
          <FaPaperPlane className='text-[80px] text-[#BDBBB5]' />
          <h2 className="text-[26px] font-medium text-center mt-7">
          Requests list is empty!
          </h2>
          <p className="text-lg text-gay-300 max-w-[490px] mx-auto text-center">
          You haven't received any requests yet! When student send inquiry message It’s details will be shown here.
          </p>
        </div>  */}

      <div className="px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400">
        <div className="flex items-center">
          <div className="w-[82px] h-[82px] overflow-hidden rounded-full">
            <img
              src={User}
              alt="Wrestling"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          <div className="ml-5">
            <h2 className="text-black texrt-[20px] font-medium">
              Emily Roberts
            </h2>
            <div className="flex items-center">
              <p className="text-[13px] text-black/70  mt-0.5">
                <span className="font-medium">Request received on:</span> 15
                July, 2024
              </p>
              <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
              <p className="text-[13px] text-black/70  mt-0.5">
                <span className="font-medium">Inquiry class:</span>
                Boxing
              </p>
            </div>
            <p className="text-black/70 text-base max-w-5xl">
              Hello Instructor, My name is Emily Roberts, and I am interested in
              joining your online martial arts course. Could you please provide
              me with some more details
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <OutlineBtn
            text={"See Profile"}
            className={"bg-transparent border-black text-black"}
          />
          <OutlineBtn
            text={"View Request"}
            className={"bg-green border-none text-white font-medium"}
            onClick={()=>setMessageRequest(true)}
          />
        </div>
      </div>

      <Dialog open={MessageRequest} onClose={setMessageRequest} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-[16.4px] transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-11 py-12 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-full sm:max-w-5xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex items-center">
                <FaArrowLeft className="text-2xl text-black cursor-pointer" onClick={()=>setMessageRequest(false)} />
                <h2 className="font-semibold text-lg ml-4">Message Request</h2>
              </div>
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                      <img src={User} alt="User" className="grayscale" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-black texrt-[20px] font-semibold">
                        Emily Roberts
                      </h2>
                      <div className="flex items-center">
                        <p className="text-[13px] text-black/70  mt-0.5">
                          <span className="font-medium">
                            Request received on:
                          </span>{" "}
                          15 July, 2024
                        </p>
                        <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                        <p className="text-[13px] text-black/70  mt-0.5">
                          <span className="font-medium">Inquiry class:</span>
                          Boxing
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <OutlineBtn
                      text={"Decline"}
                      className={"bg-transparent border-red-200 text-red-200"}
                    />
                    <OutlineBtn
                      text={"Accept"}
                      className={"bg-green border-none text-white font-medium"}
                    />
                  </div>
                </div>
                <div className="mt-6 py-6 px-5">
                  <p className="text-base text-black font-medium break-words">
                    Hello Instructor,
                    My name is Emily Roberts, and I am
                    interested in joining your online martial arts course. Could
                    you please provide me with some more details about the
                    course? Specifically, I would like to know: The schedule and
                    duration of the classes.
                    The different levels of training
                    offered. 
                    Any prerequisites or prior experience needed. 
                    I am
                    eager to start training and would appreciate any information
                    you can provide to help me make an informed decision.
                     Thank
                    you for your time, and I look forward to hearing from you
                    soon. 
                    Best regards, 
                    Emily Roberts
                  </p>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default All_Message;
