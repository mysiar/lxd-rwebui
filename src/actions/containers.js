// import lxd from 'node-lxd';
// import { getLxdServer } from '../utils/localStorage';
import fetch from '../utils/axiosFetch';

export function error(msg) {
  return { type: 'CONTAINERS_LIST_ERROR', msg };
}

export function loading(msg) {
  return { type: 'CONTAINERS_LIST_LOADING', msg };
}

export function success(containers) {
  return { type: 'CONTAINERS_LIST_SUCCESS', containers };
}

export function add(container) {
  return { type: 'CONTAINERS_LIST_ADD', container };
}

export function list() {
  return (dispatch) => {
    dispatch(loading(true));

    fetch('/1.0/containers').then((response) => {
      response.data.metadata.map(val => fetch(val).then(cr => dispatch(add(cr.data.metadata))));
    }).catch((err) => {
      dispatch(loading(false));
      dispatch(error(err));
    }).then(() => {
      dispatch(loading(false));
    });
  };
}

export function reset() {
  return { type: 'CONTAINERS_LIST_RESET' };
}
