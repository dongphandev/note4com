import _ from 'lodash';

const getState = (state) => _.get(state, 'auth', {});
const getAuthenticated = (state) => _.get(getState(state), 'authenticated', false);
const getOwner = (state) => getState(state).owner; 


export default {
  state: getState,
  isAuthenticated: getAuthenticated,
  owner: getOwner,
}