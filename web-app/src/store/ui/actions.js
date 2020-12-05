export const types = {
  MESSAGE: 'UI/MESSAGE',
  ADD_PROCESS: 'UI/ADD_PROCESS',
  REMOVE_PROCESS: 'UI/REMOVE_PROCESS'
}

const setMessage = (msg) => ({
  type: types.MESSAGE,
  payload: msg
});

const startProcess = (name, message) => ({
  type: types.ADD_PROCESS,
  payload: {
    name,
    message
  }
});

const endProcess = (name) => ({
  type: types.REMOVE_PROCESS,
  payload: {
    name
  }
});

export default {
  setMessage,
  startProcess,
  endProcess
}