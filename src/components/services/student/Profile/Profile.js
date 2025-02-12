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

export const Student_Profile_Data = async (studentId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/edit/data/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Student_Profile_Update_Data = async (body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/student/update/profile`,
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

export const Student_Booking_History = async (studentId) => {
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


export const ProccedStripeIdentity = async (studentId) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/student/procced/identity/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
}
