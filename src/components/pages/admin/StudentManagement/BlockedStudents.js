import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import OutlineBtn from "../../common/OutlineBtn";
import Instructors1 from "../../../../assets/images/Instructor-1.png";
import Popup from "../../common/Popup";
import { Confirm_Popup_Icon } from "../../../../assets/icon";
import { toast } from "react-toastify";
import {
  Students_Block,
  Students_Block_List,
} from "../../../services/Admin/StudentManagement/StudentManagement";
import User from "../../../../assets/images/userProfile.jpg";
import Spinner from "../../../layouts/Spinner";

const BlockedStudents = () => {
  const [isOpen, SetisOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Student_Block_List, setStudent_Block_List] = useState([]);
  let studentid = "";

  const Get_Student_Blocked_list = async () => {
    setLoading(true);
    const result = await Students_Block_List();
    if (result?.success === true) {
      setStudent_Block_List(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      if (result?.message === "Blocked students not found") {
        toast.warning("There are no any stiudent Blocked")
      }
      else{
        toast.error(result?.message);
      }
    }
  };
  useEffect(() => {
    Get_Student_Blocked_list();
  }, []);

  // UnBlock APi
  const heandleBlock = async (studentId) => {
    setLoading(true);
    studentid = studentId;
    const result = await Students_Block(studentid, "unblock");
    if (result?.success === true) {
      SetisOpen(false);
      setLoading(false);
      setStudent_Block_List([]);
      Get_Student_Blocked_list();
    } else {
      setLoading(false);
      result?.message === "Student data not found" &&
        Get_Student_Blocked_list([]);
      toast.error(
        result?.message === "Blocked students not found"
          ? "There are no any studentid."
          : result?.message
      );
    }
  };

  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between">
        <AdminHeadding Headding={"Blocked Students"} />
      </div>
      <div className="mt-5">
        {Student_Block_List.length <= 0 && (
          <h2 className="text-4xl font-semibold text-center">
            No Blocked Student founde
          </h2>
        )}
        <div className="w-full overflow-x-auto">
          {Student_Block_List.map((Block_student_List) => (
            <div className="flex items-center justify-between border-b border-gay-400/25 py-5 h-[100px] min-w-[639px]">
              <div className="flex items-center gap-4">
                <img
                  src={Block_student_List?.profile || User}
                  alt=""
                  className="w-[62px] h-[62px] object-cover rounded-full"
                />
                <div>
                  <h2 className="text-black text-base font-semibold">
                    {Block_student_List?.name}
                  </h2>
                  <p className="text-black/70 text-sm">
                    <span className="font-semibold">Blocked on:</span>
                    {Block_student_List?.Blockeddate}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <OutlineBtn
                  className={"bg-black text-white border-none"}
                  text={"Unblock"}
                  onClick={() => heandleBlock(Block_student_List?.studentId)}
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

export default BlockedStudents;
