import HttpClient from './HttpClient';



export const AuthApi = {
  signIn: (username, password) => HttpClient.post(`/api/login`, {username, password})
};

export const NoteApi = {
  get: (username) => HttpClient.get(`/api/notes/${username}`),
  search: (username, keyword, category) => HttpClient.post(`/api/notes/search`, {username, keyword, category}),
  edit: () => HttpClient.post(`/api/notes`)
}