import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import OutlineBtn from "../../common/OutlineBtn";
import Instructors1 from "../../../../assets/images/Instructor-1.png";
import Popup from "../../common/Popup";
import { Confirm_Popup_Icon } from "../../../../assets/icon";
import User from "../../../../assets/images/userProfile.jpg"
import {
  Instructor_Block,
  Instructor_Block_List,
} from "../../../services/Admin/DashboardAPI";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";

const BlockedInstructors = () => {
  const [isOpen, SetisOpen] = useState(false);

  const [Loading, setLoading] = useState(false);
  const [InstructorId, setInstructorId] = useState();
  const [Instructors_List, setsetInstructors_List] = useState([]);

  const Get_Instructor_Block_list = async () => {
    setLoading(true);
    const result = await Instructor_Block_List();
    if (result?.success === true) {
      setsetInstructors_List(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      // toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Instructor_Block_list();
  }, []);

  const heandleBlock = async (instructorId) => {
    setLoading(true);
    const body = {
      instructorId: instructorId,
      status: "unblock",
      Reason: ""
    }
    const result = await Instructor_Block(body);
    if (result?.success === true) {
      SetisOpen(true);
      setLoading(false);
      setsetInstructors_List([]);
      Get_Instructor_Block_list();
    } else {
      setLoading(false);
      result?.message === "Instructor data not found" &&
        setsetInstructors_List([]);
      // toast.error(
      //   result?.message === "Instructor data not found"
      //     ? "There are no any Blocked Instructors."
      //     : result?.message
      // );
    }
  };

  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between">
        <AdminHeadding Headding={"Blocked Instructors"} />
      </div>
      <div className="mt-5">
        <div className="w-full overflow-x-auto">
          {Instructors_List.map((BlockedList) => (
            <div className="flex items-center justify-between border-b border-gay-400/25 py-5 h-[100px] min-w-[639px]">
              <div className="flex items-center gap-4">
                <img
                  src={BlockedList.profile_picture || User}
                  alt=""
                  className="w-[62px] h-[62px] object-cover rounded-full"
                />
                <div>
                  <h2 className="text-black text-base font-semibold">
                    {BlockedList.name}
                  </h2>
                  <p className="text-black/70 text-sm">
                    <span className="font-semibold">Blocked on:</span>{" "}
                    {BlockedList.blockon}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <OutlineBtn
                  className={"bg-black text-white border-none"}
                  text={"Unblock"}
                  onClick={() => heandleBlock(BlockedList.instructorId)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Popup
        isOpen={isOpen}
        SetisOpen={SetisOpen}
        Icons={<Confirm_Popup_Icon />}
        Headding={"Instructor successfully unblocked"}
        BodyText={
          "Instructor successfully unblocked. You can view the instructor’s details in the Instructor Management section or block them again if needed."
        }
        BtnText={"Okay"}
        Btnclass={"bg-black text-white"}
        onClick={() => SetisOpen(false)}
      />
    </>
  );
};

export default BlockedInstructors;
