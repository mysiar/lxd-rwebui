import lxd from 'node-lxd';
import { getLxdServer } from '../utils/localStorage';

export function error(msg) {
  return { type: 'CONTAINERS_ITEM_ERROR', msg };
}

export function loading(msg) {
  return { type: 'CONTAINER_ITEM_LOADING', msg };
}

export function success(container) {
  return { type: 'CONTAINER_ITEM_SUCCESS', container };
}

export function item(name) {
  const client = lxd(getLxdServer());
  return (dispatch) => {
    dispatch(loading(true));

    client.container(name, (err, container) => {
      if (err != null) {
        dispatch(loading(false));
        dispatch(error(err));
      } else {
        dispatch(loading(false));
        dispatch(success(container));
      }
    });
  };
}

export function reset() {
  return { type: 'CONTAINER_ITEM_RESET' };
}

export function start(container) {
  return (dispatch) => {
    dispatch(loading(true));
    container.start((err) => {
      if (err != null) {
        dispatch(loading(false));
        dispatch(error(err));
      } else {
        dispatch(loading(false));
        dispatch(item(container.name()));
      }
    });
  };
}

export function stop(container) {
  return (dispatch) => {
    dispatch(loading(true));
    container.stop((err) => {
      if (err != null) {
        dispatch(loading(false));
        dispatch(error(err));
      } else {
        dispatch(loading(false));
        dispatch(item(container.name()));
      }
    });
  };
}

export function restart(container) {
  return (dispatch) => {
    dispatch(loading(true));
    container.restart((err) => {
      if (err != null) {
        dispatch(loading(false));
        dispatch(error(err));
      } else {
        dispatch(loading(false));
        dispatch(item(container.name()));
      }
    });
  };
}

export function refresh(container) {
  return (dispatch) => {
    dispatch(loading(true));
    container.refresh((err, refreshedContainer) => {
      if (err != null) {
        dispatch(loading(false));
        dispatch(error(err));
      } else {
        dispatch(loading(false));
        dispatch(success(refreshedContainer));
      }
    });
  };
}
