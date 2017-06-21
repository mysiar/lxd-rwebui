import {combineReducers} from 'redux';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({

    form: formReducer,
    blank: function(state, action) {if (state == null) state = []; return state;}
});

export default rootReducer;