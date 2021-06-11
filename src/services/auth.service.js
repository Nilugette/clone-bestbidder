import axios from "axios";

const API_URL = "https://dnayywv457.execute-api.eu-west-3.amazonaws.com/development/";

const register = (email, nickname, password, phone) => {

  let cleaned = ('' + phone).replace(/\D/g, '')
  let matchPhone = cleaned.match(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/);
  let replaceZero = matchPhone.toString().replace(/^0+/g, '')
  let intlCode = (matchPhone[1] ? '0' : '+33');
  let formatPhone = [intlCode, replaceZero].join('');
  return axios.post(API_URL + "register", {
    email,
    nickname,
    password,
    phone: formatPhone,
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
      if (response.data.jwt) {
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
