import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';
import { Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import UserComponent from './Components/User'
import { configureStore } from './store'

class Application extends React.Component {
  render() {
    return(<UserComponent name="Logrocket" />)
  }
}

const history = createBrowserHistory()
const store = configureStore(history);

// https://github.com/StevenIseki/react-router-redux-example/blob/master/index.js
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Application}/>
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById("application")
);