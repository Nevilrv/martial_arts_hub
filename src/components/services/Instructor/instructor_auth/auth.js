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