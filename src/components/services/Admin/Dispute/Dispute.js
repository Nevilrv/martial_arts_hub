import axios from "axios";
import { baseURL } from "../../URL";

export const Dispute_List = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/all/dispute`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Dispute_Details = async (disputeId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/dispute/detail/${disputeId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Close_Dispute = async (disputeId,close) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/admin/dispute/close?disputeId=${disputeId}&status=${close}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const GetDisputeChat = async (disputeId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/student/dispute/chat/${disputeId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Send_Dispute_message = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/admin/chat/student/send-msg`,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
