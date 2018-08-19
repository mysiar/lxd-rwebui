import fetch from '../utils/axiosFetch';

import {
  CONTAINERS_LOADING,
  CONTAINERS_ERROR,
  CONTAINERS_ITEM_RESET,
  CONTAINERS_LIST_RESET,
  CONTAINERS_LIST_ADD,
  CONTAINERS_ITEM_SUCCESS,
} from '../constants/App';

// common actions
export function error(msg) {
  return { type: CONTAINERS_ERROR, msg };
}

export function loading(msg) {
  return { type: CONTAINERS_LOADING, msg };
}

// list actions
export function resetList() {
  return { type: CONTAINERS_LIST_RESET };
}

export function add(container) {
  return { type: CONTAINERS_LIST_ADD, container };
}

export function list() {
  return (dispatch) => {
    dispatch(loading(true));

    fetch('/1.0/containers').then((response) => {
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
export function resetItem() {
  return { type: CONTAINERS_ITEM_RESET };
}

export function success(container) {
  return { type: CONTAINERS_ITEM_SUCCESS, container };
}

export function item(container) {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(success(container));
    dispatch(loading(false));
  };
}

export function refresh(containerName) {
  return (dispatch) => {
    dispatch(loading(true));
    fetch(`/1.0/containers/${containerName}`)
    .then((response) => {
      dispatch(success(response.data.metadata));
    }).catch((err) => {
      dispatch(loading(false));
      dispatch(error(err.toString()));
    }).then(() => {
      dispatch(loading(false));
    });
  };
}

function state(containerName, options) {
  return (dispatch) => {
    dispatch(loading(true));

    fetch(`/1.0/containers/${containerName}/state`, options)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(error(err));
    }).then(() => {
      dispatch(loading(false));
    });
  };
}

export function start(containerName) {
  return state(containerName,
    {
      method: 'PUT',
      data: {
        action: 'start',
      },
    },
  );
}

export function stop(containerName) {
  return state(containerName,
    {
      method: 'PUT',
      data: {
        action: 'stop',
      },
    },
  );
}

export function restart(containerName) {
  return state(containerName,
    {
      method: 'PUT',
      data: {
        action: 'restart',
      },
    },
  );
}
