import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import { Link } from "react-router-dom";
import Instructors1 from "../../../../assets/images/Instructor-4.png";
import OutlineBtn from "../../common/OutlineBtn";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { HiMiniSignal } from "react-icons/hi2";
import { Confirm_Popup_Icon, Fullscreen } from "../../../../assets/icon";
import { MdOutlineTranslate } from "react-icons/md";
import { PiSealCheckFill } from "react-icons/pi";
import Popup from "../../common/Popup";
import User from "../../../../assets/images/userProfile.jpg";
import {
  Instructor_Request,
  Instructor_Request_Details,
  Requests_Accept,
} from "../../../services/Admin/DashboardAPI";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";

const NewRequests = () => {
  const [isOpen, SetisOpen] = useState(false);
  const [conformation, Setconformation] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [getinstructor_Id, setgetinstructor_Id] = useState("");
  const [Instructor_Request_List, setInstructor_Request_List] = useState([]);
  const [Instructor_Request_detail, setInstructor_Request_detail] = useState(
    {}
  );
  let getinstructorId = "";

  const Get_Instructor_Requests = async () => {
    setLoading(true);
    const result = await Instructor_Request();
    if (result?.success === true) {
      setInstructor_Request_List(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      // result?.message === "Instructor data not found" &&
      //   setInstructor_Request_List([]);
      // toast.error(
      //   result?.message === "Instructor data not found"
      //     ? "There are no any new requests."
      //     : result?.message
      // );
    }
  };

  const Get_Instructor_Requests_Deatls = async (getinstructorId) => {
    setLoading(true);
    const result = await Instructor_Request_Details(getinstructorId);
    if (result?.success === true) {
      setInstructor_Request_detail(result.data);
      setInstructor_Request_detail((prev) => ({
        ...prev,
        category: JSON.parse(result.data.category),
      }));
      SetisOpen(true);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const Instructor_Requests_Accept = async (getinstructorId, status) => {
    setLoading(true);
    const result = await Requests_Accept(getinstructorId, status);
    if (result?.success === true) {
      Get_Instructor_Requests();
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const heandle_See_Profile = (instructorId) => {
    getinstructorId = instructorId;
    Get_Instructor_Requests_Deatls(getinstructorId);
    setgetinstructor_Id(getinstructorId);
  };

  const heandle_Accept_Profile = (instructorId) => {
    getinstructorId = instructorId;
    Instructor_Requests_Accept(getinstructorId, "accept");
    Get_Instructor_Requests()
  };

  useEffect(() => {
    Get_Instructor_Requests();
  }, []);

  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between">
        <AdminHeadding Headding={"New Instructor Requests"} />
        {/* <Link className="text-red-200 underline font-semibold">Accept all</Link> */}
      </div>
      <div className="mt-5">
        {Instructor_Request_List?.length <= 0 && (
          <h2 className="text-4xl font-semibold text-center">
            No Requests founde
          </h2>
        )}
        {Instructor_Request_List?.map((List) => (
          <div className="w-full overflow-x-auto">
            <div className="flex items-center justify-between border-b border-gay-400/25 pb-5 h-[100px] min-w-[639px]">
              <div className="flex items-center gap-4">
                <img
                  src={List.profile_picture || User}
                  alt=""
                  className="w-[62px] h-[62px] object-cover rounded-full"
                />
                <div>
                  <h2 className="text-black text-base font-semibold">
                    {List.name}
                  </h2>
                  <p className="text-black/70 text-[11px]">
                    <span className="font-semibold">Date:</span> {List.joinDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <OutlineBtn
                  text={"View Profile"}
                  onClick={() => heandle_See_Profile(List.instructorId)}
                />
                <OutlineBtn
                  className={"bg-green text-white border-none"}
                  text={"Accept"}
                  onClick={() => {Setconformation(true);setgetinstructor_Id(List.instructorId)}}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog className="relative z-[9999]" open={isOpen} onClose={SetisOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0 w-full">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary sm:px-12 px-6 py-12 pb-[36px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-[95%]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex items-center sm:justify-between flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-5">
                  <FaArrowLeft
                    className="text-2xl cursor-pointer"
                    onClick={() => SetisOpen(false)}
                  />
                  <h2 className="text-Dark_black font-bold text-2xl">
                    Instructor’s Profile
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  {/* <OutlineBtn
                    text={"Decline"}
                    className={"text-red-200 bg-transparent border-red-200"}
                    onClick={() => Setconformation(true)}
                  /> */}
                  <OutlineBtn
                    text={"Accept"}
                    onClick={() => {Setconformation(true);Setconformation(true)}}
                    className={
                      "bg-green text-white text-base font-semibold border-none"
                    }
                  />
                </div>
              </div>
              <div className="mt-11">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-[79px]">
                  <div className="flex flex-col gap-4 lg:justify-start justify-center lg:items-start items-center">
                    <div className="w-[247px] h-[247px] rounded-full overflow-hidden">
                      <img
                        src={Instructor_Request_detail?.profile_picture || User}
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h2 className="text-black font-bold text-3xl">
                      {Instructor_Request_detail?.name}
                      <span className="text-black/50 text-sm">
                        (Instructor)
                      </span>
                    </h2>
                    <div className="flex items-baseline gap-0.5">
                      <FaStar className="text-gay-500" />
                      <FaStar className="text-gay-500" />
                      <FaStar className="text-gay-500" />
                      <FaStar className="text-gay-500" />
                      <FaStar className="text-gay-500" />
                      <p className="text-black/50 text-xs ml-1">
                        0.0 (0 Reviews)
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* {Instructor_Request_detail.category?.map((category) => (
                        <OutlineBtn text={category.value} />
                      ))} */}
                    </div>
                    <h2 className="text-2xl text-Dark_black font-semibold mt-3 max-w-[690px]">
                      I’m here to support your fitness ambitions, cut fat, and
                      develop strong, flexible muscles.
                    </h2>
                    <div className="mt-8 border border-gay-400/20 p-6 rounded-lg">
                      <h2 className="font-semibold text-Dark_black text-lg">
                        About Instructor
                      </h2>
                      <p className="text-black/70 text-[15px] mt-3">
                        {Instructor_Request_detail?.bio}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div className="border border-gay-400/20 py-5 px-6 rounded-lg">
                    <h2 className="font-semibold text-Dark_black text-lg">
                      About the Class
                    </h2>
                    <div className="flex items-center gap-[9px] mt-3 flex-wrap">
                      <OutlineBtn
                        className={
                          "text-Dark_black font-semibold text-[13px] md:w-auto w-full"
                        }
                        text={"Online"}
                        icon={
                          <sapn className="mr-1">
                            <HiMiniSignal className="text-gay-300 text-2xl" />
                          </sapn>
                        }
                      />
                      <OutlineBtn
                        text={"All Levels"}
                        className={
                          "text-Dark_black font-semibold text-[13px] md:w-auto w-full"
                        }
                        icon={
                          <sapn className="mr-1">
                            <Fullscreen />
                          </sapn>
                        }
                      />
                      <OutlineBtn
                        text={"English"}
                        className={
                          "text-Dark_black font-semibold text-[13px] md:w-auto w-full"
                        }
                        icon={
                          <sapn className="mr-1">
                            <MdOutlineTranslate className="text-gay-300 text-lg" />
                          </sapn>
                        }
                      />
                    </div>
                    <p className="text-black/70 text-sm mt-4 text-justify max-w-[650px]">
                      “ Hi, I'm {Instructor_Request_detail.name}! I started my
                      martial arts journey I have{" "}
                      {Instructor_Request_detail.experience}.”
                    </p>
                  </div>
                  <div className="border border-gay-400/20 py-5 px-6 rounded-lg">
                    <h2 className="font-semibold text-Dark_black text-lg">
                      Experience
                    </h2>
                    <div className="flex flex-col gap-1 mt-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <PiSealCheckFill className="text-gay-400 text-xl" />
                        <p className="text-black/70 text-[15px]">
                          {Instructor_Request_detail?.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gay-400/20 px-5 py-6 rounded-lg mt-4">
                  <h2 className="font-semibold text-Dark_black text-lg">
                    Certifications
                  </h2>
                  <div className="grid sm:grid-cols-2 max-w-[750px] mt-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <PiSealCheckFill className="text-gay-400 text-xl" />
                      <p className="text-black/70 text-[15px]">
                        {Instructor_Request_detail?.certifications}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-gay-400/20 px-5 py-6 rounded-lg mt-4">
                  <h2 className="font-semibold text-Dark_black text-lg">
                    Hourly Rates
                  </h2>
                  <div className="flex items-center justify-between mt-2 flex-wrap">
                    <div className="flex items-start gap-2 flex-wrap">
                      <PiSealCheckFill className="text-red-200 text-xl" />
                      <div>
                        <p className="text-red-200 text-[13px]">
                          First Free Session
                        </p>
                        <p className="text-black/70 text-[15px] font-medium">
                          {
                            Instructor_Request_detail?.firstFreeSessionHourlyRate
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 flex-wrap">
                      <PiSealCheckFill className="text-red-200 text-xl" />
                      <div>
                        <p className="text-red-200 text-[13px]">
                          Private Lesson (1-on-1)
                        </p>
                        <p className="text-black/70 text-[15px] font-medium">
                          ${" "}
                          {
                            Instructor_Request_detail?.privateSessionFaceToFaceHourlyRate
                          }{" "}
                          per hour
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 flex-wrap">
                      <PiSealCheckFill className="text-red-200 text-xl" />
                      <div>
                        <p className="text-red-200 text-[13px]">
                          Advanced Techniques Session
                        </p>
                        <p className="text-black/70 text-[15px] font-medium">
                          ${" "}
                          {
                            Instructor_Request_detail?.privateSessionOnlineHourlyRate
                          }{" "}
                          per hour
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gay-400/20 px-5 py-6 rounded-lg mt-4">
                  <h2 className="font-semibold text-Dark_black text-lg">
                    Training History
                  </h2>
                  <div className="grid mt-2 gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <PiSealCheckFill className="text-gay-400 text-xl" />
                      <p className="text-black/70 text-[15px]">
                        {Instructor_Request_detail?.trainingHistory}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Popup
        isOpen={conformation}
        SetisOpen={Setconformation}
        Icons={<Confirm_Popup_Icon />}
        Headding={"Are you sure?"}
        BodyText={
          "You’ve successfully approved the instructor’s request to join! They can now create classes and teach students. You can monitor their details or add or block them anytime from the admin’s instructor section."
        }
        BtnText={"Okay"}
        onClick={() => {
          SetisOpen(false);
          Setconformation(false);
          heandle_Accept_Profile(getinstructor_Id);
        }}
      />
    </>
  );
};

export default NewRequests;
