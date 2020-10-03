import { combineReducers } from 'redux';

import auth from '../modules/Auth/reducers';
import ui from '../modules/UI/reducers';
import note from '../modules/Note/reducers';

export default combineReducers({
    note,
    ui,
    auth
});

