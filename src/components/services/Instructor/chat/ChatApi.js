import axios from "axios";
import { baseURL } from "../../URL";

export const Student_List_Message = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/mychat/section/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Chat_Messages = async (instructorId, studentId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/getChat/instructor/student/${instructorId}/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const Send_Messages = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/instructor/chat/student/send-msg`,
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
