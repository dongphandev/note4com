import { combineReducers } from 'redux';

import auth from '../modules/Auth/reducers'
import ui from '../modules/UI/reducers'

export default combineReducers({
    ui,
    auth
});

