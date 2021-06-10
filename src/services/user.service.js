import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dnayywv457.execute-api.eu-west-3.amazonaws.com/development/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};
  

const getUserAccount = () => {
  return axios.get(API_URL + "account", { headers: authHeader() });
};


export default {
    getUserAccount,
    getPublicContent
};