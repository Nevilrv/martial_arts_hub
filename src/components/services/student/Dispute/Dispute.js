import axios from "axios";
import { baseURL } from "../../URL";

export const GetInstructorForDispute = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/dispute/instructor/${id}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const GetInstructorClassForDispute = async (instructorId, studentId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/dispute/class/${instructorId}/${studentId}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const CreateDispute = async (formData,studentId) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/dispute/create/${studentId}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const GetDispute = async (studentId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/dispute/${studentId}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
