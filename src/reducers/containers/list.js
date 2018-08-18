import { combineReducers } from 'redux';
import {
  CONTAINERS_LIST_ERROR, CONTAINERS_LIST_LOADING, CONTAINERS_LIST_SUCCESS,
  CONTAINERS_LIST_ADD, CONTAINERS_LIST_RESET,
} from '../../constants/App';

export function error(state = null, action) {
  switch (action.type) {
    case CONTAINERS_LIST_ERROR:
      return action.msg;

    case CONTAINERS_LIST_RESET:
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case CONTAINERS_LIST_LOADING:
      return action.msg;

    case CONTAINERS_LIST_RESET:
      return false;

    default:
      return state;
  }
}

export function data(state = [], action) {
  switch (action.type) {
    case CONTAINERS_LIST_SUCCESS:
      return action.containers;

    case CONTAINERS_LIST_RESET:
      return [];

    case CONTAINERS_LIST_ADD:
      return [...state, action.container];

    default:
      return state;
  }
}

export default combineReducers({ error, loading, data });
