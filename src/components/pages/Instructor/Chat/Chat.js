import React, { useEffect, useRef, useState } from "react";
import Tabs from "../index";
import { CiSearch } from "react-icons/ci";
import Spinner from "../../../layouts/Spinner";
import { ShareIcon } from "../../../../assets/icon";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiCheckDoubleFill } from "react-icons/ri";
import {
  Chat_Messages,
  Send_Messages,
  Student_List_Message,
} from "../../../services/Instructor/chat/ChatApi";
import UserProfile from "../../../../assets/images/userProfile.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";
import Socket from "../../common/Socket";
import User from "../../../../assets/images/userProfile.jpg";

const Chat = () => {
  const InstructorId = JSON.parse(localStorage.getItem("_id"));
  const navigate = useNavigate();
  let chatId;
  const [message, setMessage] = useState(null);
  const chatContainerRef = useRef(null);
  const [studentId, setstudentId] = useState({});
  const [Loading, setLoading] = useState(false);
  const [showChat, setshowChat] = useState(false);
  const [ChatLimit, setChatLimit] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [StudentList, setStudentList] = useState([]);
  const [AllStudentList, setAllStudentList] = useState([]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  const Student_List = async () => {
    setLoading(true);
    const result = await Student_List_Message(InstructorId);
    if (result?.success === true) {
      setLoading(false);
      setStudentList(result.data.student);
      setAllStudentList(result.data.student);
      setstudentId(result.data.student[0]);
    } else {
      setLoading(false);
    }
  };

  const Student_Chat_Messages = async () => {
    setLoading(true);
    const result = await Chat_Messages(InstructorId, studentId.studentId);
    if (result?.success === true) {
      setLoading(false);
      setChatMessages(result.data);
      Socket.emit("MessageRead", {
        studentId: studentId.studentId,
        instructorId: InstructorId,
        sender: "instructor",
      });
      console.log("==========>" );
      
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        localStorage.clear();
        navigate(Routing.AdminLogin);
      } else if (result?.message === "Chat not found") {
        setChatMessages([]);
      }
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    // setLoading(true);
    const body = {
      instructorId: InstructorId,
      studentId: studentId.studentId,
      message: message,
      sender: JSON.parse(localStorage.getItem("Role")).toLocaleLowerCase(),
    };
    if (message.trim()) {
      const data = {
        roomId: studentId?.roomId,
        sender: "instructor",
        message: message,
        updated_at: new Date(),
      };
      Socket.emit("loadchat", data);
      setMessage("");
      scrollToBottom();
    }
    const result = await Send_Messages(body);
    if (result?.success === true) {
      setLoading(false);
      chatId = result.data.chatId;
      Socket.emit("loadChatMessages", { chatId: chatId });
      setMessage("");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Filter messages with sender === "instructor"
    const instructorMessages = chatMessages.filter(
      (message) => message.sender === "instructor"
    );

    // Update the state if the length exceeds 9
    if (instructorMessages.length > 9) {
      setChatLimit(true);
    } else {
      setChatLimit(false);
    }
  }, [chatMessages]);

  useEffect(() => {
    Student_List();
  }, []);

  useEffect(() => {
    Student_Chat_Messages();
  }, [studentId]);

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  useEffect(() => {
    Socket.emit("joinRoom", studentId?.roomId);
    Socket.on("getchat", (data) => {
      setChatMessages((prev) => [...prev, data]);
    });
    return () => {
      Socket.off("getchat");
    };
  }, [studentId?.roomId]);

  const heandleChat = (studentData) => {
    setstudentId({});
    setstudentId(studentData);
    setshowChat(true);
  };

  const heandleSearch = (event) => {
    const search = event.target.value;
    if (search === "") {
      setStudentList(AllStudentList);
    } else {
      const filterStudent = StudentList.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
      );
      setStudentList(filterStudent);
    }
  };

  return (
    <>
      {Loading && <Spinner />}
      <Tabs>
        <div className="grid lg:grid-cols-4 grid-cols-1 h-[calc(100vh-180px)] overflow-y-auto">
          <>
            <div className="py-7 border-r border-[#6b6b6b63] lg:block hidden">
              <div className="px-4 mb-3">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-[55px] border border-black/30 bg-transparent rounded-full placeholder:text-black/40 pl-[55px] focus:outline-none"
                    placeholder="Search person"
                    onChange={(event) => {
                      heandleSearch(event);
                    }}
                  />
                  <CiSearch className="absolute top-1/2 -translate-y-1/2 left-6 text-2xl" />
                </div>
              </div>
              {StudentList.map((studentData) => (
                <div
                  className="h-[95px] border-b border-[#6B6B6B4D] px-4 flex items-center cursor-pointer"
                  onClick={() => setstudentId(studentData)}
                >
                  <div className="flex items-center w-full">
                    <div className="relative">
                      <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                        <img
                          src={studentData.profile || UserProfile}
                          alt=""
                          srcset=""
                          className="grayscale h-full w-full object-cover"
                        />
                      </div>
                      <div
                        className={`h-4 w-4 ${
                          studentData.status === true
                            ? "bg-green"
                            : "bg-gay-300"
                        } rounded-full absolute bottom-0 right-0 border-[3px] border-primary`}
                      ></div>
                    </div>
                    <div className="ml-3 w-full">
                      <div className="flex items-center justify-between w-full">
                        <h2 className="text-lg font-semibold">
                          {studentData.name}
                        </h2>
                        <p className="text-black/50 text-[11px] font-semibold">
                          09:27 AM
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p className="text-ellipsis xl:max-w-[171px] lg:max-w-[130px] max-w-[171px] overflow-hidden text-nowrap text-sm text-black/50">
                          Yes, sure! Learning Brazilian jiu jitsu Yes, sure!
                          Learning Brazilian jiu jitsu Yes, sure! Learning
                          Brazilian jiu jitsu Yes, sure! Learning Brazilian jiu
                          jitsu
                        </p>
                        {studentData.chatcount > 0 && (
                          <div className="w-[25px] h-[18px] bg-green flex items-center justify-center rounded-full text-white text-[11px]">
                            {studentData.chatcount}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-3 px-5 relative lg:block hidden h-[calc(100vh-180px)] overflow-hidden">
              <div className="h-[95px] bg-primary_dark px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-[62px] h-[62px] rounded-full overflow-hidden grayscale">
                    <img
                      src={studentId.profile || User}
                      alt=""
                      srcset=""
                      className="scale-x-[-1] h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{studentId.name}</h2>
                    <p className="text-black/50 text-[13px]">
                      {studentId.role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[957px] bg-Green-100 h-[55px] text-green rounded-full mx-auto mt-8 flex items-center justify-center">
                <p>
                  For security reasons, students are limited to sending only 10
                  messages before joining your class.
                </p>
              </div>
              <div className="flex flex-col justify-end px-5 mt-auto h-[68%] overflow-y-auto pb-10">
                <div
                  className="flex justify-between flex-col overflow-y-auto"
                  ref={chatContainerRef}
                >
                  {chatMessages?.map((chat) => (
                    <>
                      <div
                        className={`flex items-start gap-3 ${
                          chat.sender ===
                          JSON.parse(
                            localStorage.getItem("Role")
                          ).toLocaleLowerCase()
                            ? "flex-row-reverse"
                            : null
                        }`}
                      >
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                          <img
                            src={
                              chat.sender ===
                              JSON.parse(
                                localStorage.getItem("Role")
                              ).toLocaleLowerCase()
                                ? localStorage.getItem("profile_picture") ||
                                  User
                                : studentId.profile || User
                            }
                            alt=""
                            srcset=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div
                            className={` ${
                              chat.sender ===
                              JSON.parse(
                                localStorage.getItem("Role")
                              ).toLocaleLowerCase()
                                ? "max-w-[380px] bg-black px-[18px] py-3 font-medium rounded-xl rounded-tr-none"
                                : "max-w-[335px] bg-white px-[18px] py-3 font-medium rounded-xl rounded-tl-none"
                            } `}
                          >
                            <p
                              className={`text-[15px]  ${
                                chat.sender ===
                                JSON.parse(
                                  localStorage.getItem("Role")
                                ).toLocaleLowerCase()
                                  ? "text-[15px] text-white text-right"
                                  : null
                              }`}
                            >
                              {chat.message}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-1 ml-1">
                            <p className="font-semibold text-[11px] text-black/50">
                              {new Date(chat.updated_at).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                            </p>
                            <RiCheckDoubleFill className="text-green" />
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="w-[97%] absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="relative w-full h-full">
                  <input
                    type="text"
                    className="w-full bg-transparent border border-black/30 h-[60px] rounded-full  px-4 placeholder:text-black/40 pr-[70px] focus:outline-none"
                    placeholder="Write your message here"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        sendMessage();
                      }
                    }}
                  />
                  <button
                    className="absolute top-1/2 -translate-y-1/2 right-6 font-semibold text-red-200"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </>

          {!showChat && (
            <div className="py-7 border-r border-[#6b6b6b63] lg:hidden block">
              <div className="px-4 mb-3">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-[55px] border border-black/30 bg-transparent rounded-full placeholder:text-black/40 pl-[55px] focus:outline-none"
                    placeholder="Search person"
                  />
                  <CiSearch className="absolute top-1/2 -translate-y-1/2 left-6 text-2xl" />
                </div>
              </div>
              {StudentList.map((studentData) => (
                <div
                  className="h-[95px] border-b border-[#6B6B6B4D] px-4 flex items-center cursor-pointer"
                  onClick={() => {
                    heandleChat(studentData);
                  }}
                >
                  <div className="flex items-center w-full">
                    <div className="relative">
                      <div className="w-[57px] h-[57px] rounded-full overflow-hidden">
                        <img
                          src={studentData.profile || UserProfile}
                          alt=""
                          srcset=""
                          className="grayscale h-full w-full object-cover"
                        />
                      </div>
                      <div className="h-4 w-4 bg-green rounded-full absolute bottom-0 right-0 border-[3px] border-primary"></div>
                    </div>
                    <div className="ml-3 w-full">
                      <div className="flex items-center justify-between w-full">
                        <h2 className="text-lg font-semibold">
                          {studentData.name}
                        </h2>
                        <p className="text-black/50 text-[11px] font-semibold">
                          09:27 AM
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p className="text-ellipsis xl:max-w-[171px] lg:max-w-[130px] max-w-[171px] overflow-hidden text-nowrap text-sm text-black/50">
                          Yes, sure! Learning Brazilian jiu jitsu Yes, sure!
                          Learning Brazilian jiu jitsu Yes, sure! Learning
                          Brazilian jiu jitsu Yes, sure! Learning Brazilian jiu
                          jitsu
                        </p>
                        <div className="w-[25px] h-[18px] bg-green flex items-center justify-center rounded-full text-white text-[11px]">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showChat && (
            <div className="lg:px-5 relative lg:hidden block">
              <div className="h-[95px] bg-primary_dark px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaArrowLeft
                    className="text-xl"
                    onClick={() => setshowChat(false)}
                  />
                  <div className="w-[62px] h-[62px] rounded-full overflow-hidden grayscale">
                    <img
                      src={studentId.profile || User}
                      alt=""
                      srcset=""
                      className="scale-x-[-1] h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{studentId.name}</h2>
                    <p className="text-black/50 text-[13px]">
                      {studentId.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="cursor-pointer">
                    <ShareIcon />
                  </div>
                  <div className="cursor-pointer">
                    <BsThreeDotsVertical className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="max-w-[957px] bg-Green-100 lg:h-[55px] lg:flex hidden text-green rounded-full mx-auto mt-8 items-center justify-center">
                <p>
                  For security reasons, students are limited to sending only 10
                  messages before joining your class.
                </p>
              </div>
              <div className="flex flex-col justify-end lg:py-0 py-5 px-5 mt-auto h-[87%] overflow-y-auto pb-10">
                <div className="flex justify-between flex-col">
                  {chatMessages?.map((chat) => (
                    <>
                      <div
                        className={`flex items-start gap-3 ${
                          chat.sender ===
                          JSON.parse(
                            localStorage.getItem("Role")
                          ).toLocaleLowerCase()
                            ? "flex-row-reverse"
                            : null
                        }`}
                      >
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                          <img
                            src={
                              chat.sender ===
                              JSON.parse(
                                localStorage.getItem("Role")
                              ).toLocaleLowerCase()
                                ? localStorage.getItem("profile_picture") ||
                                  User
                                : studentId.profile || User
                            }
                            alt=""
                            srcset=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div
                            className={` ${
                              chat.sender ===
                              JSON.parse(
                                localStorage.getItem("Role")
                              ).toLocaleLowerCase()
                                ? "max-w-[380px] bg-black px-[18px] py-3 font-medium rounded-xl rounded-tr-none"
                                : "max-w-[335px] bg-white px-[18px] py-3 font-medium rounded-xl rounded-tl-none"
                            } `}
                          >
                            <p
                              className={`text-[15px]  ${
                                chat.sender ===
                                JSON.parse(
                                  localStorage.getItem("Role")
                                ).toLocaleLowerCase()
                                  ? "text-[15px] text-white text-right"
                                  : null
                              }`}
                            >
                              {chat?.message}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-1 ml-1">
                            <p className="font-semibold text-[11px] text-black/50">
                              {new Date(chat.updated_at).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                            </p>
                            <RiCheckDoubleFill className="text-green" />
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="w-[97%] lg:absolute bottom-0 left-1/2 lg:mx-0 mx-auto lg:-translate-x-1/2">
                <div className="relative w-full h-full">
                  <input
                    type="text"
                    className="w-full bg-transparent border border-black/30 h-[60px] rounded-full  px-4 placeholder:text-black/40 pr-[70px] focus:outline-none"
                    placeholder="Write your message here"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        sendMessage();
                      }
                    }}
                  />
                  <button
                    className="absolute top-1/2 -translate-y-1/2 right-6 font-semibold text-red-200"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Tabs>
    </>
  );
};

export default Chat;
