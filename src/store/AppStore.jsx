import { createStore, compose } from 'redux';

import middleware from '../middleware';
import reducers from '../reducers';
import { setLxdServer } from '../utils/localStorage';

import initialState from './initialState';

let combinedMiddleware = null;

if (process.env.NODE_ENV === 'development') {
  combinedMiddleware = compose(
    middleware,
    /**
     * Conditionally add the Redux DevTools extension enhancer
     * if it is installed.
     */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
} else {
  combinedMiddleware = compose(middleware);
}

const AppStore = createStore(
  reducers,
  initialState,
  combinedMiddleware,
);

AppStore.subscribe(() => { setLxdServer(AppStore.getState().lxdServer); });

export default AppStore;
