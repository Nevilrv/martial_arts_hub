import React, { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Tabs from "../Tabs";
import {
  GetDisputeChat,
  GetDisputeDetails,
} from "../../../services/student/Dispute/Dispute";
import UserProfile from "../../../../assets/images/userProfile.jpg";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import Spinner from "../../../layouts/Spinner";
import Socket from "../../common/Socket";
const Negotiation = () => {
  const { disputeId } = useParams();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [DisputeDetails, setDisputeDetails] = useState({});
  const [DisputeChats, setDisputeChats] = useState([]);
  const chatContainerRef = useRef(null);


  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const GetgetInstructorClass = async () => {
    setLoading(true);
    const result = await GetDisputeDetails(disputeId);
    if (result?.success === true) {
      setLoading(false);
      setDisputeDetails(result.data);

    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const GetDisputeChats = async () => {
    setLoading(true);
    const result = await GetDisputeChat(disputeId);
    if (result?.success === true) {
      setDisputeChats(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    GetDisputeChats();
    GetgetInstructorClass();
  }, []);

  const heandleChat = async () => {

    if (message.trim()) {
      Socket.emit("Disputeloadchat", { roomId: disputeId, sender: "student", chatType: "dispute", messages: message, updated_at: new Date(), isRead: false, studentId: JSON.parse(localStorage.getItem("_id")), disputeId: disputeId });
      setMessage("");
      scrollToBottom()
    }

  };


  useEffect(() => {
    Socket.emit("joinRoom", disputeId);

    Socket.on("Disputegetchat", (data) => {
      console.log(data, "==========>")
      setDisputeChats((prev) => [...prev, data]);
    });

    return () => {
      Socket.off("Disputegetchat");
    };
  }, [disputeId]);


  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [DisputeChats]);

  return (
    <>
      {loading && <Spinner />}
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
          <FaArrowAltCircleRight className="text-[34px] text-green md:block hidden" />
          <div className="md:w-[30%] h-[110px] dispute_shape bg-green flex items-center justify-center">
            <div>
              <p className="text-xl text-white/50 text-center">-: StAGE 2 :-</p>
              <h2 className="text-[20px] text-white font-bold text-center">
                Negotiation
              </h2>
            </div>
          </div>
          <FaArrowAltCircleRight className="text-[34px] text-[#B5B1B1] md:block hidden" />
          <div className="md:w-[30%] h-[110px] dispute_shape bg-gay-50 flex items-center justify-center">
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
            Stage 2 - Negotiation
          </h2>
          <p className="text-base text-gay-400 font-light mt0.5">
            At this stage, students and instructors can discuss about the
            dispute, and the Admin can monitor and provide input.
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
                  className={`flex ${chats.sender === "student" ? "flex-row-reverse" : null
                    }  gap-3`}
                >
                  <div className="h-[60px] w-[60px] overflow-hidden rounded-full grayscale">
                    <img
                      src={
                        chats.sender === "student"
                          ? JSON.parse(localStorage.getItem("profile_picture"))
                          : UserProfile
                      }
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <div
                      className={`${chats.sender === "student"
                        ? "bg-Green-100 rounded-tr-none"
                        : "bg-red-100 rounded-tl-none"
                        } p-4 pr-[25px] rounded-xl `}
                    >
                      <p className="text-gay-400 max-w-[480px] font-light">
                        {chats.messages}
                      </p>
                    </div>
                    <p
                      className={`${chats.sender === "student"
                        ? "text-green text-right"
                        : "text-red-200"
                        }  mt-2 text-xs`}
                    >
                      {dayjs(chats.updated_at).format("MMM DD,YYYY")} at {dayjs(chats.updated_at).format("hh:mm A")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-11">
              <div className="relative">
                <input
                  type="text"
                  className="focus:outline-none bg-[#DAD8D0] text-black w-full h-[60px] rounded-full pl-7 pr-16 placeholder:text-black/40"
                  placeholder="Write your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      heandleChat();
                    }
                  }}
                />
                <div
                  className="cursor-pointer h-[60px] w-[60px] absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  onClick={heandleChat}
                >
                  <span className="text-red-200 font-medium text-[15px]">
                    Send
                  </span>
                </div>
              </div>
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
                  Admin ({DisputeDetails.instructorName}) wants to pay:
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
            <div className="mt-2.5 p-5 bg-Green-100 rounded-xl">
              <h2 className="text-green font-semibold">
                {DisputeDetails.status === "active" ? "Ongoing" : "Closed"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Negotiation;
