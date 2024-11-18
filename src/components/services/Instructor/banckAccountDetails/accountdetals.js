import axios from "axios";
import { baseURL } from "../../URL";

export const AccountRegister = async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/instructor/register/stripe/account`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const AccountCreate = async (accountId,instructorId) => {
    try {
      let response = await axios({
        method: "POST",
        url: `${baseURL}/instructor/create/stripe/account/${accountId}/${instructorId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };


  export const Account_create = async (accountid,instructorid) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${baseURL}/instructor/success/stripe/account/${accountid}/${instructorid}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
};

export const Account_cancle = async (accountid) => {
    try {
      let response = await axios({
        method: "DELETE",
        url: `${baseURL}/instructor/cancle/stripe/account/${accountid}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return error?.response?.data;
    }
  };