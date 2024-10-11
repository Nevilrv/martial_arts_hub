import axios from "axios";
import { baseURL } from "../../URL";

export const StudentDashboard = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/dashboard`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
