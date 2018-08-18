import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Card, CardTitle } from 'material-ui/Card';

import { list, reset } from '../actions/containers/list';
import { item } from '../actions/containers/item';
import { containerNameButton, containerStatusButton } from '../utils/helpers';

class Containers extends Component {
  static propTypes = {
    error: PropTypes.string,
    containers: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,
    list: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    item: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.list();
  }

  componentWillUnmount() {
    this.props.reset();
  }

  renderTableBody() {
    if (this.props.containers) {
      return this.props.containers.map(container => (
        <TableRow key={container.name}>
          <TableRowColumn>
            {containerNameButton(container, () => this.props.item(container))}
          </TableRowColumn>
          <TableRowColumn>{container.architecture}</TableRowColumn>
          <TableRowColumn style={{ textAlign: 'center' }}><Checkbox
            checked={container.stateful}
            disabled
          />
          </TableRowColumn>
          <TableRowColumn style={{ textAlign: 'center' }}><Checkbox
            checked={container.ephemeral}
            disabled
          />
          </TableRowColumn>
          <TableRowColumn>{containerStatusButton(container.status_code)}</TableRowColumn>
        </TableRow>
        ),
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <Card className="container">
          <CardTitle title="Containers" subtitle="List of LXD containers" />
          {this.props.error && <div className="container">{this.props.error}</div>}
          <Table
            fixedHeader
            selectable={false}
            multiSelectable={false}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Arch</TableHeaderColumn>
                <TableHeaderColumn>Stateful</TableHeaderColumn>
                <TableHeaderColumn>Ephemeral</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.renderTableBody()}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  containers: state.containers.list.data,
  error: state.containers.list.error,
});

const mapDispatchToProps = dispatch => ({
  list: () => dispatch(list()),
  reset: () => dispatch(reset()),
  item: arg => dispatch(item(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Containers);
