import HttpClient from './HttpClient';
import { Auth } from './EndPoints';

function submit({username, password}) {
  return HttpClient.post(Auth.login(), {username, password})
}
