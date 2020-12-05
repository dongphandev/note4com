import local from './local';



// TODO read from external config
const profile = local;





export default {
  baseURL: 'http://localhost:8080',
  requestTimeOut: 1000,
  getJwtToken: () => {
    return Promise.resolve('');
  },
  ...profile
};
