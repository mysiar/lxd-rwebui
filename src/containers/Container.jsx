import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { isEmpty as _isEmpty } from 'lodash';

import { item, reset } from '../actions/container';

const style = {
  margin: 12,
  height: 25,
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
  }

  componentWillMount() {
    this.props.item(this.props.match.params.id);
  }

  render() {
    const container = this.props.container;
    return (
      <div>
        <Card className="container">
          <CardTitle title="Container" subtitle={!_isEmpty(container) && container.name()} />
          {this.props.error && <div className="container">{this.props.error}</div>}
          <div>

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

