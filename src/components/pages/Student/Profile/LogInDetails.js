import React from "react";
import Inputfild from "../../common/Inputfild";
import OutlineBtn from "../../common/OutlineBtn";

const LogInDetails = () => {
  return (
    <>
      <div className="border border-[#71717194] py-7 px-6 rounded-lg min-h-[212px] mt-14">
        <p className="font-semibold text-[22px]">Login Details</p>
        <p className="text-black/50">
          The information you provided during login is displayed below. You can
          update your details here.
        </p>
        <div className="mt-10 flex flex-col gap-7">
          <Inputfild
            className={"md:w-full"}
            Label={"Email ID"}
            value={JSON.parse(localStorage.getItem("email"))}
          />
          <Inputfild className={"md:w-full"} Label={"Name"} value={"jay"} />
        </div>
        <div className="flex justify-end">
        <OutlineBtn text={"Save Changes"} className={"bg-black text-white mt-12"} />
        </div>
      </div>
    </>
  );
};

export default LogInDetails;