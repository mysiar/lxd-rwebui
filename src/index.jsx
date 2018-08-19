import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { MuiThemeProvider } from 'material-ui';

import AppRoutes from './routes/AppRoutes';
import AppStore from './store/AppStore';
import theme from './styles/MaterialUiRawTheme';
import './styles/style.css';

import TopToolbar from './containers/TopToolbar';

const history = syncHistoryWithStore(createBrowserHistory(), AppStore);

ReactDOM.render(
  <Provider store={AppStore}>
    <MuiThemeProvider muiTheme={theme}>
      <Router history={history}>
        <div>
          <TopToolbar />
          {AppRoutes}
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('lxd-rwebui'),
);
