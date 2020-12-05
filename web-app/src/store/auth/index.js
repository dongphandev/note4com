import { types } from './actions';

const initialState = {
  authenticated: false,
  token: '',
  owner: '',
  model: { }
};

export default {
  initialState: initialState,
  handlers: {
    [types.AUTHENTICATED]: handleSetAuth,
    [types.UN_AUTHENTICATED]: handleClearAuth,
  }
};

function handleSetAuth(state, {type, payload}) {
  return {
    authenticated: true,
    ...payload
  };
}

function handleClearAuth(state, {type, payload}) {
  return {
    ...initialState
  };
}
