import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { Link } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import UserComponent from './Components/User'
import { configureStore } from './store'

class Application extends React.Component {
  render() {
    return(<UserComponent name="Logrocket" />)
  }
}

const history = createHistory()
const store = configureStore(history);

// https://github.com/StevenIseki/react-router-redux-example/blob/master/index.js
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      
    </Router>
  </Provider>, 
  document.getElementById("application")
);