import axios from "axios";
import { baseURL } from "../../URL";

export const GetInvoiceList = async (studentId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/booking/history/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};


export const GetInvoicedetai = async (studentPaymentId) => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/student/invoice/detail/${studentPaymentId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };