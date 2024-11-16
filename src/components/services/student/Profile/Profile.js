import axios from "axios";
import { baseURL } from "../../URL";

export const StudentDashboard = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/dashboard/${JSON.parse(localStorage.getItem("_id"))}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};


export const Student_Profile_Details = async (studentId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/myprofile/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
