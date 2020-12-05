import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import ui from './ui';
import auth from './auth';

const reducers = combineReducers({
  ui: createReducer(ui),
  auth: createReducer(auth),
});


export default createStore(reducers, 
  composeWithDevTools(
    applyMiddleware(reduxThunk)
  )
);


export function createReducer({initialState, handlers}) {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  };
}
