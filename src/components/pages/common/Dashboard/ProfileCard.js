import React from "react";
import { CameraIcon } from "../../../../assets/icon";
import { FaUser } from "react-icons/fa6";
import User from "../../../../assets/images/userProfile.jpg";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";

const ProfileCard = ({ ProfileDetals }) => {
  const navigate = useNavigate();
  const role = JSON.parse(localStorage.getItem("Role"));
  const heandleProfile = () => {
    if (role === "Instructor") {
      navigate(Routing.InstructorProfile);
    } else {
      navigate(Routing.StudentProfile);
    }
  };
  return (
    <>
      <div className="bg-gay-600 rounded-3xl py-[27px] px-[27px]">
        <div className="w-[210px] h-[210px] bg-gay-250 rounded-full mx-auto flex items-center justify-center relative">
          {ProfileDetals?.profile_picture === null ||
          ProfileDetals?.profile_picture === "" ? (
            <FaUser className="text-[60px] text-[#BDBBB5]" />
          ) : (
            <img
              src={ProfileDetals?.profile_picture || User}
              alt=""
              className="w-[210px] h-[210px] rounded-full object-cover grayscale"
            />
          )}
          <div
            className="h-[48px] w-[48px] bg-[#E1DFD7] rounded-full flex items-center justify-center absolute bottom-0 right-3 cursor-pointer"
            onClick={heandleProfile}
          >
            <CameraIcon />
          </div>
        </div>
        <h2 className="text-black text-2xl font-semibold text-center mt-4 break-words sm:max-w-[370px] max-w-[240px] mx-auto">
          {ProfileDetals?.email || ProfileDetals?.name}
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
                {ProfileDetals?.role || ProfileDetals?.joinAs}
              </h4>
            </div>
            <div className="flex items-center">
              <p className="text-base">Joined on:</p>
              <h4 className="text-black/70 font-semibold ml-1">
                {ProfileDetals?.JoinOn}
              </h4>
            </div>
            <>
              <div className="flex items-center flex-wrap">
                <p className="text-base">Profile Completion:</p>
                <span className="text-Green-200 ml-1">
                  {ProfileDetals?.profile_completion}%
                </span>
              </div>
            </>
          </div>
        </>
      </div>
    </>
  );
};

export default ProfileCard;
