import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  list, resetList, add, item,
} from '../actions/images';

class Images extends Component {
  static propTypes = {
    error: PropTypes.string,
    images: PropTypes.arrayOf(
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
    const { images } = this.props;
    if (images) {
      return images.map(image => (
        <p key={image.fingerprint}>
          {image.fingerprint}
          |
          {image.architecture}
          |
          {image.aliases.map(alias => (alias.name))}
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
  images: state.images.list,
  error: state.images.error,
});

const mapDispatchToProps = dispatch => ({
  list: () => dispatch(list()),
  resetList: () => dispatch(resetList()),
  add: arg => dispatch(add(arg)),
  item: arg => dispatch(item(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
