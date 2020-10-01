
export const types = {
  AUTHENTICATED: 'AUTH/AUTHENTICATED',
};
export default types;

export function authenticated({token, model}) {
  return {
      type: types.AUTHENTICATED,
      payload: {
        token,
        model
      }
  };
}