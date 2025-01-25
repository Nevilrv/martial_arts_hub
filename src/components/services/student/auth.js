import axios from "axios";
import { baseURL } from "../URL";

export const StudentLogin = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/login`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const StudentSignUp = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/signup`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const ForgetpasswordOtp = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: body.type === 'student' ? `${baseURL}/student/forgetpassword/otp` : `${baseURL}/instructor/forgetpassword/otp`,
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

export const ResetPassword = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: body.type === 'instructor' ? `${baseURL}/instructor/forgetpassword/resetpassword` : `${baseURL}/student/forgetpassword/resetpassword`,
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

export const Change_Password = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: body.role === 'instructor' ? `${baseURL}/instructor/change/password` : `${baseURL}/student/change/password`,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    //
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const resetpassword = async (body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/student/resetpassword`,
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

