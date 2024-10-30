import React from "react";
import { FiPlus } from "react-icons/fi";
import OutlineBtn from "../../../common/OutlineBtn";
import dayjs from "dayjs";
import Boxing from "../../../../../assets/images/Boxing.png"

const ClassRequestcard = ({ cardDetails, data }) => {
  return (
    <>
      <div className=" bg-gay-600 rounded-3xl px-8 py-7 h-[512px] overflow-y-auto">
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
        {data.map((classdata) => (
          <div className="flex items-start mt-6 gap-3">
            <img
              src={Boxing}
              className="w-[80px] h-[66px] rounded-lg grayscale"
              alt=""
            />
            <div className="w-full">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-black text-xl font-semibold">
                  {classdata.className}
                </h2>
                <OutlineBtn
                  text={`Start on ${dayjs(classdata.classdate).format("DD-MM-YYYY")}`}
                  className={
                    "w-[160px] bg-gay-300/50 text-white border-none text-[11px] h-[28px]"
                  }
                  onClick={()=>window.open(classdata.instructor_url, '_blank', 'noopener,noreferrer')}
                />
              </div>
              <div className="mt-1">
                <div className="flex items-center">
                  <p className="text-black/50 text-[15px] font-semibold">
                    Class Date:
                  </p>
                  <p className="text-black/70 text-[12px] font-light">
                    {classdata.classdate}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <p className="text-black/50 text-[15px] font-semibold">
                    Created on:{" "}
                  </p>
                  <p className="text-black/70 text-[13px] font-light">
                    {classdata.createdOn}
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[3px] w-[3px] rounded-full bg-black/70 mx-0.5"></span>
                </div>

                <div className="flex items-center">
                  <p className="text-black/50 text-[15px] font-semibold">
                    Class Time:{" "}
                  </p>
                  <p className="text-black/70 text-[13px] font-light">
                    {classdata.classTime}
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[3px] w-[3px] rounded-full bg-black/70 mx-0.5"></span>
                </div>
                <div className="flex items-center">
                  <p className="text-black/50 text-[15px] font-semibold">
                    Class Rate:{" "}
                  </p>
                  <p className="text-red-200 text-[13px] font-semibold">
                    ${classdata.classRate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClassRequestcard;
