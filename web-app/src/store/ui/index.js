import { types } from './actions';

const initialState = {
  message: '',
  notifications: 0,
  processes: []
};

export default {
  initialState: initialState,
  handlers: {
    [types.MESSAGE]: handleSetMessage,
    [types.ADD_PROCESS]: handleAddProcess,
    [types.REMOVE_PROCESS]: handleRemoveProcess
  }
};

function handleSetMessage(state, {type, payload}) {
  return {
    ...state,
    message: payload
  };
}

function handleAddProcess(state, {type, payload}) {
  return {
    ...state,
    processes: [
      ...state.processes,
      {
        ...payload
      }
    ]
  };
}

function handleRemoveProcess(state, {type, payload}) {
  return {
    ...state,
    processes: state.processes.filter(p => p.name != payload.name)
  };
}