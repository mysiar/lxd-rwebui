import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {
  COLOR_CONTAINER_STATUS_STOPPED,
  COLOR_CONTAINER_STATUS_RUNNING,
  COLOR_CONTAINER_STATUS_DEFAULT,
} from '../constants/Colors';

import LXD_STATUS_CODES from '../constants/LxdStatusCodes';

const containerButtonStyle = {
  margin: 3,
  height: 20,
  textTransform: 'none',
};

const containerButtonLabelStyle = { textTransform: 'none' };

export function containerStatus(code) {
  return LXD_STATUS_CODES[code];
}

export function containerNameButton(container, callback = () => {}) {
  return (
    <Link to={`/containers/${container.name}`} >
      <RaisedButton
        label={container.name}
        primary
        style={containerButtonStyle}
        labelStyle={containerButtonLabelStyle}
        onClick={callback}
      />
    </Link>
  );
}

function containerStatusButtonColor(code) {
  let color;
  switch (code) {
    case 103:
      color = COLOR_CONTAINER_STATUS_RUNNING;
      break;
    case 102:
      color = COLOR_CONTAINER_STATUS_STOPPED;
      break;
    default:
      color = COLOR_CONTAINER_STATUS_DEFAULT;
      break;
  }
  return color;
}

export function containerStatusButton(code) {
  return (
    <RaisedButton
      label={containerStatus(code)}
      backgroundColor={containerStatusButtonColor(code)}
      style={containerButtonStyle}
      labelStyle={containerButtonLabelStyle}
    />
  );
}
