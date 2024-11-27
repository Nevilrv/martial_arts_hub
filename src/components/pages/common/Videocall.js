import React, { useState, useEffect } from "react";
import AgoraUIKit from "agora-react-uikit";
import { useParams } from "react-router-dom";
import { baseURL } from "../../services/URL"
import axios from "axios";

const Videocall = () => {
  const { channelName, role } = useParams(); // Extract channelName and role from URL
  const [rtcProps, setRtcProps] = useState(null);
  const [videoCall, setVideoCall] = useState(true); // Initially set to false, so button shows up

  useEffect(() => {
    const initAgora = async () => {
      try {
        const response = await axios.post(`${baseURL}/meeting/genrateToken`, {
          channelName,
          role,
        });
        const token = response.data.token;

        // Set RTC properties for Agora UIKit
        setRtcProps({
          appId: "fe27d8a87b6d4614bb016f58bf0e286a",
          channel: channelName,
          token,
          role,
          enableVideo: true,
          enableAudio: true
        });
      } catch (error) {
        console.error("Failed to join room:", error);
      }
    };

    initAgora(); // Call initAgora only when videoCall is true
  }, [channelName, role, videoCall]); // Added videoCall to trigger effect when it changes

  // Callbacks for Agora events
  const callbacks = {
    EndCall: () => setVideoCall(false), // Handle end call event
  };

  // Style properties for customization (optional)
  const styleProps = {
    localBtnContainer: { backgroundColor: "#007bff" }, // Custom button container styling
    remoteBtnContainer: { backgroundColor: "#dc3545" }, // Example remote styling
    UIKitContainer: { height: "100vh", width: "100%" }, // Fullscreen video call
  };

  return !videoCall ? (
    // If videoCall is false, show the Start Call button
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Welcome to the Instructor</h3>
      <button
        // onClick={() => setVideoCall(true)} // Set videoCall to true when button is clicked
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Start Call
      </button>
    </div>
  ) : (
    // Once videoCall is true, show the Agora video call UI
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      {rtcProps ? (
        <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} styleProps={styleProps} />
      ) : (
        <div>Loading........</div>
      )}
    </div>
  );
};

export default Videocall;
