import React, { useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import Instructor_1 from "../../../../assets/images/Instructor-1.png";
import OutlineBtn from "../../common/OutlineBtn";
import Popup from "../../common/Popup";
import { Allert_Popup_Icon, Decline } from "../../../../assets/icon";
import Instructor1 from "../../../../assets/images/Instructor-4.png";
import {
  Instructor_Block,
  Instructor_List,
  Instructor_Remove,
} from "../../../services/Admin/DashboardAPI";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import User from "../../../../assets/images/userProfile.jpg"

const ViewInstructors = () => {
  const [isOpen, SetisOpen] = useState(false);
  const [removeconformation, Setremoveconformation] = useState(false)
  const [Loading, setLoading] = useState(false);
  const [blockReason, setblockReason] = useState("")
  const [InstructorId, setInstructorId] = useState();
  const [Instructors_List, setsetInstructors_List] = useState([]);

  const Get_Instructor_list = async () => {
    setLoading(true);
    const result = await Instructor_List();
    if (result?.success === true) {
      setsetInstructors_List(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Instructor_list();
  }, []);

  const heandleBlock = async () => {
    setLoading(true);
    const body = {
      instructorId: InstructorId,
      status: "block",
      Reason: blockReason
    }
    const result = await Instructor_Block(body);
    if (result?.success === true) {
      setblockReason("")
      SetisOpen(false);
      setLoading(false);
      setsetInstructors_List([]);
      Get_Instructor_list();
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const heandleRemove = async () => {
    setLoading(true);
    const result = await Instructor_Remove(InstructorId);
    if (result?.success === true) {
      setLoading(false);
      setsetInstructors_List([]);
      Get_Instructor_list();
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };



  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between flex-wrap">
        <AdminHeadding Headding={"View Instructors"} />
        {/* <div className="flex items-center gap-2 flex-wrap">
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
        </div> */}
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
                      Instructor’s Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Instructor ID
                    </th>
                    {/* <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Class Name
                    </th> */}
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Joined Date
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
                  {Instructors_List?.map((person) => {
                    return (
                      <tr key={person?.instructorId} className="group">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          <img
                            src={person?.profile || User}
                            alt=""
                            className="w-[45px] h-[45px] rounded-full grayscale group-hover:grayscale-0 duration-150"
                            srcset=""
                          />
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                          {person?.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                          {person?.instructorId}
                        </td>
                        {/* <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                          {person?.className?.length<=0?"class is not found":person?.className[0]?.className?.slice(0, 20)}
                        </td> */}
                        <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                          {person?.joindate}
                        </td>
                        <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                          <div className="flex items-center gap-2 justify-end">
                            <OutlineBtn
                              text={"Remove"}
                              className={"text-black h-[45px]"}
                              onClick={() => {
                                setInstructorId(person?.instructorId);
                                Setremoveconformation(true);
                              }}
                            />
                            <OutlineBtn
                              text={"Block"}
                              className={
                                "text-red-200 bg-red-100 border-red-200 h-[45px]"
                              }
                              onClick={() => {
                                setInstructorId(person?.instructorId);
                                SetisOpen(true);
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Popup
        isOpen={isOpen}
        SetisOpen={SetisOpen}
        Icons={<Decline />}
        Headding={"Are You Sure To Block"}
        BodyText={
          <div>
            <p>
              Instructor successfully blocked. You can view the Instructor’s details in the Instructor Management section or unblock them again if needed.
            </p>
            <textarea
              name="body"
              value={blockReason}
              onChange={(e) => { setblockReason(e.target.value) }}
              className="p-4 h-[120px] bg-[#DAD8D0] w-full focus:outline-none rounded-xl mt-4"
              placeholder="Block reason ..."
            />
          </div>
        }
        BtnText={"Yes, Block"}
        Btnclass={"text-red-200 border-red-200"}
        BtnText2={"No, Go Back"}
        BtnText2Click={() => SetisOpen(false)}
        onClick={() => heandleBlock()}
      />

      <Popup
        isOpen={removeconformation}
        SetisOpen={Setremoveconformation}
        Icons={<Allert_Popup_Icon />}
        Headding={"Are you sure?"}
        BodyText={
          <p>
            You want to remove this Instructor? Once remove, they will be unable to join your platform. Also remove then that created session and income details are remove.
          </p>
        }
        BtnText={"Okay"}
        onClick={() => {
          SetisOpen(false);
          heandleRemove();
        }}
      />
    </>
  );
};

export default ViewInstructors;
