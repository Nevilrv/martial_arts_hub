import axios from "axios";
import { baseURL } from "../../URL";

export const Student_get_Upcoming_Classes = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/class/myclass/${JSON.parse(localStorage.getItem("_id"))}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Change_class_status = async (classId) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/student/myclass/joinclass/${classId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Student_Payment = async (studentId,classId,bookingId,instructorId) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/myclass/buyclass/${studentId}/${classId}/${bookingId}/${instructorId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};


export const Payment_Successful_Data = async (studentId,classId,bookingId,instructorId,body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/buyclass/infostore/${studentId}/${classId}/${bookingId}/${instructorId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Payment_Book_class = async (studentId,body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/booking/instructor/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Student_get_Slot = async (instructorId,classType) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/instructor/classdate?instructorId=${instructorId}&classType=${classType}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Send_inqury_messages = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/instructor/inqurymessage`,
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
