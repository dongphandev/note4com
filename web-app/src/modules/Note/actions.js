import HttpClient from '../../apis/HttpClient';
import { Note as NoteApi } from '../../apis/EndPoints';
import Accions from '../../app/actions';

export const types = {
  LOAD: 'NOTE/LOAD',
  SEARCH: 'NOTE/SEARCH',
  CREATE: 'NOTE/CREATE',
  UPDATE: 'NOTE/UPDATE'
};
export default types;

export function search({username, keyword, category}) {
  let actionName = types.SEARCH;

  return (dispatch, getState) => {
      // show loadding
      dispatch(Accions.UI.showLoading(actionName));

      // submit
      HttpClient.post(NoteApi.search(), {username, keyword, category})
      .then(resp => {

        console.log(resp)
        dispatch({
          type: actionName,
          payload: resp
        })

        dispatch(Accions.UI.hideLoading(actionName));
      }).catch(err => {
        console.log(err);
        dispatch(Accions.UI.showNotification(err.message));
        dispatch(Accions.UI.hideLoading(actionName));
      });
    };
}

export function load({username}) {
  let actionName = types.LOAD;

  return (dispatch, getState) => {
      // show loadding
      dispatch(Accions.UI.showLoading(actionName));

      // submit
      HttpClient.get(NoteApi.get(username))
      .then(resp => {

        console.log(resp)
        dispatch({
          type: actionName,
          payload: resp
        })

        dispatch(Accions.UI.hideLoading(actionName));
      }).catch(err => {
        console.log(err);
        dispatch(Accions.UI.showNotification(err.message));
        dispatch(Accions.UI.hideLoading(actionName));
      });
    };
}


export function create(model) {
  let actionName = types.CREATE;

  return (dispatch, getState) => {
      // show loadding
      dispatch(Accions.UI.showLoading(actionName));

      // submit
      HttpClient.post(NoteApi.edit(), model)
      .then(resp => {

        console.log(resp)
        dispatch({
          type: actionName,
          payload: resp
        })

        dispatch(Accions.UI.hideLoading(actionName));
      }).catch(err => {
        console.log(err);
        dispatch(Accions.UI.showNotification(err.message));
        dispatch(Accions.UI.hideLoading(actionName));
      });
    };
}

export function update(model) {
  let actionName = types.UPDATE;

  return (dispatch, getState) => {
      // show loadding
      dispatch(Accions.UI.showLoading(actionName));

      // submit
      HttpClient.put(NoteApi.edit(), model)
      .then(resp => {

        console.log(resp)
        dispatch({
          type: actionName,
          payload: model
        })

        dispatch(Accions.UI.hideLoading(actionName));
      }).catch(err => {
        console.log(err);
        dispatch(Accions.UI.showNotification(err.message));
        dispatch(Accions.UI.hideLoading(actionName));
      });
    };
}