import React, { useState, useEffect } from "react";
import AgoraUIKit from "agora-react-uikit";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../services/URL";
import axios from "axios";
import { toast } from "react-toastify";
import { Routing } from "../../shared/Routing";

const Videocall = () => {
  const { channelName, role } = useParams(); // Extract channelName and role from URL
  const [rtcProps, setRtcProps] = useState(null);
  const [videoCall, setVideoCall] = useState(true); // Initially set to false, so button shows up
  const navigate = useNavigate()

  useEffect(() => {
    const initAgora = async () => {
      try {
        // Fetch the token from your server
        const response = await axios.post(
          `${baseURL}/meeting/genrateToken`,
          {
            channelName,
            role,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your actual token
            },
          }
        );
        const token = response.data.data;

        // Set RTC properties for Agora UIKit
        setRtcProps({
          appId: "fe27d8a87b6d4614bb016f58bf0e286a",
          channel: channelName,
          token,
          role,
          enableVideo: true,
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

    initAgora();
    // eslint-disable-next-line
  }, [channelName, role, videoCall]);
  const callbacks = {
    EndCall: () => setVideoCall(false), 
  };
  const styleProps = {
    localBtnContainer: { backgroundColor: "#007bff" }, 
    remoteBtnContainer: { backgroundColor: "#dc3545" }, 
    UIKitContainer: { height: "calc(100vh - 85px)", width: "100%" },
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "calc(100vh - 85px)" }}>
      {rtcProps ? (
        <AgoraUIKit
          rtcProps={rtcProps}
          callbacks={callbacks}
          styleProps={styleProps}
        />
      ) : (
        <div>Loading........</div>
      )}
    </div>
  );
};

export default Videocall;
