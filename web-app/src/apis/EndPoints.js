
export const Auth = {
  login: () => `/api/login`
};

export const Note = {
  get: (username) => `/api/notes/${username}`,
  search: () => `/api/notes/search`,
  edit: () => `/api/notes`
}