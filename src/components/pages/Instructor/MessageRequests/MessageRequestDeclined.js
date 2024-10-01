import React from "react";
import { FaPaperPlane } from "react-icons/fa6";
import User from "../../../../assets/images/userImage.png";
import OutlineBtn from "../../common/OutlineBtn";

const MessageRequestDeclined = () => {
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
            text={"Accepted on 15 July"}
            className={"bg-red-200 border-none text-white font-medium"}
          />
        </div>
      </div>
    </>
  )
}

export default MessageRequestDeclined