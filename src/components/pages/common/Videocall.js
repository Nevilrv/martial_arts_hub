import React, { useState, useEffect } from "react";
import AgoraUIKit from "agora-react-uikit";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../services/URL";
import axios from "axios";
import { toast } from "react-toastify";
import { Routing } from "../../shared/Routing";
import OutlineBtn from "./OutlineBtn";
import { Instructor_End_Class } from "../../services/Instructor/createClass/Index";
import Spinner from "../../layouts/Spinner";
import { Allert_Popup_Icon, Reviewsvg } from "../../../assets/icon";
import RataingPopup from "./RataingPopup";
import {
  Instructor_Review,
  Student_Review,
} from "../../services/student/Review/Review";
import AgoraRTC from "agora-rtc-sdk-ng";
import Socket from "./Socket";
import Popup from "./Popup";

const Videocall = () => {
  const { channelName, role } = useParams();
  const [rtcProps, setRtcProps] = useState(null);
  const [videoCall, setVideoCall] = useState(true);
  const [isOpen, SetisOpen] = useState(false);
  const [EndClassPopup, SetEndClassPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewMessage, setReviewMessage] = useState("");
  const navigate = useNavigate();
  const classid = localStorage.getItem("classId");
  const _id = JSON.parse(localStorage.getItem("_id"));
  const userRole = JSON.parse(localStorage.getItem("Role"));
  const isMobile = window.innerWidth <= 768;

  const handleStarClick = (star) => {
    setRating(star);
  };

  const initAgora = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/meeting/genrateToken`,
        {
          channelName,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const token = response.data.data;
      setRtcProps({
        appId: "fe27d8a87b6d4614bb016f58bf0e286a",
        channel: channelName,
        token,
        role,
        enableVideo: true,
        enableAudio: true,
      });
    } catch (error) {
      console.error("Failed to initialize Agora:", error);
      setLoading(false);
      toast.error(error.response?.data?.message || "Failed to join the room");
      if (
        error.response?.data?.message ===
          "Please log in to access this resource" ||
        error.response?.data?.message ===
          "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(
          userRole === "Student"
            ? Routing.StudentLogin
            : Routing.InstructorLogin
        );
      }
    }
  };

  const InstructorEndclass = async () => {
    const result = await Instructor_End_Class(_id, classid);
    if (result?.success === true) {
      SetisOpen(true);
    }
  };

  const StudentEndclass = () => {
    SetisOpen(true);
  };

  useEffect(() => {
    initAgora();
  }, [channelName, role, videoCall]);

  const handleStudentReview = async () => {
    const body = {
      rating,
      feedback: reviewMessage,
      userType: JSON.parse(localStorage.getItem("Role")).toLocaleLowerCase(),
    };
    const studentId = JSON.parse(localStorage.getItem("_id"));
    const instructorId = localStorage.getItem("InstructorId");
    setLoading(true);
    const result = await Student_Review(body, studentId, instructorId);
    if (result?.success) {
      SetisOpen(false);
      setLoading(false);
      setVideoCall(false);
      navigate(Routing.StudentMyClass, { replace: true });
      toast.success("Thank you for your feedback!");
    } else {
      toast.error(result?.message);
    }
  };

  const handleInstructorReview = async () => {
    const body = {
      rating,
      feedback: reviewMessage,
      userType: JSON.parse(localStorage.getItem("Role")).toLocaleLowerCase(),
    };
    const instructorId = JSON.parse(localStorage.getItem("_id"));
    const studentId = localStorage.getItem("studentId");
    setLoading(true);
    const result = await Instructor_Review(body, studentId, instructorId);
    if (result?.success) {
      Socket.emit("calldisconnect", { disconnect: true });
      SetisOpen(false);
      setLoading(false);
      setVideoCall(false);
      localStorage.removeItem("classId");
      toast.success("Thank you for your feedback!");
      navigate(Routing.InstructorMyClass, { replace: true });
    } else {
      toast.error(result?.message);
    }
  };

  const callbacks = {
    EndCall: () => {
      userRole === "Student" ? StudentEndclass() : SetEndClassPopup(true);
    },
  };

  const styleProps = {
    localBtnContainer: {
      backgroundColor: "#969696",
      width: isMobile ? "100%" : "83.4%",
    },
    remoteBtnContainer: {
      backgroundColor: "#969696",
      width: isMobile ? "100%" : "83.4%",
    },
    localBtnStyles: {
      backgroundColor: "transparent",
      color: "#000",
      borderColor: "#000",
    },
    remoteBtnStyles: {
      backgroundColor: "#000",
      color: "#000000",
      borderColor: "#000",
    },
    UIKitContainer: {
      height: "calc(100vh - 85px)",
      width: "100%",
    },
  };

  const HeandleSkipReview = () => {
    SetisOpen(false);
    setVideoCall(false);
    userRole === "Student"
      ? navigate(Routing.StudentMyClass, { replace: true })
      : navigate(Routing.InstructorMyClass, { replace: true });
  };

  //
  useEffect(() => {
    Socket.on("getcalldisconnect", (data) => {
      if (data.disconnect === true) {
        setVideoCall(false);
        userRole === "Student"
          ? navigate(Routing.StudentMyClass, { replace: true })
          : navigate(Routing.InstructorMyClass, { replace: true });
      }
    });
    return () => {
      Socket.off("getcalldisconnect");
    };
  }, [videoCall]);

  return !videoCall ? (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Welcome Back {userRole}</h3>
      <OutlineBtn
        text={"Start Call"}
        className={"bg-Green-100 border-green text-green"}
        onClick={() => {
          setVideoCall(true);
          initAgora();
        }}
      />
    </div>
  ) : (
    <>
      <div
        style={{ display: "flex", width: "100%", height: "calc(100vh - 85px)" }}
      >
        {rtcProps ? (
          <>
            {loading && <Spinner />}
            <AgoraUIKit
              rtcProps={rtcProps}
              callbacks={callbacks}
              styleProps={styleProps}
            />
            {userRole === "Student" ? (
              <RataingPopup
                isOpen={isOpen}
                SetisOpen={SetisOpen}
                HeandleSkipReview={HeandleSkipReview}
                Icons={<Reviewsvg />}
                Headding={"Rate Instructor!"}
                rating={rating}
                setRating={setRating}
                setReviewMessage={setReviewMessage}
                ReviewMessage={reviewMessage}
                handleStarClick={handleStarClick}
                onClick={handleStudentReview}
                BodyText={
                  "Thank you for joining the session! Your feedback helps us improve! Rate your experience about our instructor to let us know what they’re doing right and where they can grow."
                }
                BtnText={"Submit"}
              />
            ) : (
              <RataingPopup
                isOpen={isOpen}
                SetisOpen={SetisOpen}
                HeandleSkipReview={HeandleSkipReview}
                Icons={<Reviewsvg />}
                Headding={"Rate Student!"}
                rating={rating}
                setRating={setRating}
                setReviewMessage={setReviewMessage}
                ReviewMessage={reviewMessage}
                handleStarClick={handleStarClick}
                onClick={handleInstructorReview}
                BodyText={
                  "Thank you for joining the session! Your feedback helps us improve! Rate your experience about our instructor to let us know what they’re doing right and where they can grow."
                }
                BtnText={"Submit"}
              />
            )}
          </>
        ) : (
          <Spinner />
        )}
      </div>
      <Popup
        Icons={<Allert_Popup_Icon />}
        Headding={"Are you sure?"}
        BodyText={"Are you sure you want to End Your Class?"}
        isOpen={EndClassPopup}
        SetisOpen={SetEndClassPopup}
        onClick={InstructorEndclass}
        BtnText={"EndClass"}
        BtnText2={"Back To Class"}
        BtnText2Click={() => SetEndClassPopup(false)}
      />
    </>
  );
};

export default Videocall;
