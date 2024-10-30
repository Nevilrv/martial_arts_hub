import axios from "axios";
import { baseURL } from "../URL";

export const Admin_Dashboard_data = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/dashboard`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Admin_Progress = async (month) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/progress/chart?month=${month}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
