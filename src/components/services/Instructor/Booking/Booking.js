import axios from "axios";
import { baseURL } from "../../URL";

export const Instructor_Booking_Requests = async (id) => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/instructor/students/booking/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };

  export const Confirm_Booking_status = async (bookingId) => {
    try {
      let response = await axios({
        method: "POST",
        url: `${baseURL}/instructor/confrim/booking/${bookingId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };