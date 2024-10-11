import React from "react";
import { FiPlus } from "react-icons/fi";
import OutlineBtn from "../../common/OutlineBtn";

const ClassRequestcard = ({ cardDetails, data }) => {
  return (
    <>
      <div className=" bg-gay-600 rounded-3xl px-8 py-7">
        <div className="flex items-center justify-between">
          <h3 className="text-gay-300 text-lg font-medium">
            {cardDetails.CardTitle}
          </h3>
          {cardDetails.Plus !== false ? (
            <div className="h-7 w-7 rounded-full bg-black flex items-center justify-center text-white">
              <FiPlus className="text-white text-xl" />
            </div>
          ) : null}
        </div>
        {data === null ||
          data === undefined ||
          (data === "" && (
            <div className="flex items-center justify-center flex-col mt-24">
              {cardDetails.CardIcon}
              <h3 className="text-black font-semibold text-lg">
                {cardDetails.CardHeadding}
              </h3>
              <p
                className={`text-gay-300 text-[13px] text-center mx-auto ${
                  cardDetails.CardDetailsclassName || "max-w-[346px]"
                }`}
              >
                {cardDetails.CardDetails}
              </p>
            </div>
          ))}
        <div className="flex items-start mt-6 gap-3">
          <img
            src="https://s3-alpha-sig.figma.com/img/2fe6/1b02/a6fc3775810732971788141798f832b9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hqxT7A4rpf~x52dGl9yeBX-cJmW4XWjoZASVIlUrUIrVTulVVpE71~14pKM~EhT5MI297du7X9-fmPJX1rnAC8hsbaQtvwmTq64mbvJW61-7ePiwOzWZHmuHLWffjADVq4-DdfOYbtQstyWHoBaElPQcr8oO~K2kR8-ZV-ftCuXkNh4mTsFz4DCS072GEeYTUFgmDYPxOu23HAV~FHvh9yJhv7Cx42SImCi2mly-Edw5HYINcQeW-O2RBBINovqMP1vSbmV7wmTMv4pq2bqoYYdAq0gDNVWXAhOuIWlmEResBbz3TIAkS-b8Ep3G3Ch3dUd6j0~hvKs~RbPE9r9OqA__"
            className="w-[80px] h-[66px] rounded-lg grayscale"
            alt=""
          />
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-black text-xl font-semibold">Boxing</h2>
              <OutlineBtn
                text={"Start on 29 July at 12:30 PM"}
                className={
                  "w-[160px] bg-gay-300/50 text-white border-none text-[9px] h-[28px]"
                }
              />
            </div>
            <div className="mt-1">
              <div className="flex items-center">
                <p className="text-black/50 text-[15px] font-semibold">Class Date:</p>
                <p className="text-black/70 text-[12px] font-light">29 July, 2024</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <p className="text-black/50 text-[15px] font-semibold">Created on: </p>
                <p className="text-black/70 text-[13px] font-light">10 July, 2024</p>
                <span className="text-xl mt-1 text-black/70 h-[3px] w-[3px] rounded-full bg-black/70 mx-0.5"></span>
              </div>
              
              <div className="flex items-center">
                <p className="text-black/50 text-[15px] font-semibold">Class Time: </p>
                <p className="text-black/70 text-[13px] font-light">12:30 PM</p>
                <span className="text-xl mt-1 text-black/70 h-[3px] w-[3px] rounded-full bg-black/70 mx-0.5"></span>
              </div>
              <div className="flex items-center">
                <p className="text-black/50 text-[15px] font-semibold">Class Rate: </p>
                <p className="text-red-200 text-[13px] font-semibold">$4.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassRequestcard;
