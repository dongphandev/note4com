
export const types = {
  AUTHENTICATED: 'AUTH/AUTHENTICATED',
  UN_AUTHENTICATED: 'AUTH/UN_AUTHENTICATED',
  
};

const setAuth = (token, owner, model) => ({
  type: types.AUTHENTICATED,
  payload: {
    token,
    owner,
    model
  }
});

const clearAuth = () => ({
  type: types.UN_AUTHENTICATED,
  payload: { }
});

export default {
  setAuth,
  clearAuth
}