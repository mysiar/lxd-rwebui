import { combineReducers } from 'redux';

import {
  IMAGES_ERROR,
  IMAGES_LOADING,
  IMAGES_ITEM_RESET,
  IMAGES_LIST_ADD,
  IMAGES_LIST_RESET,
  IMAGES_ITEM_SUCCESS,
} from '../constants/App';

export function error(state = null, action) {
  switch (action.type) {
    case IMAGES_ERROR:
      return action.msg;

    case IMAGES_ITEM_RESET:
      return null;

    case IMAGES_LIST_RESET:
      return null;

    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case IMAGES_LOADING:
      return action.msg;

    case IMAGES_ITEM_RESET:
      return false;

    case IMAGES_LIST_RESET:
      return null;

    default:
      return state;
  }
}

export function list(state = [], action) {
  switch (action.type) {
    case IMAGES_LIST_RESET:
      return [];

    case IMAGES_LIST_ADD:
      return [...state, action.image];

    default:
      return state;
  }
}

export function item(state = {}, action) {
  switch (action.type) {
    case IMAGES_ITEM_SUCCESS:
      return action.image;

    case IMAGES_ITEM_RESET:
      return {};

    default:
      return state;
  }
}

export default combineReducers({
  error, loading, list, item,
});
