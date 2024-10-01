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