import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Containers from '../components/Containers';
import Container from '../components/Container';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/containers/" component={Containers} />
    <Route exact path="/containers/:id" component={Container} />
  </Switch>
);
