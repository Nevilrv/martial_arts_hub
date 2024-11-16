import axios from "axios";
import { baseURL } from "../../URL";

export const Reports = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/generate/report?Page=1&PerPage=10`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};