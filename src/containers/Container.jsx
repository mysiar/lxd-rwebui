import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';
import { isEmpty as _isEmpty } from 'lodash';

import IconStop from 'material-ui/svg-icons/av/stop';
import IconStart from 'material-ui/svg-icons/av/play-circle-outline';
import IconRestart from 'material-ui/svg-icons/av/repeat';
import IconDelete from 'material-ui/svg-icons/content/delete-sweep';

import { COLOR_PRIMARY_2 } from '../constants/Colors';
import { item, reset } from '../actions/container';
import { containerNameButton, containerStatusButton } from '../utils/helpers';

const iconStyle = {
  width: 30,
  height: 30,
  margin: 5,
  backgroundColor: COLOR_PRIMARY_2,
};

class Container extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }).isRequired,
    item: PropTypes.func.isRequired,
    error: PropTypes.string,
    container: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.item(this.props.match.params.id);
  }

  isContainer() {
    if (!_isEmpty(this.props.container)) {
      return true;
    }
    return false;
  }

  containerStatusCode() {
    if (this.isContainer()) {
      return this.props.container.statusCode();
    }
    return -1;
  }

  containerName() {
    if (this.isContainer()) {
      return this.props.container.name();
    }
    return '';
  }

  render() {
    return (
      <div>
        <Card className="container">
          <CardTitle
            title="Container"
            subtitle={<span>
              {containerNameButton(this.containerName())}
              {containerStatusButton(this.containerStatusCode())}
            </span>}
          />
          {this.props.error && <div className="container">{this.props.error}</div>}

          <div className="container">
            <hr />
            <IconStart style={iconStyle} />
            <IconStop style={iconStyle} />
            <IconRestart style={iconStyle} />
            <IconDelete style={iconStyle} />
            <hr />
            <br />
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  container: state.container.container,
  error: state.container.error,
});

const mapDispatchToProps = dispatch => ({
  item: arg => dispatch(item(arg)),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

