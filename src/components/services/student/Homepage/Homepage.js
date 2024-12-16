import axios from "axios";
import { baseURL } from "../../URL";

export const GetInstructors = async (maincategory) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/home/instructor?maincategory=${maincategory||""}`,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const GetInstructorDetails = async (id) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/home/view/profile/${id}`,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const InstructorLike = async (instructorId, studentId) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/student/add/favorite/instructor/${instructorId}/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const GetLikesChek = async (studentId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/favorite/instructor/${studentId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const GetReviews = async (instructorId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/student/instructor/all/reviews/${instructorId}`,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Create_discipline = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/home/create/discipline`,
      data:body
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
