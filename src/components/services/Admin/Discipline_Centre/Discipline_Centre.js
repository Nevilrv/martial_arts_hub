import axios from "axios";
import { baseURL } from "../../URL";

export const Discipline_List = async (userType,duration) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/getDiscipline?userType=${userType||""}&duration=${duration||""}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};