import axios from "axios";
import { baseURL } from "../../URL";

export const GetInstructors = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/home/instructor`,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};