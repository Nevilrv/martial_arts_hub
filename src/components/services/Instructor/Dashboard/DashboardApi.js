import axios from "axios";
import { baseURL } from "../../URL";

export const DashboardData = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/instructor/dashboard/${JSON.parse(
        localStorage.getItem("_id")
      )}`,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
