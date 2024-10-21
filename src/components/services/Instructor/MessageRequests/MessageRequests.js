import axios from "axios";
import { baseURL } from "../../URL";

export const Get_Requests_Pending = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/student/inqurymessage`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const SeeStudentProfile = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/student/view/profile/${id}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Student_Message_Request = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/student/profile/${id}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const Student_Message_status = async (notificationId,body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/instructor/student/inqurymessage/status/${notificationId}`,
      data:body,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
