import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

/* eslint-disable */
import containers from './containers/';

import { getLxdServer } from '../utils/localStorage';

const lxdServer = getLxdServer();

export default combineReducers(
  {
    lxdServer,
    routing,
    form,
    containers,
  });
