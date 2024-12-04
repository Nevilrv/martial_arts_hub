import React, { useState, useEffect } from "react";
import AgoraUIKit from "agora-react-uikit";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../services/URL";
import axios from "axios";
import { toast } from "react-toastify";
import { Routing } from "../../shared/Routing";
import OutlineBtn from "./OutlineBtn";
import {
  Instructor_change_class_status,
  Instructor_End_Class,
} from "../../services/Instructor/createClass/Index";

const Videocall = () => {
  const { channelName, role } = useParams();
  const [rtcProps, setRtcProps] = useState(null);
  const [videoCall, setVideoCall] = useState(true);
  const classid = localStorage.getItem("classId");
  const _id = JSON.parse(localStorage.getItem("_id"));
  const navigate = useNavigate();
  const userRole = JSON.parse(localStorage.getItem("Role"));

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
        enableScreensharing: true,
        enableAudio: true,
      });
      toast.success(response.message);
    } catch (error) {
      console.error("Failed to initialize Agora:", "error",error);
      toast.error(error.response?.data?.message || "Failed to join the room");
      if (
        error.response?.data?.message ===
        "Please log in to access this resource"
      ) {
        navigate(
          userRole === "Student"
            ? Routing.StudentLogin
            : Routing.InstructorLogin
        );
      }
    }
  };
  useEffect(() => {
    initAgora();
    // eslint-disable-next-line
  }, [channelName, role]);

  const Endclass = async () => {
    const result = await Instructor_End_Class(_id, classid);
    if (result?.success === true) {
      localStorage.removeItem("classId");
      window.open(Routing.InstructorMyClass);
    } else {
    }
  };

  const callbacks = {
    EndCall: () => {
      if (videoCall) {
        setVideoCall(false);
        if (userRole === "Instructor") {
          Endclass();
        }
        else{
          window.open(Routing.StudentMyClass)
        }
      }
    },
  };
  const styleProps = {
    localBtnContainer: {
      backgroundColor: "#969696",
      width: "83.4%",
    },
    remoteBtnContainer: {
      backgroundColor: "#969696",
      width: "83.4%",
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

  return !videoCall ? (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Welcome Back {JSON.parse(localStorage.getItem("Role"))}</h3>
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
    <div
      style={{ display: "flex", width: "100%", height: "calc(100vh - 85px)" }}
    >
      {rtcProps ? (
        <AgoraUIKit
          rtcProps={rtcProps}
          callbacks={callbacks}
          styleProps={styleProps}
        />
      ) : (
        <div>Loading.......</div>
      )}
    </div>
  );
};

export default Videocall;
