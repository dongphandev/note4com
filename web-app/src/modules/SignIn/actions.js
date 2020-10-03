import HttpClient from '../../apis/HttpClient';
import { Auth as AuthUrl } from '../../apis/EndPoints';
import Accions from '../../app/actions';

export const types = {
  SUBMIT: 'SIGNIN/SUBMIT',
  CANCEL: 'SIGNIN/CANCEL',
};
export default types;

export function submit(username, password) {
  return (dispatch, getState) => {
    // show loadding
    dispatch(Accions.UI.showLoading(types.SUBMIT));

    // submit
    HttpClient.post(AuthUrl.login(), {username, password})
    .then(resp => {
      dispatch(Accions.Auth.authenticated({
        token: "draft-token",
        owner: username
      }));
      dispatch(Accions.UI.hideLoading(types.SUBMIT));
    }).catch(err => {
      console.log(err);
      dispatch(Accions.UI.showNotification(err.message));
      dispatch(Accions.UI.hideLoading(types.SUBMIT));
    });
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