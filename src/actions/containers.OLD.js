import lxd from 'node-lxd';
import { getLxdServer } from '../utils/localStorage';

export function error(msg) {
  return { type: 'CONTAINERS_LIST_ERROR', msg };
}

export function loading(msg) {
  return { type: 'CONTAINERS_LIST_LOADING', msg };
}

export function success(containers) {
  return { type: 'CONTAINERS_LIST_SUCCESS', containers };
}

export function list() {
  const client = lxd(getLxdServer());
  return (dispatch) => {
    dispatch(loading(true));

    client.containers((err, containers) => {
      if (err != null) {
        dispatch(loading(false));
        dispatch(error(err));
      } else {
        dispatch(loading(false));
        dispatch(success(containers));
      }
    });
  };
}

export function reset() {
  return { type: 'CONTAINERS_LIST_RESET' };
}
