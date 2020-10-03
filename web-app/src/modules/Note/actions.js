
export const types = {
  LOAD: 'NOTE/LOAD',
};
export default types;

export function load({}) {
  return {
      type: types.LOAD,
      payload: {
        
      }
  };
}