import React from "react";
import { FiPlus } from "react-icons/fi";
import OutlineBtn from "../../../common/OutlineBtn";
import dayjs from "dayjs";
import Boxing from "../../../../../assets/images/Boxing.png";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../../shared/Routing";

const ClassRequestcard = ({ cardDetails, data }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-gay-600 rounded-3xl px-8 py-7 h-full overflow-auto" id="hideScoll">
        <div className="flex items-center justify-between ">
          <h3 className="text-gay-300 text-lg font-medium">
            {cardDetails.CardTitle}
          </h3>
        </div>
        {data.length <= 0 && (
          <div className="flex items-center justify-center flex-col mt-20">
            {cardDetails.CardIcon}
            <h3 className="text-black font-semibold text-lg">
              {cardDetails.CardHeadding}
            </h3>
            <p
              className={`text-gay-300 text-[13px] text-center mx-auto ${cardDetails.CardDetailsclassName || "max-w-[346px]"
                }`}
            >
              {cardDetails.CardDetails}
            </p>
          </div>
        )}
        {data.map((classdata) =>
          classdata?.classStatus === "upcoming" ? (
            <div className="sm:flex items-center gap-5 w-full py-3" >
              <div className="flex justify-center">
                <img src={classdata?.profile} className="sm:h-[80px] sm:w-[150px] w-[150px] h-[150px] rounded-full sm:rounded-lg object-cover grayscale" alt="" />
              </div>
              <div className="w-full">
                <div className="sm:flex items-center justify-between py-2 sm:py-0">
                  <h2 className="text-Dark_black text-xl font-medium text-[18px]">
                    {classdata?.className}
                  </h2>
                  <OutlineBtn
                    text={`Start on ${dayjs(classdata?.classdate).format(
                      "DD-MM-YYYY"
                    )}`}
                    className={
                      "bg-gay-300/50 text-white border-none sm:text-[11px] text-xs mt-1 w-full sm:w-auto sm:mt-0"  
                    }
                    onClick={() => navigate(Routing.InstructorMyClass)}
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-[2px]">
                      <p className="text-black/70 text-[12px] font-semibold">
                        Class Date:
                      </p>
                      <p className="text-black/70 text-[12px] font-light">
                        {classdata.classdate}
                      </p>
                    </div>
                    <div className="flex items-center gap-[2px]">
                      <p className="text-black/70 text-[12px] font-semibold">
                        Class Time:
                      </p>
                      <p className="text-black/70 text-[12px] font-light">
                        {classdata?.classTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-[2px]">
                      <p className="text-black/70 text-[12px] font-semibold">
                        Created on:{" "}
                      </p>
                      <p className="text-black/70 text-[12px] font-light">
                        {classdata?.createdOn}
                      </p>
                    </div>
                    <div className="flex items-center gap-[2px]">
                      <p className="text-black/70 text-[12px] font-semibold">
                        Class Rate:{" "}
                      </p>
                      <p className="text-red-200 text-[12px] font-semibold">
                        £{classdata?.classRate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default ClassRequestcard;
