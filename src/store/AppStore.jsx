import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import containers from '../reducers/containers';
import container from '../reducers/container';
import { getLxdServer, setLxdServer } from '../utils/localStorage';

const lxdServer = getLxdServer();
const initialState = {};
let AppStore = {};

const reducers = combineReducers(
  {
    lxdServer,
    routing,
    form,
    containers,
    container,
  });

if (process.env.NODE_ENV === 'development') {
  AppStore = createStore(
    reducers,
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
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
    ),
  );
}

AppStore.subscribe(() => {
  setLxdServer(AppStore.getState().lxdServer);
});

export default AppStore;
