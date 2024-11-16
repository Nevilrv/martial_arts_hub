import React, { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Tabs from "../Tabs";
import {
  GetDisputeChat,
  GetDisputeDetails,
  Send_Dispute_message,
} from "../../../services/student/Dispute/Dispute";
import UserProfile from "../../../../assets/images/userProfile.jpg";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import io from "socket.io-client";
import { baseURL } from "../../../services/URL";
import Spinner from "../../../layouts/Spinner";
const Arbitration = () => {
  const Socket = io(`${baseURL}`);
  const { disputeId } = useParams();
  const [loading, setLoading] = useState(false);
  const [DisputeDetails, setDisputeDetails] = useState({});
  const [DisputeChats, setDisputeChats] = useState([]);
  let chatId;
  const chatContainerRef = useRef(null);

  const GetgetInstructorClass = async () => {
    setLoading(true);
    const result = await GetDisputeDetails(disputeId);
    if (result?.success === true) {
      setLoading(false);
      setDisputeDetails(result.data);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const GetDisputeChats = async () => {
    setLoading(true);
    const result = await GetDisputeChat(disputeId);
    if (result?.success === true) {
      setLoading(false);
      console.log(result.data, "====>log Chat");
      setDisputeChats(result.data);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    GetDisputeChats();
    GetgetInstructorClass();
    Socket.on("chatMessagesLoaded", (newChat) => {
      setDisputeChats(newChat.messages);
    });

    Socket.on("socketError", (err) => {
      console.error(err.message);
    });

    return () => {
      Socket.off("chatMessagesLoaded");
      Socket.off("socketError");
    };
  }, [chatId]);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [DisputeChats]);
  return (
    <>
    {loading&&<Spinner/>}
      <Tabs />
      <div className="mt-11 px-3 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-3xl font-semibold">New Dispute</h1>
        </div>
        <div className="md:flex items-center justify-between mt-4 gap-y-9 grid grid-cols-1">
          <div className="md:w-[30%] h-[110px] dispute_shape flex items-center justify-center bg-black">
            <div>
              <p className="text-xl text-white/50 text-center">-: StAGE 1 :-</p>
              <h2 className="text-[20px] text-white font-bold text-center">
                Identify the Issue
              </h2>
            </div>
          </div>
          <FaArrowAltCircleRight className="text-[34px] text-black md:block hidden" />
          <div className="md:w-[30%] h-[110px] dispute_shape bg-black flex items-center justify-center">
            <div>
              <p className="text-xl text-white/50 text-center">-: StAGE 2 :-</p>
              <h2 className="text-[20px] text-white font-bold text-center">
                Negotiation
              </h2>
            </div>
          </div>
          <FaArrowAltCircleRight className="text-[34px] text-green md:block hidden" />
          <div className="md:w-[30%] h-[110px] dispute_shape bg-green flex items-center justify-center">
            <div>
              <p className="text-xl text-white/50 text-center">-: StAGE 3 :-</p>
              <h2 className="text-[20px] text-white font-bold text-center">
                ARBITRATION
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-10 border border-black/10 rounded-xl p-5">
          <h2 className="text-black font-semibold text-[17px]">
          Stage 3 - Arbitration
          </h2>
          <p className="text-base text-gay-400 font-light mt0.5">
          At this stage, students and instructors can discuss about the dispute, admin will give the final solution.
          </p>
        </div>
        <div className="mt-5 bg-[#D2CFC9] rounded-xl p-5">
          <div className="flex items-center justify-between md:w-[85%] flex-wrap">
            <h2 className="text-lg font-normal text-gay-400">
              <span className="text-black font-semibold">Class Name:</span>{" "}
              {DisputeDetails.className}
            </h2>
            <h2 className="text-lg font-normal text-gay-400">
              <span className="text-black font-semibold">Dispute:</span>{" "}
              {DisputeDetails.studentName} vs {DisputeDetails.instructorName}
            </h2>
            <h2 className="text-lg font-normal text-gay-400">
              <span className="text-black font-semibold">Dispute type:</span>{" "}
              {DisputeDetails.disputeType}
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          <div className="mt-11 border border-black/10 rounded-xl p-5 md:col-span-2">
            <div
              ref={chatContainerRef}
              className="h-[580px] overflow-auto flex flex-col gap-y-6"
            >
              {DisputeChats.map((chats) => (
                <div
                  className={`flex ${
                    chats.sender_type === "student" ? "flex-row-reverse" : null
                  }  gap-3`}
                >
                  <div className="h-[60px] w-[60px] overflow-hidden rounded-full grayscale">
                    <img
                      src={
                        chats.sender_type === "student"
                          ? JSON.parse(localStorage.getItem("profile_picture"))
                          : UserProfile
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <div
                      className={`${
                        chats.sender_type === "student"
                          ? "bg-Green-100 rounded-tr-none"
                          : "bg-red-100 rounded-tl-none"
                      } p-4 pr-[25px] rounded-xl `}
                    >
                      <p className="text-gay-400 max-w-[480px] font-light">
                        {chats.message}
                      </p>
                    </div>
                    <p
                      className={`${
                        chats.sender_type === "student"
                          ? "text-green text-right"
                          : "text-red-200"
                      }  mt-2 text-xs`}
                    >
                      {dayjs(chats.updated_at).format("MMM,DD,YYYY")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-11 w-full bg-red-200 pl-5 py-4 rounded-md">
              <p className="text-white font-semibold">Dispute Closed by admin on {dayjs(DisputeDetails.closeDate).format("DD MMM YYYY")}. Solution given by admin will be shown here.</p>
            </div>
          </div>
          <div className="mt-11 border border-black/10 rounded-xl p-5 max-h-fit">
            <div className="flex items-center justify-between pb-4 border-b border-black/15">
              <h4 className="text-base text-gay-300 font-normal">
                Total Disputed Amount:
              </h4>
              <h2 className="text-red-200 font-bold text-[22px]">
                ${DisputeDetails.rate}
              </h2>
            </div>
            <div className="pb-9 border-b border-black/15 mt-8">
              <div className="flex items-center justify-between">
                <h4 className="text-base text-gay-300 font-normal">
                  Student (You) wants to receive:
                </h4>
                <h2 className="text-red-200 font-bold text-[22px]">
                  $
                  {DisputeDetails.RefundAmount === null
                    ? 0
                    : DisputeDetails.RefundAmount}
                </h2>
              </div>
              <div className="flex items-center justify-between mt-5">
                <h4 className="text-base text-gay-300 font-normal">
                  Instructor ({DisputeDetails.instructorName}) wants to pay:
                </h4>
                <h2 className="text-red-200 font-bold text-[22px]">
                  $
                  {DisputeDetails.RefundAmount === null
                    ? 0
                    : DisputeDetails.RefundAmount}
                </h2>
              </div>
            </div>
            <h2 className="text-gay-300 font-semibold mt-6">Result:</h2>
            <div className="mt-2.5 p-5 bg-red-100 rounded-xl">
              <h2 className="text-red-200 font-semibold">
                {`Closed on ${dayjs(DisputeDetails.closeDate).format("DD MMM YYYY")}`}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arbitration;
