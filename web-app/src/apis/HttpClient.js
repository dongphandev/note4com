// https://github.com/axios/axios
import axios from 'axios';
import Config from '../config';

export const ErrorCodes = {
  request: 'request',
  response: 'response',
  unknown: 'unknown'
};

/////////////////////////////////////////////////////////////////
const instance = axios.create({
  baseURL: Config.baseURL,
  timeout: Config.requestTimeOut,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    lang: 'vi'
  }
});

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response);

    const status = response.status;
    if (status < 200 || status > 299) {
      return Promise.reject(response);
    }

    return response.data;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(`error: ${error}`);
    return Promise.reject(error);
  }
);

async function secureRequest(config={}) {
  return Config.getJwtToken().then(jwt=> {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: jwt
      }
    };
  });
}

export async function request(config) {
  return instance.request(config);
}

export async function get(url, config) {
  return secureRequest(config).then(authConfig => instance.get(url, authConfig));
}

export async function remove(url, config) {
  return secureRequest(config).then(authConfig => instance.delete(url, authConfig));
}

export async function post(url, data, config) {
  return secureRequest(config).then(authConfig => instance.post(url, JSON.stringify(data), authConfig));
}

export async function put(url, data, config) {
  return secureRequest(config).then(authConfig => instance.put(url, JSON.stringify(data), authConfig));
}

export default {
  request,
  get,
  remove,
  post,
  put
};
