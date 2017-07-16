import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import containers from '../reducers/containers';
import container from '../reducers/container';
import { getLxdServer, setLxdServer } from '../utils/localStorage';

const lxdServer = getLxdServer();
console.log('AppStore',lxdServer);
const initialState = {};
let AppStore = {};

if (process.env.NODE_ENV === 'development') {
  AppStore = createStore(
    combineReducers(
      {
        lxdServer,
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
      lxdServer,
      routing,
      form,
      containers,
      container,
    }),
    applyMiddleware(thunk),
    initialState,
  );
}

AppStore.subscribe(() => {
  setLxdServer(AppStore.getState().lxdServer);
});

export default AppStore;
