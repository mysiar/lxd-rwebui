import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';

import AppRoutes from './routes/AppRoutes';
import AppStore from './store/AppStore';
import theme from './styles/MaterialUiRawTheme';
import './styles/style.css';

import TopToolbar from './containers/TopToolbar';

ReactDOM.render(
  <Provider store={AppStore}>
    <MuiThemeProvider muiTheme={theme}>
      <Router>
        <div>
          <TopToolbar />
          {AppRoutes}
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('lxd-rwebui'),
);
