import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  list, resetList, add, item,
} from '../actions/profiles';

class Profiles extends Component {
  static propTypes = {
    error: PropTypes.string,
    profiles: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,
    list: PropTypes.func.isRequired,
    resetList: PropTypes.func.isRequired,
    item: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.list();
  }

  componentWillUnmount() {
    this.props.resetList();
  }

  renderTableBody() {
    if (this.props.profiles) {
      return this.props.profiles.map(profile => (
        <p key={profile.name}>
          {profile.name}
          ,
          {' '}
          {profile.description}
        </p>
      ));
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.renderTableBody()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profiles: state.profiles.list,
  error: state.profiles.error,
});

const mapDispatchToProps = dispatch => ({
  list: () => dispatch(list()),
  resetList: () => dispatch(resetList()),
  add: arg => dispatch(add(arg)),
  item: arg => dispatch(item(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
