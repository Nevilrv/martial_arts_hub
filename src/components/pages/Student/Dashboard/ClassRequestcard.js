import React from "react";
import { FiPlus } from "react-icons/fi";
import OutlineBtn from "../../common/OutlineBtn";
import User from "../../../../assets/images/userProfile.jpg"
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";

const ClassRequestcard = ({ cardDetails, data }) => {
  const navigate = useNavigate()
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
        <div className="w-full overflow-x-auto">
        {data?.length === 0 && (
          <div className="flex items-center justify-center flex-col mt-24 min-w-[448px]">
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
            <div className="flex items-start mt-6 gap-3 min-w-[448px]">
              <img
                src={ClassRequests?.instructor_profile||User}
                className="w-[62px] h-[62px] object-cover object-center rounded-full grayscale"
                alt=""
              />
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-black text-xl font-semibold">
                    {ClassRequests?.instructorName}
                  </h2>
                  <p className="text-black/50 truncate max-w-[300px]">
                    • {ClassRequests?.message_title}
                  </p>
                  <OutlineBtn text={"View"} onClick={()=>navigate(Routing.StudentMyClass)} className={"h-[40px]"} />
                </div>
                <p className="text-black/70 max-w-[375px]">
                  {ClassRequests?.message_body}
                </p>
              </div>
            </div>
          </>
        ))}
        </div>

      </div>
    </>
  );
};

export default ClassRequestcard;
