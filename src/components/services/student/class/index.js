import axios from "axios";
import { baseURL } from "../../URL";

export const Student_get_Upcoming_Classes = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/class/myclass/${JSON.parse(localStorage.getItem("_id"))}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Student_get_Slot = async (instructorId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/instructor/classdate/${instructorId}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Get_time_slot = async (body) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/instructor/timeslote?instructorId=${body.instructorId}&classType=${body.classType}&date=${body.date}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Send_inqury_message = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/instructor/inqurymessage`,
      data: body,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
