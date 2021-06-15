import axios from "axios";
import jwt_decode from "jwt-decode";
import API_URL from "../api/constant";

const register = (email, nickname, password, phone) => {

  return axios.post(API_URL + "register", {
    email,
    nickname,
    password,
    phone: formatPhone(phone),
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

        const decodeToken = jwt_decode(response.data.jwt)

        if(isExpired(decodeToken.exp)) {
          refreshToken(response.data.ref)
        }
      }

      return response.data;
    });
};

const refreshToken = (refresh) => {
  return axios
    .post(API_URL + "refresh", {
      token: refresh
    })
    .then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const isExpired = (timestamp) => {
  const isExpiredToken = new Date(timestamp*1000)
  return isExpiredToken.setMinutes( isExpiredToken.getMinutes() + 30 );
}

const formatPhone = (phone) => {
  let cleaned = ('' + phone).replace(/\D/g, '');
  let matchPhone = cleaned.match(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/);
  
  if (matchPhone) {
    let replaceZero = matchPhone.toString().replace(/^0+/g, '')
    let intlCode = (matchPhone[1] ? '0' : '+33');
    return [intlCode, replaceZero].join('');
  }
  return null;
}

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
  refreshToken
};
