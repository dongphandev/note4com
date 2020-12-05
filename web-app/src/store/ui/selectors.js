import _ from 'lodash';

const getState = (state) => _.get(state, 'ui', {});
const getProcesses = (state) => _.get(getState(state), 'processes', []);

export default {
  state: getState,
  processes: getProcesses,
}