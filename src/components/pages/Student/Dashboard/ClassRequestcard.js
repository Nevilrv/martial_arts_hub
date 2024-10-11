import React from "react";
import { FiPlus } from "react-icons/fi";
import OutlineBtn from "../../common/OutlineBtn";

const ClassRequestcard = ({ cardDetails, data }) => {
  console.log("🚀 ~ ClassRequestcard ~ data:", data);
  return (
    <>
      <div className=" bg-gay-600 rounded-3xl px-8 py-7 max-h-[375px] overflow-y-auto">
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
        {data?.length === 0 && (
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
        )}

        {data?.map((ClassRequests) => (
          <>
            <div className="flex items-start mt-6 gap-3">
              <img
                src={ClassRequests?.Instructor?.profile_picture}
                className="min-w-[62px] h-[62px] object-cover object-left-top rounded-full grayscale"
                alt=""
              />
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-black text-xl font-semibold">
                    {ClassRequests?.Instructor?.name}
                  </h2>
                  <p className="text-black/50 truncate max-w-[300px]">
                    • {ClassRequests?.title}
                  </p>
                  <OutlineBtn text={"View"} className={"h-[40px]"} />
                </div>
                <p className="text-black/70 max-w-[375px]">
                  Your Inquiry message request is reached to the Instructor.
                  Please wait for the confirmation.
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ClassRequestcard;
