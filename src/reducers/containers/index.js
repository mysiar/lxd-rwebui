import { combineReducers } from 'redux';

import list from './list';
import item from './item';

export default combineReducers({ list, item });
