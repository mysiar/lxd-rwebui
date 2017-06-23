import React, { Component } from 'react';
import lxd from 'node-lxd';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import { Card, CardTitle } from 'material-ui/Card';

import { getHost } from '../utils/helpers';

class Containers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containers: [],
    };
  }

  componentWillMount() {
    this.lxd = lxd(getHost());
  }

  componentDidMount() {
    this.lxd.containers((err, containers) => {
      this.setState({
        containers,
      });
    });
  }

  containerRows() {
    return this.state.containers.map(container => (
      <TableRow key={container.name()}>
        <TableRowColumn>{container.name()}</TableRowColumn>
        <TableRowColumn>{container.architecture()}</TableRowColumn>
        <TableRowColumn style={{ textAlign: 'center' }}><Checkbox
          checked={container.stateful()}
          disabled
        />
        </TableRowColumn>
        <TableRowColumn style={{ textAlign: 'center' }}><Checkbox
          checked={container.ephemeral()}
          disabled
        />
        </TableRowColumn>
        <TableRowColumn>{container.status()}</TableRowColumn>
      </TableRow>
        ),
    );
  }

  render() {
    return (
      <div>
        <Card className="container">
          <CardTitle title="Containers" subtitle="List of LXD containers" />
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
              {this.containerRows()}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default Containers;
