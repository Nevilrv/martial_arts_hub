import React, { useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import OutlineBtn from "../../common/OutlineBtn";
import Instructors1 from "../../../../assets/images/Instructor-1.png";
import Popup from "../../common/Popup";
import {Confirm_Popup_Icon } from "../../../../assets/icon";

const BlockedInstructors = () => {
    const [isOpen, SetisOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <AdminHeadding Headding={"Blocked Instructors"} />
      </div>
      <div className="mt-5">
        <div className="w-full overflow-x-auto">
          <div className="flex items-center justify-between border-b border-gay-400/25 py-5 h-[100px] min-w-[639px]">
            <div className="flex items-center gap-4">
              <img
                src={Instructors1}
                alt=""
                className="w-[62px] h-[62px] object-cover rounded-full"
              />
              <div>
                <h2 className="text-black text-base font-semibold">
                  Kiya John
                </h2>
                <p className="text-black/70 text-[11px]">
                  <span className="font-semibold">Blocked on:</span> 29 July 2024 •{" "}
                  <span className="font-semibold">Class Name:</span> Brazilian
                  Jiu Jitsu
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <OutlineBtn
                className={"bg-black text-white border-none"}
                text={"Unblock"}
              />
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-gay-400/25 py-5 h-[100px] min-w-[639px]">
            <div className="flex items-center gap-4">
              <img
                src={Instructors1}
                alt=""
                className="w-[62px] h-[62px] object-cover rounded-full"
              />
              <div>
                <h2 className="text-black text-base font-semibold">
                  Kiya John
                </h2>
                <p className="text-black/70 text-[11px]">
                  <span className="font-semibold">Blocked on:</span> 29 July 2024 •{" "}
                  <span className="font-semibold">Class Name:</span> Brazilian
                  Jiu Jitsu
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <OutlineBtn
                className={"bg-black text-white border-none"}
                text={"Unblock"}
              />
            </div>
          </div>
        </div>
      </div>

      <Popup isOpen={isOpen} SetisOpen={SetisOpen} Icons={<Confirm_Popup_Icon />} Headding={"Instructor successfully unblocked"} BodyText={"Instructor successfully unblocked. You can view the instructor’s details in the Instructor Management section or block them again if needed."} BtnText={"Okay"} Btnclass={"bg-black text-white"} onClick={()=>SetisOpen(false)} />
    </>
  );
};

export default BlockedInstructors;
