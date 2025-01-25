import axios from "axios";
import { baseURL } from "../../URL";

export const Instructor_List_Message = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/mymessage/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};




