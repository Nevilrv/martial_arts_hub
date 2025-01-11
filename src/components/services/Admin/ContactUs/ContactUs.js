import axios from "axios";
import { baseURL } from "../../URL";

export const Contact_Us = async (body) => {
    try {
        let response = await axios({
            method: "POST",
            url: `${baseURL}/home/contact`,
            data: body
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const Subscribe = async (body) => {
    try {
        let response = await axios({
            method: "POST",
            url: `${baseURL}/home/subscribe`,
            data: body
        });
        return response.data;
    } catch (error) {
        return error?.response?.data;
    }
};