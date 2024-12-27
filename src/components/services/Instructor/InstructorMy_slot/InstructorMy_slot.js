import axios from "axios";
import { baseURL } from "../../URL";

export const Get_Instructor_Created_slot = async (instructorId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/all/timeSlote/${instructorId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
