import axios from "axios";
import { baseURL } from "../../URL";

export const funds = async (year, month) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/release/funds?year=${year}&month=${month}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const fundsDetails = async (instructorId, year, month) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/release/fundsdetail?instructorId=${instructorId}&year=${year}&month=${month}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const fundsRelease = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/admin/release/instructor/payments`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: body
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};