// https://github.com/axios/axios
import axios from 'axios';
// import { getLocalData } from './ui';
import { ERROR_CODES } from '../constants/APIs';

// basic configs
// axios.defaults.baseURL = 'http://localhost:7070';
axios.defaults.timeout = 60000; // 60 seconds

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.headers['X-AUTH-TOKEN'] = getLocalData('AUTH-TOKEN');
  config.headers['Content-Type'] = 'application/json';
  config.headers['X-Tenant'] = 'dev';
  return config;
}, function (error) {
  // Do something with request error
  return handleError(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.data.error) {
    const error = response.data.error;
    return Promise.reject({ code: error.code, message: error.message });
  }
  return response.data.success;
}, function (error) {
  // Do something with response error
  return handleError(error);
});

// Promise.reject(error);

function handleError(error) {
  console.log(error.config);
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    if (error.response.data && error.response.data.error) {
      return Promise.reject({ code: error.response.data.error.code, message: error.response.data.error.message });
    }

    return Promise.reject({ code: ERROR_CODES.response, message: error.response.data });
  }

  if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);

    return Promise.reject({ code: ERROR_CODES.request, message: error.request });
  }

  // Something happened in setting up the request that triggered an Error
  console.log('Error', error.message);
  return Promise.reject({ code: ERROR_CODES.unknown, message: error.message });
}


export function request(config) {
  return axios.request(config);
}

export function get(url, config) {
  return axios.get(url, config);
}

export function remove(url, config) {
  return axios.delete(url, config)
}

// axios#head(url[, config])

// axios#options(url[, config])

export function post(url, data, config) {
  return axios.post(url, JSON.stringify(data), config);
}

export function put(url, data, config) {
  return axios.put(url, JSON.stringify(data), config);
}

// axios#patch(url[, data[, config]])


export default {
  get,
  remove,
  post,
  put,
}