import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import UserComponent from './Components/User'

export default class Application extends React.Component {
  render() {
    return(<UserComponent name="Logrocket" />)
  }
}