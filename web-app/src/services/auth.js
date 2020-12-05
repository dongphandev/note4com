import { AuthApi } from '../apis';


async function signIn(username, password) {
  return AuthApi.signIn(username, password);
}


export default {
  signIn,
}