import axios from "axios";
import { baseURL } from "../../URL";

export const Student_Review = async (body,studentId,instructorId) => {
    try {
      let response = await axios({
        method: "POST",
        url: `${baseURL}/student/review/instructor/${studentId}/${instructorId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data:body
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };