import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import Instructor_1 from "../../../../assets/images/Instructor-1.png";
import OutlineBtn from "../../common/OutlineBtn";
import Popup from "../../common/Popup";
import { Allert_Popup_Icon } from "../../../../assets/icon";
import { toast } from "react-toastify";
import { Students_Block, Students_List } from "../../../services/Admin/StudentManagement/StudentManagement";
import Spinner from "../../../layouts/Spinner";

const ViewStudents = () => {
  const [InstructorsList, setInstructorsList] = useState([
    {
      image: Instructor_1,
      name: "Keyn Mojho",
      id: "#23352",
      ClassName: "Brazilian Jiu Jitsu",
      JoinedDate: "12/07/2024",
      PaidAmount: "$4.99",
    },
  ]);
  const [isOpen, SetisOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Student_List, setStudent_List] = useState([]);
  const [studentid, setstudentid] = useState();

  const Get_Student_list = async () => {
    setLoading(true);
    const result = await Students_List();
    if (result?.success === true) {
      setStudent_List(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Student_list();
  }, []);



  const heandleBlock = async () => {
    setLoading(true);
    const result = await Students_Block(studentid, "block");
    if (result?.success === true) {
      SetisOpen(false);
      setLoading(false);
      setStudent_List([]);
      Get_Student_list();
    } else {
      setLoading(false);
      result?.message === "Student data not found" &&
      Get_Student_list([]);
      toast.error(
        result?.message === "Student data not found"
          ? "There are no any studentid."
          : result?.message
      );
    }
  };

  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between flex-wrap">
        <AdminHeadding Headding={"View Students"} />
        <div className="flex items-center gap-2 flex-wrap">
          <select
            id="ID"
            name="ID"
            defaultValue="ID"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>ID</option>
            <option>#23352</option>
            <option>#23352</option>
          </select>
          <select
            id="Date"
            name="Date"
            defaultValue="Date"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>Date</option>
            <option>06/06/2024</option>
            <option>12/07/2024</option>
            <option>05/07/2024</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <div className="py-2 align-middle min-w-[890px]">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gay-800">
                  <tr>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-gay-900 text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Student’s Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Student ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Class Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Joined Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Paid Amount
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-primary">
                  {Student_List.map((person) => (
                    <tr key={person.studentId}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <img
                          src={person.profile}
                          alt=""
                          className="w-[45px] h-[45px] rounded-full"
                          srcset=""
                        />
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.studentId}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.className.slice(0,20)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.joindate}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.paidAmount}
                      </td>
                      <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                        <div className="flex items-center gap-2 justify-end">
                          <OutlineBtn
                            text={"View"}
                            className={"text-black h-[45px]"}
                          />
                          <OutlineBtn
                            text={"Block"}
                            className={
                              "text-red-200 bg-red-100 border-red-200 h-[45px]"
                            }
                            onClick={() => {SetisOpen(true);setstudentid(person.studentId)}}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Popup
        isOpen={isOpen}
        SetisOpen={SetisOpen}
        Icons={<Allert_Popup_Icon />}
        Headding={"Are You Sure To Block"}
        BodyText={
          "Are you sure you want to block this Instructor? Once blocked, they will be unable to join your platform. You can unblock them later in the Blocked Instructor section."
        }
        BtnText={"Yes, Block"}
        Btnclass={"text-red-200 border-red-200"}
        BtnText2={"No, Go Back"}
        BtnText2Click={() => SetisOpen(false)}
        onClick={() => heandleBlock()}
      />
    </>
  );
};

export default ViewStudents;
