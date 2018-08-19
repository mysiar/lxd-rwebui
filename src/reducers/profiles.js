import { combineReducers } from 'redux';

import {
  PROFILES_ERROR,
  PROFILES_LOADING,
  PROFILES_ITEM_RESET,
  PROFILES_LIST_ADD,
  PROFILES_LIST_RESET,
  PROFILES_ITEM_SUCCESS,
} from '../constants/App'

export function error(state = null, action) {
  switch (action.type) {
    case PROFILES_ERROR:
      return action.msg;

    case PROFILES_ITEM_RESET:
      return null;

    case PROFILES_LIST_RESET:
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case PROFILES_LOADING:
      return action.msg;

    case PROFILES_ITEM_RESET:
      return false;

    case PROFILES_LIST_RESET:
      return null;

    default:
      return state;
  }
}

export function list(state = [], action) {
  switch (action.type) {

    case PROFILES_LIST_RESET:
      return [];

    case PROFILES_LIST_ADD:
      return [...state, action.profile];

    default:
      return state;
  }
}

export function item(state = {}, action) {
  switch (action.type) {
    case PROFILES_ITEM_SUCCESS:
      return action.profile;

    case PROFILES_ITEM_RESET:
      return {};

    default:
      return state;
  }
}

export default combineReducers({ error, loading, list, item });

