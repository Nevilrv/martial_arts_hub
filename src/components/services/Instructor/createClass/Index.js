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

export const Instructor_get_Upcoming_Classes = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/createClass/classdetail/${id}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
