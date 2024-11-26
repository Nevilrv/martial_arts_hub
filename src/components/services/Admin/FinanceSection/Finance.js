import axios from "axios";
import { baseURL } from "../../URL";

export const funds = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/fianace/calculated/funds`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Finance_chart = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/admin/fianace/funds/chart`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };

export const Finance_transactions = async (days) => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/admin/fianace/previous/transactions?days=${days}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
};

  
export const Finance_lastcalculated = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/admin/fianace/lastcalculated/funds`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };


  export const Monitor_payment = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/admin/monitor/payments`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };

  export const Student_payment = async (studentPaymentId) => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/admin/student/payments/details/${studentPaymentId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };

  export const Payment_Refund_list = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/admin/handle/refunds/list`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };

  export const Payment_Refund_details = async (studentId,instructorId,bookingId,classId) => {
    try {
      let response = await axios({
        method: "GET",
        url: `${baseURL}/admin/view/refund/details?studentId=${studentId}&instructorId=${instructorId}&bookingId=${bookingId}&classId=${classId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };


  
  export const Pay_out_Refund = async (body) => {
    try {
      let response = await axios({
        method: "PUT",
        url: `${baseURL}/admin/store/refund/resaon`,
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

  export const Pay_out_Confirm = async (body) => {
    try {
      let response = await axios({
        method: "PUT",
        url: `${baseURL}/admin/refund/student`,
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

