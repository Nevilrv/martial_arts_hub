import React from "react";
import { FiPlus } from "react-icons/fi";
import OutlineBtn from "../../common/OutlineBtn";
import Wrestling from "../../../../assets/images/Wrestling.png";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";

const RecentClasses = ({ cardDetails, data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-gay-600 rounded-3xl px-8 py-7 max-h-[400px] overflow-y-auto">
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
            <div className="flex items-center justify-center flex-col my-6">
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
          {data?.map((recentClass) => (
              <div className="flex items-center justify-between mt-7 flex-wrap gap-y-3">
                <div className="flex items-start gap-5">
                  <img
                    src={Wrestling}
                    alt=""
                    className="grayscale hover:grayscale-0 w-[125px] h-[85px] rounded-lg"
                  />
                  <div>
                    <h2 className="text-black text-xl font-semibold">
                      {recentClass.className}
                    </h2>
                    <p className="text-black/70 max-w-[390px]">
                      {recentClass.className}
                    </p>
                  </div>
                </div>
                <OutlineBtn
                  text={"See Details"}
                  onClick={() => navigate(Routing.StudentMyClass)}
                />
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentClasses;
