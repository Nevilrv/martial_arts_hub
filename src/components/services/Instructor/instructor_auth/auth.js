import axios from "axios";
import { baseURL } from "../../URL";

export const InstructorLogin = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/instructor/login`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const InstructorSignUp = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/instructor/signup`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Get_Instructor_Details = async (token) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/myprofile/${JSON.parse(
        localStorage.getItem("_id")
      )}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const InstructorProfile = async (formData) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/instructor/add/profile/${JSON.parse(
        localStorage.getItem("_id")
      )}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
