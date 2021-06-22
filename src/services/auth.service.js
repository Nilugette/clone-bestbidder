import axios from "axios";
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
          
      if(response.data.jwt){
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data.jwt));
        localStorage.setItem("refresh_token", JSON.stringify(response.data.ref));
      }
 
      return response.data;
    });
};

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  })
  
  failedQueue = [];
}

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
      
      if (isRefreshing) {
        return new Promise(function(resolve, reject) {
          failedQueue.push({resolve, reject})
        }).then(() => {
          originalRequest.headers['Authorization'] = JSON.parse(localStorage.getItem('token'));
          return axios(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        })
      }

    originalRequest._retry = true;
    isRefreshing = true;

    const refreshToken = JSON.parse(localStorage.getItem('refresh_token'))
    return new Promise(function (resolve, reject) {
       axios.post(API_URL + "refresh", { token : refreshToken })
        .then(({data}) => {
            localStorage.setItem("token", JSON.stringify(data.jwt));
            processQueue(null, data.jwt);
            resolve(axios(originalRequest));
        })
        .catch((err) => {
            processQueue(err, null);
            reject(err);
        })
        .finally(() => { isRefreshing = false })
    })
  }

  return Promise.reject(error);
});


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
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout

};
