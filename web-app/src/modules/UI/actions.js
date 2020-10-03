import history from '../../app/history';

export const types = {
  SHOW_LOADING: 'UI/SHOW_LOADING',
  HIDE_LOADING: 'UI/HIDE_LOADING',
  SHOW_NOTIFICATION: 'UI/SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'UI/HIDE_NOTIFICATION',
};
export default types;

export function navigate({to}) {
  history.push(to);
}

export function hideNotification() {
  return {
      type: types.HIDE_NOTIFICATION,
      payload: {

      }
  };
}

export function showNotification(message) {
  return {
      type: types.SHOW_NOTIFICATION,
      payload: {
          message
      }
  };
}

export function showLoading(target) {
  return {
      type: types.SHOW_LOADING,
      payload: {
          target
      }
  };
}

export function hideLoading(target) {
  return {
      type: types.HIDE_LOADING,
      payload: {
          target
      }
  };
}