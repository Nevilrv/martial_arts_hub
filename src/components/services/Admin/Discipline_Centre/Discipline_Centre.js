import axios from "axios";
import { baseURL } from "../../URL";

export const Discipline_List = async (userType, duration) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/getDiscipline?userType=${userType || ""}&duration=${
        duration || ""
      }`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Add_Main_Categories = async (formData) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/admin/add/maincategory`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Edit_Main_Categories = async (formData) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/admin/update/maincategory`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Delete_Main_Categories = async (maincategoryId) => {
  try {
    let response = await axios({
      method: "DELETE",
      url: `${baseURL}/admin/remove/maincategory/${maincategoryId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Category_List = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/home/maincategory`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Category_Sub_List = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/home/category`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const Sub_Category_List_For_Instructor = async (maincategory) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/home/category/${maincategory}`,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};


export const Sub_Category_List = async (maincategoryId) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${baseURL}/admin/get/category?maincategoryId=${maincategoryId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Add_Sub_Categories = async (formData) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/admin/add/category`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const Edit_Sub_Categories = async (formData) => {
  try {
    let response = await axios({
      method: "PUT",
      url: `${baseURL}/admin/update/category`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};


export const Delete_Sub_Categories = async (categoryId) => {
  try {
    let response = await axios({
      method: "DELETE",
      url: `${baseURL}/admin/remove/category/${categoryId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};
