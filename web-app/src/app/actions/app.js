
export const types = {
  SHOW_LOADING: 'APP/SHOW_LOADING',
  HIDE_LOADING: 'APP/HIDE_LOADING',
  SHOW_NOTIFICATION: 'APP/SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'APP/HIDE_NOTIFICATION',
};
export default types;

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
