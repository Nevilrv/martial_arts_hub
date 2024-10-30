import axios from "axios";
import { baseURL } from "../../URL";

export const Instructor_List_Message = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/mymessage/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const ChatOnly = async (instructorId,studentId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/getChat/student/instructor/${instructorId}/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};


export const Student_Send_Messages = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/chat/instructor/send-msg`,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
