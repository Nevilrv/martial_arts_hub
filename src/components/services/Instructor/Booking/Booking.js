import axios from "axios";
import { baseURL } from "../../URL";

export const Instructor_Booking_Requests = async (id) => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/instructor/students/booking/${id}`,
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };