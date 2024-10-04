import React from "react";
import { FaPlus } from "react-icons/fa6";
import Tabs from "../";
import OutlineBtn from "../../common/OutlineBtn";
import { TbFilterSearch } from "react-icons/tb";
import { LiaAngleDownSolid } from "react-icons/lia";
import User from "../../../../assets/images/userImage.png";


const EarningsReport = () => {
  return (
    <>
      <Tabs>
        <div className="mt-11 px-3 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-black text-3xl font-semibold">
                Earnings Report
              </h1>
              <p className="text-black/70 text-base">
                Your earning history will be shown here
              </p>
            </div>
            <div>
              <p className="text-black/70 text-base">Total earnings</p>
              <h1 className="text-red-200 text-3xl font-semibold">$99.00</h1>
            </div>
          </div>
          <div className="flex items-center mt-5 gap-2">
            <OutlineBtn
              text={"Filter by"}
              icon={<TbFilterSearch className="text-[#6B6B6B] mr-1" />}
              className={`bg-transparent text-black`}
            />
            <OutlineBtn
              text={"All"}
              className={`bg-gay-300 text-white font-semibold min-w-[75px]`}
            />
            <OutlineBtn
              text={"Price"}
              endicon={
                <LiaAngleDownSolid className="text-[#6B6B6B] text-sm ml-2" />
              }
              className={`bg-transparent text-black`}
            />
            <OutlineBtn
              text={"Last month"}
              endicon={
                <LiaAngleDownSolid className="text-[#6B6B6B] text-sm ml-2" />
              }
              className={`bg-transparent text-black`}
            />
          </div>
        </div>
        <div>
          <div className="px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400">
            <div className="flex items-center">
              <div className="w-[60px] h-[60px] overflow-hidden rounded-full">
                <img
                  src={User}
                  alt="Wrestling"
                  className="w-full h-full object-cover object-top grayscale scale-x-[-1]"
                />
              </div>
              <div className="ml-5">
                <h2 className="text-black texrt-[20px] font-semibold">
                  Emily Roberts
                </h2>
                <div className="flex items-center">
                  <p className="text-[13px] text-black/70  mt-0.5">
                    <span className="font-medium">Class Name: </span>Boxing
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                  <p className="text-[13px] text-black/70  mt-0.5">
                    <span className="font-medium">Class Date: </span>
                    26 July, 2024
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                  <p className="text-[13px] text-black/70  mt-0.5">
                    <span className="font-medium"> Joined on:</span>
                    15 July, 2024
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-red-200 text-xl font-semibold">$4.99</h1>
          </div>
        </div>
        <div>
          <div className="px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400">
            <div className="flex items-center">
              <div className="w-[60px] h-[60px] overflow-hidden rounded-full">
                <img
                  src={User}
                  alt="Wrestling"
                  className="w-full h-full object-cover object-top grayscale scale-x-[-1]"
                />
              </div>
              <div className="ml-5">
                <h2 className="text-black texrt-[20px] font-semibold">
                  Emily Roberts
                </h2>
                <div className="flex items-center">
                  <p className="text-[13px] text-black/70  mt-0.5">
                    <span className="font-medium">Class Name: </span>Boxing
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                  <p className="text-[13px] text-black/70  mt-0.5">
                    <span className="font-medium">Class Date: </span>
                    26 July, 2024
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                  <p className="text-[13px] text-black/70  mt-0.5">
                    <span className="font-medium"> Joined on:</span>
                    15 July, 2024
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-red-200 text-xl font-semibold">$5.99</h1>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default EarningsReport;
