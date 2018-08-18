import fetch from '../../utils/axiosFetch';
import {
  CONTAINER_ITEM_ERROR, CONTAINER_ITEM_LOADING, CONTAINER_ITEM_SUCCESS, CONTAINER_ITEM_RESET,
} from '../../constants/App';

export function error(msg) {
  return { type: CONTAINER_ITEM_ERROR, msg };
}

export function loading(msg) {
  return { type: CONTAINER_ITEM_LOADING, msg };
}

export function success(container) {
  return { type: CONTAINER_ITEM_SUCCESS, container };
}

export function item(container) {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(success(container));
    dispatch(loading(false));
  };
}

export function reset() {
  return { type: CONTAINER_ITEM_RESET };
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
