
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as URLS from './urls';
import '../../assets/css/main.css';

import {
  Page404,
  Page400,
  Page500,
  Home,
} from './components';

import store from './redux/store';
const container = document.getElementById('react-container');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={URLS.HOME} component={Home} />
        <Route exact path={URLS.PAGE_404} component={Page404} />
        <Route exact path={URLS.PAGE_400} component={Page400} />
        <Route exact path={URLS.PAGE_500} component={Page500} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  container
);

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  module.hot.accept(); // eslint-disable-line no-undef  
}

