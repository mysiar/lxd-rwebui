import fetch from '../utils/axiosFetch';
import { add } from './containers';

export function error(msg) {
  return { type: 'CONTAINERS_ITEM_ERROR', msg };
}

export function loading(msg) {
  return { type: 'CONTAINER_ITEM_LOADING', msg };
}

export function success(container) {
  return { type: 'CONTAINER_ITEM_SUCCESS', container };
}

export function item(container) {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(success(container));
    dispatch(loading(false));
  };
}

export function reset() {
  return { type: 'CONTAINER_ITEM_RESET' };
}

export function start(containerName) {
  state(containerName,
    {
      method: 'PUT',
      data: {
        action: 'start',
      },
    },
    );
  return (dispatch) => {
    dispatch(loading(true));

    fetch(`/1.0/containers/${containerName}/state`,
      {
        method: 'PUT',
        data: {
          action: 'start',
        },
      })
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

// function state(containerName)

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
