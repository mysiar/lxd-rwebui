import { combineReducers } from 'redux';
import {
  CONTAINER_ITEM_ERROR, CONTAINER_ITEM_LOADING, CONTAINER_ITEM_SUCCESS, CONTAINER_ITEM_RESET,
} from '../../constants/App';

export function error(state = null, action) {
  switch (action.type) {
    case CONTAINER_ITEM_ERROR:
      return action.msg;

    case CONTAINER_ITEM_RESET:
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case CONTAINER_ITEM_LOADING:
      return action.msg;

    case CONTAINER_ITEM_RESET:
      return false;

    default:
      return state;
  }
}

export function data(state = {}, action) {
  switch (action.type) {
    case CONTAINER_ITEM_SUCCESS:
      return action.container;

    case CONTAINER_ITEM_RESET:
      return {};

    default:
      return state;
  }
}

export default combineReducers({ error, loading, data });
