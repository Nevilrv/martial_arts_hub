import React from "react";
import { CameraIcon } from "../../../../assets/icon";
import { FaUser } from "react-icons/fa6";

const ProfileCard = ({ ProfileDetals }) => {
  return (
    <>
      <div className="bg-gay-600 h-[695px] rounded-3xl py-[27px] px-[27px]">
        <div className="w-[210px] h-[210px] bg-gay-250 rounded-full mx-auto flex items-center justify-center relative">
          {ProfileDetals?.profile_picture === null ||
          ProfileDetals?.profile_picture === "" ? (
            <FaUser className="text-[60px] text-[#BDBBB5]" />
          ) : (
            <img
              src={ProfileDetals?.profile_picture}
              alt=""
              className="w-[210px] h-[210px] rounded-full object-cover"
            />
          )}
          <div className="h-[48px] w-[48px] bg-[#E1DFD7] rounded-full flex items-center justify-center absolute bottom-0 right-3">
            <CameraIcon />
          </div>
        </div>
        <h2 className="text-black text-2xl font-semibold text-center mt-4 break-words sm:max-w-[370px] max-w-[240px] mx-auto">
          {ProfileDetals?.email}
        </h2>
        <div className="mt-[6px] mb-14 w-[115px] h-[30px] bg-Green-50 mx-auto rounded-full text-Green-200 flex items-center  justify-center gap-1 text-[14px]">
          <span className="bg-Green-200 h-2 w-2 block rounded-full"></span>
          Online Now
        </div>
        <>
          <div className="flex mt-3 flex-col">
            <div className="flex items-center">
              <p className="text-base">Joined as:</p>
              <h4 className="text-black/70 font-semibold ml-1">
                {ProfileDetals?.role}
              </h4>
            </div>
            <div className="flex items-center">
              <p className="text-base">Joined on:</p>
              <h4 className="text-black/70 font-semibold ml-1">
                {ProfileDetals?.createdAt.slice(0, 10)}
              </h4>
            </div>
            <>
              {/* <span className="text-Green-200 ml-1">{item.details}</span>
              <span className="text-red-200">(Complete Now)</span> */}
            </>
          </div>
        </>
      </div>
    </>
  );
};

export default ProfileCard;
