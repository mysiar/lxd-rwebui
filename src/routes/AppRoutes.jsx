import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Containers from '../components/Containers';

export default (
   <Switch>
        <Route exact path="/containers/" component={Containers} />
    </Switch>
);
