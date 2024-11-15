import axios from "axios";
import { baseURL } from "../../URL";

export const Get_Reviews_List = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/review/student/${JSON.parse(
        localStorage.getItem("_id")
      )}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
