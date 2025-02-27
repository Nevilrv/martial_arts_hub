import React, { useEffect, useRef, useState } from "react";
import Tabs from "../index";
import { CiSearch } from "react-icons/ci";
import { ShareIcon } from "../../../../assets/icon";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiCheckDoubleFill } from "react-icons/ri";
import UserProfile from "../../../../assets/images/userProfile.jpg";
import { FaArrowLeft } from "react-icons/fa";
import Socket from "../../common/Socket";
import { Student_List_Message } from "../../../services/Instructor/chat/ChatApi"
import User from "../../../../assets/images/userProfile.jpg";

const Chat = () => {
  const InstructorId = JSON.parse(localStorage.getItem("_id"));
  const [message, setMessage] = useState(null);
  const chatContainerRef = useRef(null);
  const [studentId, setstudentId] = useState({});
  const [showChat, setshowChat] = useState(false);
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
    const result = await Student_List_Message(InstructorId)

    console.log(result, "=========instructro")

    setStudentList(result.data.student);
    setAllStudentList(result.data.instructor);
  };

  const sendMessage = async () => {
    if (message.trim()) {
      Socket.emit("loadchat", { roomId: studentId?.roomId, sender: "instructor", chatType: "msg", messages: message, updated_at: new Date(), isRead: studentId?.roomId === localStorage.getItem('insLive'), studentId: studentId?.studentId, instructorId: InstructorId, disputeId: "" });
      setMessage("");
      scrollToBottom();
    }
  };


  useEffect(() => {
    Student_List();
  }, [InstructorId]);


  useEffect(() => {
    const handleStdListUpdate = (data) => {
      if (data.status) {
        Student_List();
      }
    };

    Socket.on("InsListUpadte", handleStdListUpdate);

    return () => {
      Socket.off("InsListUpadte", handleStdListUpdate);
    };
  }, []);


  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  useEffect(() => {
    Socket.emit("joinRoom", studentId?.roomId);

    Socket.on("getchat", (data) => {
      if (data.roomId === studentId.roomId) {
        setChatMessages((prev) => [...prev, data]);
      }
    });

    Socket.on('loadStdChat', (data) => {
      if (data.length === 0) {
        setChatMessages([]);
      } else {
        setChatMessages(data);
      }
    })

    return () => {
      Socket.off("getchat");
      Socket.off("loadStdChat");
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


  const handleLive = (roomId, studentId) => {

    Socket.emit('IsLive', { roomId, role: 'instructor' })

    Socket.emit('RealtimeChatData', { sender: 'student', roomId: roomId, studentId: studentId, instructorId: InstructorId })
  }

  return (
    <>
      <Tabs>
        <div className="grid lg:grid-cols-4 grid-cols-1 h-[calc(100vh-180px)] overflow-y-auto" id="hideScoll">
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
                onClick={() => {
                  setstudentId(studentData);
                  handleLive(studentData.roomId, studentData.studentId);
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
                    <div className={`h-4 w-4 ${studentData.roomId === localStorage.getItem('insLive')
                      ? "bg-green" : "bg-gay-300"} rounded-full absolute bottom-0 right-0 border-[3px] border-primary`}></div>
                  </div>
                  <div className="ml-3 w-full">
                    <div className="flex items-center justify-between w-full">
                      <h2 className="text-lg font-semibold">
                        {studentData.name}
                      </h2>
                      <p className="text-black/50 text-[11px] font-semibold">
                        {
                          studentData.LastChatTime
                            ? new Date(studentData.LastChatTime).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                            : "0:00"
                        }
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-ellipsis xl:max-w-[171px] lg:max-w-[130px] max-w-[171px] overflow-hidden text-nowrap text-sm text-black/50">
                        {studentData.LastChat}
                      </p>
                      <div className="w-[25px] h-[18px] bg-green flex items-center justify-center rounded-full text-white text-[11px]">
                        {studentData.chatdata.filter(item => !item.isRead && item.sender === 'student').length}
                      </div>
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
            <div className="flex flex-col justify-end px-5 mt-auto h-[68%] overflow-y-auto pb-10" id="hideScoll">
              <div
                className="flex justify-between flex-col overflow-y-auto"
                ref={chatContainerRef}
                id="hideScoll"
              >

                {chatMessages?.map((chat) => (
                  <>
                    <div
                      className={`flex items-start gap-3 ${chat.sender ===
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
                          className={` ${chat.sender ===
                            JSON.parse(
                              localStorage.getItem("Role")
                            ).toLocaleLowerCase()
                            ? "max-w-[380px] bg-black px-[18px] py-3 font-medium rounded-xl rounded-tr-none"
                            : "max-w-[335px] bg-white px-[18px] py-3 font-medium rounded-xl rounded-tl-none"
                            } `}
                        >
                          <p
                            className={`text-[15px]  ${chat.sender ===
                              JSON.parse(
                                localStorage.getItem("Role")
                              ).toLocaleLowerCase()
                              ? "text-[15px] text-white text-right"
                              : null
                              }`}
                          >
                            {chat.messages}
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
                          {chat.sender === JSON.parse(localStorage.getItem("Role"))?.toLocaleLowerCase() && (
                            <RiCheckDoubleFill className={`${chat.roomId === localStorage.getItem('insLive')
                              ? "text-green"
                              : chat.isRead === true
                                ? "text-green"
                                : "text-gay-300"
                              }`} />
                          )}
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
                  className="w-full bg-primary border border-black/30 h-[60px] rounded-full  px-4 placeholder:text-black/40 pr-[70px] focus:outline-none"
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
                    handleLive(studentData.roomId, studentData.studentId);
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
                      <div className={`h-4 w-4 ${studentData.roomId === localStorage.getItem('insLive') ? "bg-green" : "bg-gay-300"} rounded-full absolute bottom-0 right-0 border-[3px] border-primary`}></div>
                    </div>
                    <div className="ml-3 w-full">
                      <div className="flex items-center justify-between w-full">
                        <h2 className="text-lg font-semibold">
                          {studentData.name}
                        </h2>
                        <p className="text-black/50 text-[11px] font-semibold">
                          {studentData.LastChatTime
                            ? new Date(studentData.LastChatTime).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                            : "0:00"
                          }
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p className="text-ellipsis xl:max-w-[171px] lg:max-w-[130px] max-w-[171px] overflow-hidden text-nowrap text-sm text-black/50">
                          {studentData.LastChat}
                        </p>
                        <div className="w-[25px] h-[18px] bg-green flex items-center justify-center rounded-full text-white text-[11px]">
                          {studentData.chatdata.filter(item => !item.isRead && item.sender === 'student').length}
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
              <div className="h-[95px] bg-primary_dark px-6 py-4 flex items-center justify-between ">
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
              </div>
              <div className="max-w-[957px] bg-Green-100 lg:h-[55px] lg:flex hidden text-green rounded-full mx-auto mt-8 items-center justify-center">
                <p>
                  For security reasons, students are limited to sending only 10
                  messages before joining your class.
                </p>
              </div>
              <div className="flex flex-col justify-end lg:py-0 py-5 px-5 mt-auto h-[87%] overflow-y-auto pb-10" id="hideScoll">
                <div className="flex justify-between flex-col overflow-y-auto" id="hideScoll" ref={chatContainerRef}>
                  {chatMessages?.map((chat) => (
                    <>
                      <div
                        className={`flex items-start gap-3 ${chat.sender ===
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
                            className={` ${chat.sender ===
                              JSON.parse(
                                localStorage.getItem("Role")
                              ).toLocaleLowerCase()
                              ? "max-w-[380px] bg-black px-[18px] py-3 font-medium rounded-xl rounded-tr-none"
                              : "max-w-[335px] bg-white px-[18px] py-3 font-medium rounded-xl rounded-tl-none"
                              } `}
                          >
                            <p
                              className={`text-[15px]  ${chat.sender ===
                                JSON.parse(
                                  localStorage.getItem("Role")
                                ).toLocaleLowerCase()
                                ? "text-[15px] text-white text-right"
                                : null
                                }`}
                            >
                              {chat?.messages}
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
                            {chat.sender === JSON.parse(localStorage.getItem("Role"))?.toLocaleLowerCase() && (
                              <RiCheckDoubleFill className={`${chat.roomId === localStorage.getItem('insLive')
                                ? "text-green"
                                : chat.isRead === true
                                  ? "text-green"
                                  : "text-gay-300"
                                }`} />
                            )}
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
                    className="w-full bg-primary border border-black/30 h-[60px] rounded-full  px-4 placeholder:text-black/40 pr-[70px] focus:outline-none"
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
