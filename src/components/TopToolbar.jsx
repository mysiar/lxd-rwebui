import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

import {
  COLOR_PRIMARY_1,
  COLOR_PRIMARY_2,
  COLOR_TEXT_ALTERNATE,
} from '../constants/Colors';

import {APP_NAME, APP_VER} from '../constants/App';

const ToolBarStyle = {
  backgroundColor: COLOR_PRIMARY_1,
};

class TopToolbar extends Component {

  render() {
    return (
      <Toolbar style={ToolBarStyle}>
        <ToolbarGroup>

          <img height="60" src="img/lxd.png" alt="lxd logo"/>
          <span>&nbsp;</span>
          <ToolbarTitle text={APP_NAME}/>

          <RaisedButton label="Containers"
                        backgroundColor={COLOR_PRIMARY_2}
                        labelColor={COLOR_TEXT_ALTERNATE}
          />
          <RaisedButton label="Images"
                        backgroundColor={COLOR_PRIMARY_2}
                        labelColor={COLOR_TEXT_ALTERNATE}
          />
          <RaisedButton label="Profiles"
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

export default TopToolbar;
