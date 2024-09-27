import React from "react";
import { CameraIcon } from "../../../../assets/icon";
import { FaUser } from "react-icons/fa6";

const ProfileCard = ({ ProfileDetals }) => {
  return (
    <>
      <div className="bg-gay-600 h-[695px] rounded-3xl py-[27px] px-[27px]">
        <div className="w-[210px] h-[210px] bg-gay-250 rounded-full mx-auto flex items-center justify-center relative">
          <FaUser className="text-[60px] text-[#BDBBB5]" />
          <div className="h-[48px] w-[48px] bg-[#E1DFD7] rounded-full flex items-center justify-center absolute bottom-0 right-3">
            <CameraIcon />
          </div>
        </div>
        <h2 className="text-black text-2xl font-semibold text-center mt-4">
          {JSON.parse(localStorage.getItem("email"))}
        </h2>
        <div className="mt-[6px] mb-14 w-[115px] h-[30px] bg-Green-50 mx-auto rounded-full text-Green-200 flex items-center  justify-center gap-1 text-[14px]">
          <span className="bg-Green-200 h-2 w-2 block rounded-full"></span>
          Online Now
        </div>
        {ProfileDetals.map((item, index) => (
          <>
            <div className="flex items-center mt-3">
              <p className="text-base">{item.title}</p>
              {item.title !== "Profile Completion:" && (
                <h4 className="text-black/70 font-semibold ml-1">
                  {item.details}
                </h4>
              )}
              {item.title === "Profile Completion:" && (
                <>
                  <span className="text-Green-200 ml-1">{item.details}</span>
                  <span className="text-red-200">(Complete Now)</span>
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ProfileCard;
