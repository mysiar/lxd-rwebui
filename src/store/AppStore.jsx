import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import containers from '../reducers/containers';
import container from '../reducers/container';

const initialState = {};
let AppStore = {};

if (process.env.NODE_ENV === 'development') {
  AppStore = createStore(
    combineReducers(
      {
        routing,
        form,
        containers,
        container,
      }),
    initialState,
    compose(
      applyMiddleware(thunk),
      /**
       * Conditionally add the Redux DevTools extension enhancer
       * if it is installed.
       */
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
} else {
  AppStore = createStore(
    combineReducers({
      routing,
      form,
      containers,
      container,
    }),
    applyMiddleware(thunk),
    initialState,
  );
}
export default AppStore;
