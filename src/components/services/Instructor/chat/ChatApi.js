import axios from "axios";
import { baseURL } from "../../URL";

export const Student_List_Message = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/mychat/section/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
