import axios from "axios";
import { baseURL } from "../../URL";

export const Student_get_Upcoming_Classes = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/student/course/class`,
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };
  