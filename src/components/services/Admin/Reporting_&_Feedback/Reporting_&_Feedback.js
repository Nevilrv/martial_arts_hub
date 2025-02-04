import axios from "axios";
import { baseURL } from "../../URL";

export const Reports = async (month) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/generate/report?Page=1&PerPage=10&month=${month}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const FeedbackReports = async (userType, duration) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/feedback/report?userType=${userType || ""}&duration=${duration || ""}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};