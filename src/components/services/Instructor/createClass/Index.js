import axios from "axios";
import { baseURL } from "../../URL";

export const Instructor_Create_Class = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/instructor/create/class`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Instructor_Create_Slot = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/instructor/create/timeslote`,
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
export const Instructor_End_Class = async (id) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/instructor/meeting/end/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const Instructor_change_class_status = async (classId) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/instructor/class/start/${classId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};


export const Instructor_get_Upcoming_Classes = async (instructorId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/class/myclass/${instructorId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const Instructor_Edit_Class = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/update/classdetail/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};