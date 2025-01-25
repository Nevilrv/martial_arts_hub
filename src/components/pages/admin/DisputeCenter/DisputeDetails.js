import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import OutlineBtn from "../../common/OutlineBtn";
import Instructor1 from "../../../../assets/images/Instructor-4.png";
// import { LuEye } from "react-icons/lu";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import { useNavigate, useParams } from "react-router-dom";
import User from "../../../../assets/images/userProfile.jpg";
import {
  Close_Dispute,
  Dispute_Details,
  GetDisputeChat,
} from "../../../services/Admin/Dispute/Dispute";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { baseURL } from "../../../services/URL";
import { Routing } from "../../../shared/Routing";
import Socket from "../../common/Socket";

const DisputeDetails = () => {
  const { disputeId } = useParams();
  const [Disputes, setDisputes] = useState();
  const [Loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [DisputeChats, setDisputeChats] = useState([]);
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();

  const Get_Dispute_Deatls = async () => {
    setLoading(true);
    const result = await Dispute_Details(disputeId);
    if (result?.success === true) {
      setDisputes(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Dispute_Deatls();
  }, []);

  const CloseDispute = async () => {
    setLoading(true);
    const result = await Close_Dispute(
      disputeId,
      Disputes?.instructorId,
      "close"
    );
    if (result?.success === true) {
      setLoading(false);
      navigate(Routing.Admin_Dispute_Requests);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  // chate

  const GetDisputeChats = async () => {
    setLoading(true);
    const result = await GetDisputeChat(disputeId);
    if (result?.success === true) {
      setLoading(false);
      setDisputeChats(result.data);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    GetDisputeChats();
  }, []);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [DisputeChats]);

  // send chat
  const heandleChat = async () => {

    if (message.trim()) {
      Socket.emit("loadchat", { roomId: disputeId, sender: "admin", chatType: "dispute", messages: message, updated_at: new Date(), isRead: false, studentId: Disputes.studentId, disputeId: disputeId });
      setMessage("");
      scrollToBottom();
    }

  };
  useEffect(() => {

    Socket.emit("joinRoom", disputeId);

    Socket.on("getchat", (data) => {
      console.log("Student received chat:", data);
      setDisputeChats((prev) => [...prev, data]);
    });

    return () => {
      Socket.off("getchat");
    };
  }, [disputeId]);
  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-x-5 flex-wrap sm:justify-start justify-center">
          <FaArrowLeft
            className="text-2xl cursor-pointer"
            onClick={() => navigate(Routing.Admin_Dispute_Requests)}
          />
          <h2 className="text-Dark_black font-bold text-2xl">
            Dispute Details
          </h2>
          <p className="text-[#6F6F6F] text-[15px] sm:-ml-5 sm:text-left text-center mt-2">
            (Dispute Center/All Dispute Requests/View Details)
          </p>
        </div>
        <OutlineBtn
          text="Close Dispute"
          onClick={CloseDispute}
          className="text-white bg-red-200 border-none sm:w-auto w-full"
        />
      </div>
      <div className="mt-7 bg-primary p-7 rounded-xl">
        <div className="grid md:grid-cols-2 gap-y-3">
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute ID:</h3>
            <p className="text-Dark_black font-[450]">{Disputes?.disputeId}</p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Raised Date:</h3>
            <p className="text-Dark_black font-[450]">
              {dayjs(Disputes?.createdAt).format("DD/MM/YYYY")}
            </p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Raised by:</h3>
            <p className="text-Dark_black font-[450]">
              {Disputes?.studentName}
            </p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Amount:</h3>
            <p className="text-Dark_black font-[450]">${Disputes?.rate}</p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Against:</h3>
            <p className="text-Dark_black font-[450]">
              {Disputes?.instructorName}
            </p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Status:</h3>
            <p
              className={`${Disputes?.status === "active" ? "text-green" : "text-red-200"
                } font-[450]`}
            >
              {" "}
              <span
                className={`h-2 w-2 rounded-full ${Disputes?.status === "active" ? "bg-green" : "bg-red-200"
                  } inline-block mr-0.5`}
              ></span>{" "}
              {Disputes?.status}
            </p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <h3 className="text-gay-300 font-medium">Dispute Type/Reason:</h3>
            <p className="text-Dark_black font-[450]">
              {Disputes?.disputeType}
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-7">
        <div className="bg-primary p-7 rounded-xl">
          <p className="text-gay-300 text-base">
            Detailed description of dispute given by Student
          </p>
          <p className="text-black text-lg mt-3">{Disputes?.description}</p>
        </div>
        <div className="bg-primary p-7 rounded-xl">
          <p className="text-gay-300 text-base">
            Evidence(screenshots, documents, receipts)
          </p>
          <div className="flex items-center gap-3 mt-5 flex-wrap sm:justify-start justify-center">
            {Disputes?.evidenceScreenShort.map((ScreenShort) => (
              <Zoom className="sm:w-auto w-full">
                <div className="sm:mx-0 mx-auto w-[125px] h-[100px] rounded-md overflow-hidden group relative cursor-pointer">
                  <img
                    src={ScreenShort || User}
                    alt=""
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-Dark_black font-bold text-2xl">
          Group Chat (Review)
        </h2>
        <p className="text-[#6F6F6F] text-sm mt-2">
          In this step, the dispute raiser and defendant will negotiate the
          issue. As Admin, you can monitor all messages and step in with replies
          when necessary.
        </p>
        <div className="mt-6 bg-primary rounded-xl pt-10  pb-7">
          <div
            className="flex flex-col gap-8 max-h-[530px] overflow-y-auto lg:px-6 px-3"
            ref={chatContainerRef}
          >
            {/*chats*/}
            {DisputeChats?.map((chat) => (
              <div
                className={`${chat?.sender !== "student" ? "justify-end" : null
                  } flex items-start gap-4`}
              >
                <div
                  className={`h-14 w-14 rounded-full overflow-hidden ${chat?.sender !== "student" ? "order-2" : null
                    }`}
                >
                  <img
                    src={chat.sender === "student"
                      ? Disputes?.studenProfile
                      : User}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="max-w-[75%]">
                  <div
                    className={`w-full p-4 ${chat?.sender === "student"
                      ? "bg-red-100 text-gay-400 rounded-tl-none"
                      : "bg-black text-white rounded-tr-none"
                      } rounded-xl  text-sm  border border-red-200/15`}
                  >
                    {chat?.messages}
                  </div>
                  <p
                    className={`${chat?.sender === "student" ? "text-red-200" : "text-black"
                      }  text-xs mt-2`}
                  >
                    {chat?.updated_at}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex items-center gap-2 justify-between lg:px-6 px-3">
            <div className="relative 2xl:w-[87%] xl:w-[50%] w-[80%]">
              <input
                type="text"
                disabled={Disputes?.status === "close"}
                className="w-full py-6 bg-[#DAD8D0] block h-[75px] text-lg px-7 pr-[84px] rounded-full focus:outline-none placeholder:text-black/40"
                placeholder="Write your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                {...(Disputes?.status !== "close" && {
                  onKeyPress: (event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      heandleChat();
                    }
                  },
                })}
              />
              {Disputes?.status !== "close" && (
                <button
                  className="bg-transparent text-red-200 border-none text-lg font-medium absolute top-1/2 -translate-y-1/2 right-6"
                  onClick={heandleChat}
                >
                  Send
                </button>
              )}
            </div>
            <div className="items-center justify-between gap-2 xl:flex hidden">
              <OutlineBtn
                className="bg-red-200 text-white border-none"
                text="Close Dispute"
                onClick={CloseDispute}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisputeDetails;
