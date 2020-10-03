
export const types = {
  AUTHENTICATED: 'AUTH/AUTHENTICATED',
};
export default types;

export function authenticated({token, owner, model}) {
  return {
      type: types.AUTHENTICATED,
      payload: {
        token,
        owner,
        model
      }
  };
}