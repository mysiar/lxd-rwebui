import { combineReducers } from 'redux';
import {
  CONTAINERS_ERROR,
  CONTAINERS_LOADING,
  CONTAINERS_LIST_RESET,
  CONTAINERS_LIST_ADD,
  CONTAINERS_ITEM_RESET,
  CONTAINERS_ITEM_SUCCESS,
} from '../constants/App';

export function error(state = null, action) {
  switch (action.type) {
    case CONTAINERS_ERROR:
      return action.msg;

    case CONTAINERS_ITEM_RESET:
      return null;

    case CONTAINERS_LIST_RESET:
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case CONTAINERS_LOADING:
      return action.msg;

    case CONTAINERS_ITEM_RESET:
      return false;

    case CONTAINERS_LIST_RESET:
      return null;

    default:
      return state;
  }
}

export function item(state = {}, action) {
  switch (action.type) {
    case CONTAINERS_ITEM_SUCCESS:
      return action.container;

    case CONTAINERS_ITEM_RESET:
      return {};

    default:
      return state;
  }
}

export function list(state = [], action) {
  switch (action.type) {
    case CONTAINERS_LIST_RESET:
      return [];

    case CONTAINERS_LIST_ADD:
      return [...state, action.container];

    default:
      return state;
  }
}

export default combineReducers({
  error, loading, item, list,
});
