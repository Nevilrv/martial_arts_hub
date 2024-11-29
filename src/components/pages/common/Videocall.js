import React, { useState, useEffect } from "react";
import AgoraUIKit from "agora-react-uikit";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../services/URL";
import axios from "axios";
import { toast } from "react-toastify";
import { Routing } from "../../shared/Routing";
import OutlineBtn from "./OutlineBtn";

const Videocall = () => {
  const { channelName, role } = useParams();
  const [rtcProps, setRtcProps] = useState(null);
  const [videoCall, setVideoCall] = useState(true);
  const navigate = useNavigate();

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
      if (error === "Please log in to access this resource") {
        const userRole = JSON.parse(localStorage.getItem("Role"));
        if (userRole === "Student") {
          navigate(Routing.StudentLogin);
        } else if (userRole === "Instructor") {
          navigate(Routing.InstructorLogin);
        } else {
          console.error("Failed to join room:", error);
        }
      }
    }
  };

  useEffect(() => {
    initAgora();
    // eslint-disable-next-line
  }, [channelName, role]);
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  const styleProps = {
    // localBtnContainer: { backgroundColor: "#969696", width: "83.4%" },
    // remoteBtnContainer: { backgroundColor: "#969696", width: "83.4%" },
    // UIKitContainer: { height: "calc(100vh - 85px)", width: "100%" },

    localBtnContainer: {
      backgroundColor: "#969696",
      width: "83.4%",
      borderColor: "#ff0000", // Border color for button container
      borderWidth: 2, // Border width for button container
      borderRadius: 8, // Rounded corners for button container
    },
    remoteBtnContainer: {
      backgroundColor: "#969696",
      width: "83.4%",
      borderColor: "#00ff00",
      borderWidth: 2,
      borderRadius: 8,
    },
    localBtnStyles: {
      backgroundColor: "#0000ff", // Background color of the local buttons
      color: "#ffffff", // Icon color for the buttons
      borderColor: "#ff00ff", // Border color of the buttons
      borderWidth: 1, // Border width for the buttons
      borderRadius: 5, // Rounded corners for buttons
    },
    remoteBtnStyles: {
      backgroundColor: "#ffcc00",
      color: "#000000",
      borderColor: "#ff9900",
      borderWidth: 1,
      borderRadius: 5,
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
