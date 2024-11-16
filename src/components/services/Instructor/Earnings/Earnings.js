import axios from "axios";
import { baseURL } from "../../URL";

export const getEarnings = async (instructorId,duration) => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/instructor/erning/report?instructorId=${instructorId}&duration=${duration||""}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };
  