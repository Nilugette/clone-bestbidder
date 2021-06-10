import axios from "axios";

const API_URL = "https://dnayywv457.execute-api.eu-west-3.amazonaws.com/development/";

const register = (email, nickname, password, phone) => {
  return axios.post(API_URL + "register", {
    email,
    nickname,
    password,
    phone,
    optin_email: true,
    optin_sms: true
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
