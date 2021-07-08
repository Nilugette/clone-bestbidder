import axios from "axios";
import { API_URL } from "../api/constant";
import authHeader from "./auth-header";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};
  

const getUserAccount = () => {
  return axios.get(API_URL + "account", { headers: authHeader() });
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUserAccount,
    getPublicContent
};