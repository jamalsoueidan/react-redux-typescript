import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import UserComponent from 'Components/User'
import { LoadMessages } from 'Store/Chat'

class Application extends React.Component {
  render() {
    return(<UserComponent name="Logrocket" />)
  }
}

export default connect(null, (dispatch) => ({
  loadMessages: () => {
    dispatch(LoadMessages())
  }
}))(Application)