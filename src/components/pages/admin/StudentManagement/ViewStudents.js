import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import OutlineBtn from "../../common/OutlineBtn";
import Popup from "../../common/Popup";
import { Allert_Popup_Icon } from "../../../../assets/icon";
import { toast } from "react-toastify";
import {
  Students_Block,
  Students_Detail,
  Students_List,
} from "../../../services/Admin/StudentManagement/StudentManagement";
import Spinner from "../../../layouts/Spinner";
import User from "../../../../assets/images/userProfile.jpg";
import { MdCancel, MdKeyboardArrowDown } from "react-icons/md";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaArrowLeft } from "react-icons/fa6";
import dayjs from "dayjs";
import { PiSealCheckFill } from "react-icons/pi";

const ViewStudents = () => {
  const [isOpen, SetisOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Student_Deatils_Popup, setStudent_Deatils_Popup] = useState(false);
  const [DeclineReason, setDeclineReason] = useState("")
  const [Student_Deatils, setStudent_Deatils] = useState({});
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
      // toast.error(result?.message);
    }
  };

  const Get_Student_Details = async (studentId) => {
    setLoading(true);
    const result = await Students_Detail(studentId);
    if (result?.success === true) {
      setStudent_Deatils(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      // toast.error(result?.message);
    }
  };


  useEffect(() => {
    Get_Student_list();
  }, []);

  const heandleBlock = async () => {
    setLoading(true);
    const body = {
      studentId: studentid,
      status: "block",
      DeclineReason: DeclineReason
    }
    const result = await Students_Block(body);
    if (result?.success === true) {
      setDeclineReason("")
      SetisOpen(false);
      setLoading(false);
      setStudent_Deatils_Popup(false);
      setStudent_List([]);
      Get_Student_list();
    } else {
      setLoading(false);
    }
  };

  

  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between flex-wrap">
        <AdminHeadding Headding={"View Students"} />
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
                  {Student_List.map((person) => (
                    <tr key={person.studentId}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <img
                          src={person.profile_picture || User}
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
                        {dayjs(person.createdAt).format("DD/MM/YYYY")}
                      </td>
                      <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                        <div className="flex items-center gap-2 justify-end">
                          <OutlineBtn
                            text={"View"}
                            className={"text-black h-[45px]"}
                            onClick={() => { setStudent_Deatils_Popup(true); Get_Student_Details(person.studentId); setstudentid(person.studentId); }}
                          />
                          <OutlineBtn
                            text={"Block"}
                            className={
                              "text-red-200 bg-red-100 border-red-200 h-[45px]"
                            }
                            onClick={() => {
                              SetisOpen(true);
                              setstudentid(person.studentId);
                            }}
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

      <Dialog
        className="relative z-[9999]"
        open={Student_Deatils_Popup}
        onClose={setStudent_Deatils_Popup}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary md:px-[56px] px-6 pb-6 pt-[50px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-screen-xl  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaArrowLeft className="text-2xl cursor-pointer" onClick={() => setStudent_Deatils_Popup(false)} />
                    <h2 className="text-Dark_black text-2xl font-semibold ml-5">
                      Student’s Profile
                    </h2>
                  </div>
                  <OutlineBtn
                    text={"Block"}
                    className={"border border-red-200 text-red-200"}
                    onClick={() => {
                      SetisOpen(true);
                      console.log(Student_Deatils?.studentId)
                    }}
                  />
                </div>
                <div className="mt-11">
                  <div className="flex md:flex-nowrap flex-wrap items-start justify-between">
                    <div className="md:w-[30%]">
                      <div className="sm:w-[247px] w-full h-[247px] rounded-full overflow-hidden">
                        <img
                          src={Student_Deatils?.profile || User}
                          className="h-full w-full object-cover object-top grayscale"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="flex gap-1 my-5">
                          {Student_Deatils?.StripeVerfiy
                            ? <PiSealCheckFill className="text-green text-xl" />
                            : <MdCancel className="text-red-200 text-xl" />
                          }
                          Stripe Identity Verified
                        </div>
                        <h2 className="text-black text-2xl font-bold">
                          {Student_Deatils?.name}
                        </h2>
                        <p className="text-black/70 text-sm mt-4">
                          Joined as: <span className="font-bold">{Student_Deatils?.joinedAs}</span>
                        </p>
                        <p className="text-black/70 text-sm mt-2">
                          Joined on:{" "}
                          <span className="font-bold">{Student_Deatils?.JoinedOn}</span>
                        </p>
                        <p className="text-black/70 text-sm mt-2">
                          Profile Completion:{" "}
                          <span className="font-bold">{Student_Deatils?.profile_completion}%</span>
                        </p>
                      </div>
                    </div>
                    <div className="md:w-[70%]">
                      <div className="sm:p-8 p-3 border border-[#7171714D] w-full rounded-lg min-h-[220px]">
                        <h2 className="text-lg font-medium text-black">About Student</h2>
                        <p className="text-black/70 mt-3">{Student_Deatils?.about}</p>
                      </div>
                      <div className="sm:p-8 p-3 border border-[#7171714D] w-full rounded-lg mt-5 min-h-[220px]">
                        <h2 className="text-lg font-medium text-black">Additional Details</h2>
                        <p className="text-black/70 mt-3">{Student_Deatils?.adetail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Popup
        isOpen={isOpen}
        SetisOpen={SetisOpen}
        Icons={<Allert_Popup_Icon />}
        Headding={"Are You Sure To Block"}
        BodyText={
          <div>
            <p>
              Are you sure you want to block this student? Once blocked, they will be unable to join your class. You can unblock them later in the Blocked Students section.
            </p>
            <textarea
              name="body"
              value={DeclineReason}
              onChange={(e) => { setDeclineReason(e.target.value) }}
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
    </>
  );
};

export default ViewStudents;
