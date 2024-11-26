import axios from "axios";
import { baseURL } from "../URL";

export const Admin_Dashboard_data = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/dashboard`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Admin_Progress = async (month) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/progress/chart?month=${month}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Instructor_Request = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/instructor/request`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Weekly_Transactions = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/barchart`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};


export const Instructor_Request_Details = async (instructorId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/instructor/profile/${instructorId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Requests_Accept = async (instructorId,status) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/admin/request/status?instructorId=${instructorId}&status=${status}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Instructor_List = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/view/accept/instructor`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Instructor_Block_List = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/block/instructor`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Instructor_Block = async (InstructorId,status) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/admin/block/unblock/instructor?instructorId=${InstructorId}&status=${status}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Instructor_Remove = async (InstructorId) => {
  try {
    let response = await axios({
      method: "DELETE",
      url: `${baseURL}/admin/remove/instructor/${InstructorId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};