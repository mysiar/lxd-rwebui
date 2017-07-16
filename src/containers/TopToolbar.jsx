import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

import {
  COLOR_PRIMARY_1,
  COLOR_PRIMARY_2,
  COLOR_TEXT_ALTERNATE,
} from '../constants/Colors';

import { APP_NAME, APP_VER } from '../constants/App';

import ProgressBar from '../components/ProgressBar';

import { setLxdServer, getLxdServer } from '../utils/localStorage';

const ToolBarStyle = {
  backgroundColor: COLOR_PRIMARY_1,
};

class TopToolbar extends Component {

  static propTypes = {
    loading: PropTypes.arrayOf(
      PropTypes.bool,
    ).isRequired,
    lxdServer: PropTypes.string,
    setLxdServer: PropTypes.func,
    getLxdServer: PropTypes.func,
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
          {!this.checkLoading() &&
          <Link to="/">
            <img height="50" src="/img/lxd.png" alt="lxd logo" />
          </Link>
          }
          <span>&nbsp;</span>
          <ToolbarTitle text={APP_NAME} />

          <Link to="/containers">
            <RaisedButton
              label="Containers"
              backgroundColor={COLOR_PRIMARY_2}
              labelColor={COLOR_TEXT_ALTERNATE}
            />
          </Link>
          {/* <ToolbarSeparator />*/}

          {/* <RaisedButton*/}
          {/* label="Profiles"*/}
          {/* backgroundColor={COLOR_PRIMARY_2}*/}
          {/* labelColor={COLOR_TEXT_ALTERNATE}*/}
          {/* />*/}

        </ToolbarGroup>

        <ToolbarGroup>
          <TextField
            id="lxd-server"
            defaultValue={this.props.getLxdServer()}
            onChange={(event, input) => {
              this.props.setLxdServer(input);
            }}
            // value={this.props.lxdServer}
          />
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

const mapDispatchToProps = () => ({
  setLxdServer,
  getLxdServer,
});

export default connect(mapStateToProps, mapDispatchToProps)(TopToolbar);
