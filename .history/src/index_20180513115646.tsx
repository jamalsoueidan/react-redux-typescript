import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from './store'
import ApiRequeste from './api_request'
import c from 'Pages/application'

const history = createBrowserHistory()
const store = configureStore(history);

// https://github.com/StevenIseki/react-router-redux-example/blob/master/index.js
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ApiRequeste path='/' component={ApiRequeste} />
    </ConnectedRouter>
  </Provider>, 
  document.getElementById("application")
);