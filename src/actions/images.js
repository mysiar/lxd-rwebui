import fetch from '../utils/axiosFetch';

import {
  IMAGES_ITEM_SUCCESS,
  IMAGES_ERROR, IMAGES_LIST_ADD, IMAGES_LIST_RESET, IMAGES_LOADING,
} from '../constants/App';


// common actions
export function error(msg) {
  return { type: IMAGES_ERROR, msg };
}

export function loading(msg) {
  return { type: IMAGES_LOADING, msg };
}

// list actions
export function resetList() {
  return { type: IMAGES_LIST_RESET };
}

export function add(image) {
  return { type: IMAGES_LIST_ADD, image };
}

export function list() {
  return (dispatch) => {
    dispatch(loading(true));

    fetch('/1.0/images').then((response) => {
      response.data.metadata.map(val => fetch(val).then(rsp => dispatch(add(rsp.data.metadata))));
    }).catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.toString()));
    }).then(() => {
      dispatch(loading(false));
    });
  };
}

// item actions

export function success(image) {
  return { type: IMAGES_ITEM_SUCCESS, image };
}

export function item(image) {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(success(image));
    dispatch(loading(false));
  };
}
