import { combineReducers } from 'redux';
import app from './app';
import auth from '../../modules/Auth/reducers'

export default combineReducers({
    app,
    auth
});

