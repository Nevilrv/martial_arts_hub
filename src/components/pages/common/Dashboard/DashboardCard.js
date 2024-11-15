import React from "react";
import { FiPlus } from "react-icons/fi";
import Wrestling from "../../../../assets/images/Wrestling.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const DashboardCard = ({ cardDetails, data, earnings }) => {
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
          ) : (
            <p className="text-red-200 font-bold text-xl">${earnings.totalEarnings}</p>
          )}
        </div>
        {data?.length <= 0 ||
          (earnings?.length <= 0 && (
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
        {data?.map((payments) => (
          <div className="flex items-center justify-between mt-7">
            <img src={Wrestling} alt="" className="w-20 h-14 rounded-lg" />
            <div>
              <h2 className="text-Dark_black font-medium text-lg">
                {payments?.className}
              </h2>
              <p className="text-sm font-light">
                <span className="text-black/70 font-medium">
                  Course Duration:
                </span>
                {payments?.classDuration} hr
              </p>
              <p className="text-sm font-light">
                <span className="text-black/70 font-medium">
                  Instructor Name:{" "}
                </span>
                {payments?.instructor?.name}
              </p>
            </div>
            <div>
              <h2 className="text-red-200 font-semibold text-xl text-right">
                {payments?.paidAmount}
              </h2>
              <div
                className={`p-1.5 px-3 ${
                  payments?.paymentStatus === "success"
                    ? "bg-green"
                    : "bg-red-200"
                } text-white rounded-full flex items-center text-[11px]`}
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
          <div className="flex items-center justify-between mt-7 gap-4">
            <img
              src={earning.profile}
              alt="userimage"
              className="w-[56px] h-[56px] rounded-full object-cover object-top grayscale"
            />
            <div>
              <h2 className="text-black font-medium">{earning.studentName}</h2>
              <p className="text-black/70 font-light">
                <span className="font-medium">Class Name:</span> {earning.className} •{" "}
                <span className="font-medium">Class Date:</span> {earning.classDate}
              </p>
            </div>
            <h2 className="text-lg text-red-200 font-semibold">$5.99</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCard;
