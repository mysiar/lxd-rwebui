import fetch from '../utils/axiosFetch';

import {
  PROFILES_ERROR,
  PROFILES_ITEM_SUCCESS,
  PROFILES_LIST_ADD,
  PROFILES_LIST_RESET,
  PROFILES_LOADING,
} from '../constants/App';


// common actions
export function error(msg) {
  return { type: PROFILES_ERROR, msg };
}

export function loading(msg) {
  return { type: PROFILES_LOADING, msg };
}

// list actions
export function resetList() {
  return { type: PROFILES_LIST_RESET };
}

export function add(profile) {
  return { type: PROFILES_LIST_ADD, profile };
}

export function list() {
  return (dispatch) => {
    dispatch(loading(true));

    fetch('/1.0/profiles').then((response) => {
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

export function success(profile) {
  return { type: PROFILES_ITEM_SUCCESS, profile };
}


export function item(profile) {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(success(profile));
    dispatch(loading(false));
  };
}
