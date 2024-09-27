import React from "react";
import { FiPlus } from "react-icons/fi";

const DashboardCard = ({ cardDetails }) => {
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
      </div>
    </>
  );
};

export default DashboardCard;
