
export const types = {
  SUBMIT: 'SIGNIN/SUBMIT',
  CANCEL: 'SIGNIN/CANCEL',
};
export default types;

export function submit({username, password}) {
  return {
      type: types.SUBMIT,
      payload: {
        model: {
         username,
         password 
        }
      }
  };
}

export function cancel() {
  return {
      type: types.SUBMIT,
      payload: {
        model: {

        }
      }
  };
}