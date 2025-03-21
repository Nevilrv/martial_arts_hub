import React from "react";
import { FiPlus } from "react-icons/fi";
import Wrestling from "../../../../assets/images/Wrestling.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import User from "../../../../assets/images/userProfile.jpg"

const DashboardCard = ({ cardDetails, data, earnings }) => {
  return (
    <>
      <div className=" bg-gay-600 rounded-3xl px-8 py-7 max-h-[490px] sm:h-full overflow-auto" id="hideScoll">
        <div className="flex items-center justify-between">
          <h3 className="text-gay-300 text-lg font-medium">
            {cardDetails.CardTitle}
          </h3>
          {cardDetails.Plus !== false ? (
            ""
          ) : (
            <p className="text-red-200 font-bold text-xl">
              £{earnings?.totalEarnings}
            </p>
          )}
        </div>
        {(earnings?.formatedData?.length <= 0 || data?.length <= 0) && (
          <div className="flex items-center justify-center flex-col mt-24">
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
        {data?.map((payments) => (
          <div className="sm:flex grid grid-cols-1 items-center justify-between mt-7 flex-wrap gap-y-3 gap-x-3">
            <div className="sm:flex gap-5 items-center">
              <img src={payments?.instructor?.profile_picture || Wrestling} alt="" className="2xl:w-32 lg:w-full md:w-[30%] w-full 2xl:h-20 rounded-lg object-cover grayscale" />
              <div className="w-[228px]">
                <h2 className="text-Dark_black font-medium text-lg">
                  {payments?.className}
                </h2>
                <p className="text-sm font-light flex sm:justify-start justify-between">
                  <span className="text-black/70 font-medium">
                    Course Duration:
                  </span>
                  {payments?.classDuration} hr
                </p>
                <p className="text-sm font-light flex sm:justify-start justify-between sm:mt-0 mt-2">
                  <span className="text-black/70 font-medium">
                    Instructor Name:{" "}
                  </span>
                  {payments?.instructor?.name}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-red-200 font-semibold text-xl sm:text-right text-left sm:mb-0 mb-2">
                £{payments?.paidAmount}
              </h2>
              <div
                className={`p-1.5 px-3 ${payments?.paymentStatus === "success"
                  ? "bg-green"
                  : "bg-red-200"
                  } text-white w-36 rounded-full flex items-center text-[11px]`}
              >
                Payment{" "}
                {payments?.paymentStatus !== "success"
                  ? "Unsuccessful"
                  : payments?.paymentStatus}
                <IoIosArrowRoundForward className="text-xl -rotate-45" />{" "}
              </div>
            </div>
          </div>
        ))}
        {earnings?.formatedData?.map((earning) => (
          <div className="flex items-center justify-between mt-7 gap-4 sm:flex-nowrap flex-wrap sm:border-0 border-b pb-3">
            <img
              src={earning.profile || User}
              alt="userimage"
              className="sm:w-[56px] w-1/2 sm:mx-0 mx-auto sm:h-[56px] rounded-full object-cover object-top grayscale aspect-square"
            />
            <div className="lg:w-[80%] w-full">
              <h2 className="text-black font-medium">
                {earning.studentName}
              </h2>
              <p className="text-black/70 font-light">
                <span className="font-medium">Class Name:</span>{" "}
                {earning.className.slice(0, 15)}... •{" "}
                <span className="font-medium">Class Date:</span>{" "}
                {earning.classDate}
              </p>
            </div>
            <h2 className="text-lg text-red-200 font-semibold">£{earning.paidAmount}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCard;
