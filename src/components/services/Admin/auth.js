import axios from "axios";
import { baseURL } from "../URL";

export const AdminLogin = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/admin/login`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};