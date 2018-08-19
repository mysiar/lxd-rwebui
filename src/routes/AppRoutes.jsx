import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Containers from '../containers/Containers';
import Container from '../containers/Container';
import Images from '../containers/Images';
import Profiles from '../containers/Profiles';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/containers/" component={Containers} />
    <Route exact path="/containers/:id" component={Container} />
    <Route exact path="/images/" component={Images} />
    <Route exact path="/profiles/" component={Profiles} />
    { // routing for electron start page
      window.location.pathname.includes('index.html') &&
      <Redirect to="/" /> }
  </Switch>
);
