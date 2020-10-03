// https://github.com/axios/axios
import axios from 'axios';

export const ApiError = {
  request: "request",
  response: "response",
  unknown: "unknown"
}

// basic configs
// axios.defaults.baseURL = 'http://localhost:7070';
axios.defaults.timeout = 60000; // 60 seconds

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.headers['X-AUTH-TOKEN'] = getLocalData('AUTH-TOKEN');
  config.headers['Content-Type'] = 'application/json';
  return config;
}, function (error) {
  // Do something with request error
  return handleError(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  console.log(response);
  // Do something with response data
  // if (response.data.error) {
  //   const error = response.data.error;
  //   return Promise.reject({ code: error.code, message: error.message });
  // }
  return response.data;
}, function (error) {
  // Do something with response error
  return handleError(error);
});

function handleError(error) {
  console.log(error);
  return Promise.reject({ code: ApiError.unknown, message: error.message, error });
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