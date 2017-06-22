import { createStore, combineReducers, compose } from 'redux';

import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';


import reducers from '../reducers/Reducers';

let AppStore = null;
let initialState = {};

if (process.env.NODE_ENV === "development") {

    AppStore = createStore(
        combineReducers({routing, form, reducers}),
        initialState,
        compose(
            /**
             * Conditionally add the Redux DevTools extension enhancer
             * if it is installed.
             */
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
} else {
    AppStore = createStore(
        reducers,
        initialState
    );
}
export default AppStore;
