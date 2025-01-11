import axios from "axios";
import { baseURL } from "../../URL";

export const Students_List = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/student/viewstudent`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Students_Detail = async (studentId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/student/profile/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Students_Block_List = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/block/student`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Students_Block = async (body) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/admin/block/unblock/student`,
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
