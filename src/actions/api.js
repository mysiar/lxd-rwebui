import { API_LOADING, API_INFO } from '../constants/App';
import fetch from '../utils/axiosFetch';

export function loading(msg) {
  return { type: API_LOADING, msg };
}

export function info(data) {
  return { type: API_INFO, data };
}

export function load() {
  return (dispatch) => {
    dispatch(loading(true));

    fetch('/1.0').then((response) => {
      dispatch(info(response.data.metadata));
    }).catch(() => {
      dispatch(loading(false));
      // dispatch(error(err.toString()));
    }).then(() => {
      dispatch(loading(false));
    });
  };
}
