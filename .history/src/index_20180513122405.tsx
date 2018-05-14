import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from './store'
import Dispatch from './dispatch'
import Application from 'Pages/application'
import { LoadMessages } from 'Store/Chat'

const history = createBrowserHistory()
const store = configureStore(history);

// https://github.com/StevenIseki/react-router-redux-example/blob/master/index.js
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Dispatch path='/' component={Application} action={LoadMessages} />
    </ConnectedRouter>
  </Provider>, 
  document.getElementById("application")
);