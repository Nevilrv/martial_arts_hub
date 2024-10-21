import React, { useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import { Link } from "react-router-dom";
import Instructors1 from "../../../../assets/images/Instructor-1.png";
import OutlineBtn from "../../common/OutlineBtn";
import Popup from "../../common/Popup";
import {Confirm_Popup_Icon } from "../../../../assets/icon";

const NewRequests = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <AdminHeadding Headding={"New Instructor Requests"} />
        <Link className="text-red-200 underline font-semibold">Accept all</Link>
      </div>
      <div className="mt-5">
        <div className="w-full overflow-x-auto">
        <div className="flex items-center justify-between border-b border-gay-400/25 pb-5 h-[100px] min-w-[639px]">
          <div className="flex items-center gap-4">
            <img
              src={Instructors1}
              alt=""
              className="w-[62px] h-[62px] object-cover rounded-full"
            />
            <div>
              <h2 className="text-black text-base font-semibold">Kiya John</h2>
              <p className="text-black/70 text-[11px]">
                <span className="font-semibold">Date:</span> 29 July 2024 •{" "}
                <span className="font-semibold">Class Name:</span> Brazilian Jiu
                Jitsu
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <OutlineBtn text={"View Profile"} />
            <OutlineBtn className={"bg-green text-white border-none"} text={"Accept"} />
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gay-400/25 pb-5 h-[100px] min-w-[639px]">
          <div className="flex items-center gap-4">
            <img
              src={Instructors1}
              alt=""
              className="w-[62px] h-[62px] object-cover rounded-full"
            />
            <div>
              <h2 className="text-black text-base font-semibold">Kiya John</h2>
              <p className="text-black/70 text-[11px]">
                <span className="font-semibold">Date:</span> 29 July 2024 •{" "}
                <span className="font-semibold">Class Name:</span> Brazilian Jiu
                Jitsu
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <OutlineBtn text={"View Profile"} />
            <OutlineBtn className={"bg-green text-white border-none"} text={"Accept"} />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default NewRequests;
