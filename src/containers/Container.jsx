import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';
import { isEmpty as _isEmpty } from 'lodash';

import ReactJson from 'react-json-view';

import IconButton from 'material-ui/IconButton';
import IconStop from 'material-ui/svg-icons/av/stop';
import IconStart from 'material-ui/svg-icons/av/play-circle-outline';
import IconRestart from 'material-ui/svg-icons/av/repeat';
import IconDelete from 'material-ui/svg-icons/content/delete-sweep';

import { COLOR_PRIMARY_2 } from '../constants/Colors';
import {
  resetItem, start, stop, restart, refresh,
} from '../actions/containers';
import { containerNameButton, containerStatusButton } from '../utils/helpers';


const iconButtonStyle = {
  width: 40,
  height: 40,
  marginLeft: 5,
  backgroundColor: COLOR_PRIMARY_2,
};

class Container extends Component {
  static propTypes = {
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    restart: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    // error: PropTypes.string,
    container: PropTypes.object.isRequired,
  };

  componentWillUnmount() {
    this.props.reset();
  }


  containerStart = () => {
    if (this.isContainer()) {
      this.props.start(this.props.container.name);
    }
  }

  containerStop = () => {
    if (this.isContainer()) {
      this.props.stop(this.props.container.name);
    }
  }

  containerRestart = () => {
    if (this.isContainer()) {
      this.props.restart(this.props.container.name);
    }
  }

  containerInfoRefresh = () => {
    if (this.isContainer()) {
      this.props.refresh(this.props.container.name);
    }
  }

  containerInfo() {
    if (this.isContainer()) {
      const { container } = this.props;
      return (
        <ReactJson
          src={container}
          name={false}
          theme="monokai"
          indentWidth={2}
          enableClipboard={false}
          enableEdit={false}
          enableAdd={false}
          enableDelete={false}
          displayObjectSize={false}
          displayDataTypes={false}
          colapsed={false}
          collapseStringsAfterLength={false}
        />
      );
    }

    return <span />;
  }

  containerStatusCode() {
    if (this.isContainer()) {
      return this.props.container.status_code;
    }
    return -1;
  }

  isContainer() {
    return !_isEmpty(this.props.container);
  }

  render() {
    if (this.isContainer()) {
      return (
        <div>
          <Card className="container">
            <CardTitle
              title="Container"
              subtitle={(
                <span>
                  {containerNameButton(this.props.container, this.containerInfoRefresh)}
                  {containerStatusButton(this.containerStatusCode())}
                </span>
              )}
            />
            {/* {this.props.error && <div className="container">{this.props.error.name}</div>} */}

            <div className="container">
              <hr />

              <IconButton
                onClick={this.containerStart}
                style={iconButtonStyle}
                tooltip="start container"
              >
                <IconStart />
              </IconButton>

              <IconButton
                onClick={this.containerStop}
                style={iconButtonStyle}
                tooltip="stop container"
              >
                <IconStop />
              </IconButton>

              <IconButton
                onClick={this.containerRestart}
                style={iconButtonStyle}
                tooltip="restart container"
              >
                <IconRestart />
              </IconButton>

              <IconButton
                style={iconButtonStyle}
                tooltip="not implemented"
              >
                <IconDelete />
              </IconButton>
              <hr />
              {this.containerInfo()}
            </div>
          </Card>
        </div>
      );
    }
    return <span />;
  }
}

const mapStateToProps = state => ({
  container: state.containers.item,
  error: state.containers.error,
});

const mapDispatchToProps = dispatch => ({
  // item: arg => dispatch(item(arg)),
  start: arg => dispatch(start(arg)),
  stop: arg => dispatch(stop(arg)),
  restart: arg => dispatch(restart(arg)),
  refresh: arg => dispatch(refresh(arg)),
  reset: () => dispatch(resetItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
