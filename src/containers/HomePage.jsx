import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';

import { APP_NAME, APP_VER } from '../constants/App';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Card className="container">
          <CardTitle title={APP_NAME} subtitle={APP_VER} />
        </Card>
      </div>

    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
