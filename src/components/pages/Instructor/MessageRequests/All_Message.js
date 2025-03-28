import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import User from "../../../../assets/images/userImage.png";
import OutlineBtn from "../../common/OutlineBtn";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaArrowLeft } from "react-icons/fa";
import {
  Get_Requests_Pending,
  SeeStudentProfile,
  Student_Message_Request,
  Student_Message_status,
} from "../../../services/Instructor/MessageRequests/MessageRequests";
import dayjs from "dayjs";
import Spinner from "../../../layouts/Spinner";
import { toast } from "react-toastify";

const All_Message = () => {
  const [MessageRequest, setMessageRequest] = useState(false);
  const [StudentProfile, setStudentProfile] = useState(false);
  const [NotificationId, setNotificationId] = useState();
  const [MessageRequestdata, setMessageRequestdata] = useState([]);
  const [StudentData, setStudentData] = useState({});
  const [StudentMessageRequest, setStudentMessageRequest] = useState({});
  const [loading, setLoading] = useState(false);

  const Get_requests_pending = async () => {
    setLoading(true);
    const result = await Get_Requests_Pending();
    if (result?.success === true) {
      setLoading(false);
      setMessageRequestdata(result.data.pending);
    } else {
      setLoading(false);
    }
  };

  const heandleSeeProfile = async (messageReques) => {
    const studentId = messageReques.Student.studentId;
    setStudentProfile(true);
    setLoading(true);
    const result = await SeeStudentProfile(studentId);
    if (result?.success === true) {
      setStudentData(result.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const heandleViewRequest = async (messageReques) => {
    setLoading(true);
    const studentId = messageReques.Student.studentId;
    const result = await Student_Message_Request(studentId);
    if (result?.success === true) {
      setStudentMessageRequest(result.data);
      setNotificationId(result.data.notificationId);
      setLoading(false);
    } else {
      setLoading(false);
    }
    setMessageRequest(true);
  };

  const heandleRequest = async (status) => {
    setLoading(true);
    const body = {
      status: status,
    };
    const result = await Student_Message_status(NotificationId, body);
    if (result?.success === true) {
      setMessageRequest(false);
      Get_requests_pending();
      setLoading(false);
    } else {
      toast.error(result.message);
      setMessageRequest(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    Get_requests_pending();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {MessageRequestdata?.length <= 0 && (
        <div className="flex items-center justify-center flex-col h-[calc(100vh-409px)]">
          <FaPaperPlane className="text-[80px] text-[#BDBBB5]" />
          <h2 className="text-[26px] font-medium text-center mt-7">
            Requests list is empty!
          </h2>
          <p className="text-lg text-gay-300 max-w-[490px] mx-auto text-center">
            You haven't received any requests yet! When student send inquiry
            message It’s details will be shown here.
          </p>
        </div>
      )}
      {MessageRequestdata?.length >= 0 &&
        MessageRequestdata.map((messageReques) => (
          <div className="px-3 lg:px-8 md:h-[143px] md:py-0 gap-y-5 py-3 flex flex-wrap items-center sm:justify-between border-b border-gay-400">
            <div className="flex items-center flex-wrap gap-y-5 sm:w-auto w-full">
              <div className="sm:w-[82px]  w-1/2 sm:mx-0 mx-auto sm:h-[82px] overflow-hidden rounded-full">
                <img
                  src={messageReques?.Student?.profile_picture || User}
                  alt="Wrestling"
                  className="w-full h-full object-cover grayscale aspect-square"
                />
              </div>
              <div className="sm:ml-5">
                <h2 className="text-black texrt-[20px] font-medium">
                  {messageReques?.Student?.name}
                </h2>
                <div className="xl:flex items-center">
                  <p className="text-[13px] text-black/70  mt-0.5 leading-none">
                    <span className="font-medium">Request received on: </span>{" "}
                    {dayjs(messageReques?.createdAt).format("DD-MM-YYYY")}
                  </p>
                  <span className="hidden xl:block text-xl text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1 "></span>
                  <p className="text-[13px] text-black/70  mt-1">
                    <span className="font-medium">Inquiry class: </span>
                    {messageReques?.title}
                  </p>
                </div>
                <p className="text-black/70 text-sm max-w-5xl mt-1">
                  {messageReques?.body.slice(0,20)}...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap sm:w-auto w-full">
              <OutlineBtn
                text={"See Profile"}
                className={"bg-transparent border-black text-black sm:w-[148px] w-full"}
                onClick={() => heandleSeeProfile(messageReques)}
              />
              <OutlineBtn
                text={"View Request"}
                className={
                  "bg-green border-none text-white font-medium sm:w-[159px] w-full"
                }
                onClick={() => heandleViewRequest(messageReques)}
              />
            </div>
          </div>
        ))}

      <Dialog
        open={MessageRequest}
        onClose={setMessageRequest}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-[16.4px] transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary md:px-11 px-3 py-12 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-[95%] md:max-w-5xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 overflow-x-auto"
            >
              <div className="flex items-center">
                <FaArrowLeft
                  className="text-2xl text-black cursor-pointer"
                  onClick={() => setMessageRequest(false)}
                />
                <h2 className="font-semibold text-lg ml-4">Message Request</h2>
              </div>
              <div className="mt-10">
                <div className="flex items-center sm:justify-between justify-center flex-wrap">
                  <div className="flex items-center flex-wrap sm:justify-start justify-center">
                    <div className="w-[150px] h-[150px] md:w-[70px] md:h-[70px] rounded-full overflow-hidden">
                      <img
                        src={
                          StudentMessageRequest?.Student?.profile_picture ||
                          User
                        }
                        alt="User"
                        className="grayscale h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-black texrt-[20px] font-semibold">
                        {StudentMessageRequest?.Student?.name}
                      </h2>
                      <div className="xl:flex items-center flex-wrap">
                        <p className="text-[13px] text-black/70  mt-0.5">
                          <span className="font-medium">
                            Request received on:
                          </span>{" "}
                          {dayjs(StudentMessageRequest?.createdAt).format(
                            "DD-MM-YYYY"
                          )}
                        </p>
                        <span className="hidden xl:block text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                        <p className="text-[13px] text-black/70  mt-0.5">
                          <span className="font-medium">Inquiry class:</span>
                          {StudentMessageRequest?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col items-center gap-3 md:w-auto w-full md:mt-0 mt-3">
                    <OutlineBtn
                      text={"Decline"}
                      onClick={() => heandleRequest("declined")}
                      className={
                        "bg-transparent border-red-200 text-red-200 w-full"
                      }
                    />
                    <OutlineBtn
                      text={"Accept"}
                      onClick={() => heandleRequest("accepted")}
                      className={
                        "bg-green border-none text-white font-medium w-full"
                      }
                    />
                  </div>
                </div>
                <div className="mt-6 py-6 md:px-5">
                  <p className="text-base text-black/70 font-medium break-words">
                    {StudentMessageRequest.body}
                  </p>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={StudentProfile}
        onClose={setStudentProfile}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-[16.4px] transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-black text-white pt-12 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full md:max-w-[90%] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex items-center px-11">
                <FaArrowLeft
                  className="text-2xl cursor-pointer"
                  onClick={() => setStudentProfile(false)}
                />
                <h2 className="font-semibold text-lg ml-4">Student Profile</h2>
              </div>
              <div>
                <div className="xl:py-20 py-10 bg-black px-14 relative flex items-center md:justify-between justify-center flex-wrap">
                  <div>
                    <h2 className="text-white text-[30px] capitalize">
                      {StudentData.name}
                    </h2>
                    <h2 className="text-white/50 text-[15px] md:text-left text-center md:mb-0 mb-5">
                      (Student)
                    </h2>
                  </div>
                  <div className="sm:w-96 sm:h-96 rounded-full object-cover object-top grayscale border-[5px] border-primary xl:absolute top-7 right-14 overflow-hidden">
                    <img
                      src={StudentData.profile || User}
                      className="h-52 w-52 object-cover object-top"
                    />
                  </div>
                </div>
                <div className="py-14 bg-primary lg:px-14 px-6">
                  <div className="flex items-start justify-between flex-wrap">
                    <div>
                      <h3 className="text-black text-lg font-medium">
                        About Student
                      </h3>
                      <p className="text-black/70 text-lg 2xl:max-w-[871px] xl:max-w-[700px] w-full">
                        {StudentData.aboutMe || "aboutMe is not found"}
                      </p>
                      <div className="mt-[73px]">
                        <h3 className="text-black text-lg font-medium">
                          Additional Details
                        </h3>
                        <p className="text-black/70 text-lg 2xl:max-w-[871px] xl:max-w-[700px] w-full">
                          {StudentData.additionalDetail ||
                            "additionalDetail is not found"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default All_Message;
