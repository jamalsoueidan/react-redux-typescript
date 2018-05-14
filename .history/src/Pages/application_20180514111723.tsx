import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import UserComponent from 'Components/User'
import ChatComponent from 'Components/Chat'

import { Actions } from 'Store/Chat'

interface IApplicationProps {
  loadMessages: any
}

class Application extends React.Component<IApplicationProps> {
  componentDidMount() {
    this.props.loadMessages();
  }
  render() {
    return(<ChatComponent  />)
  }
}

export default connect(null, (dispatch) => ({
  loadMessages: () => {
    dispatch(Actions.LoadMessages())
  }
}))(Application)