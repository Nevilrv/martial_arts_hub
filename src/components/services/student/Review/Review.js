import axios from "axios";
import { baseURL } from "../../URL";

export const Student_Review = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/review/instructor`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: body
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Instructor_Review = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/instructor/review/student`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: body
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Student_PlatfromReview = async (body, studentId) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/review/plateform/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: body
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Instructor_PlatfromReview = async (body, instructorId) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/instructor/review/plateform/${instructorId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: body
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};