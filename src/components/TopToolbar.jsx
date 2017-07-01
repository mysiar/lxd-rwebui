import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar';

import {
  COLOR_PRIMARY_1,
  COLOR_PRIMARY_2,
  COLOR_TEXT_ALTERNATE,
} from '../constants/Colors';

import { APP_NAME, APP_VER } from '../constants/App';

import ProgressBar from './ProgressBar';

const ToolBarStyle = {
  backgroundColor: COLOR_PRIMARY_1,
};

class TopToolbar extends Component {

  static propTypes = {
    loading: PropTypes.arrayOf(
      PropTypes.bool,
    ).isRequired,
  };

  checkLoading() {
    let status = false;
    this.props.loading.forEach((loading) => {
      if (loading === true) status = true;
      return status;
    });
    return status;
  }

  render() {
    return (

      <Toolbar style={ToolBarStyle}>
        <ToolbarGroup>

          {this.checkLoading() && <ProgressBar />}
          {!this.checkLoading() && <img height="50" src="/img/lxd.png" alt="lxd logo" />}
          <span>&nbsp;</span>
          <ToolbarTitle text={APP_NAME} />

          <Link to="/containers">
            <RaisedButton
              label="Containers"
              backgroundColor={COLOR_PRIMARY_2}
              labelColor={COLOR_TEXT_ALTERNATE}
            />
          </Link>
          <ToolbarSeparator />
          <ToolbarSeparator />
          <RaisedButton
            label="Profiles"
            backgroundColor={COLOR_PRIMARY_2}
            labelColor={COLOR_TEXT_ALTERNATE}
          />

        </ToolbarGroup>

        <ToolbarGroup>
          <span>Ver: {APP_VER}</span>
        </ToolbarGroup>

      </Toolbar>
    );
  }
}

const mapStateToProps = state => ({
  loading: [
    state.containers.loading,
    state.container.loading,
  ],
});

export default connect(mapStateToProps)(TopToolbar);
