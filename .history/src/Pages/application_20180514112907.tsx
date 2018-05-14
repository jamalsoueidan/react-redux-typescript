import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import UserComponent from 'Components/User'
import ChatComponent from 'Components/Chat'

import * as Chat from 'Store/Chat'

interface IApplicationProps {
  messages: Chat.Types.IMessages,
  loadMessages: any
}

interface IApplicationState {
  chat: {
    messages: Chat.Types.IMessages
  }
}

class Application extends React.Component<IApplicationProps> {
  componentDidMount() {
    this.props.loadMessages();
  }
  render() {
    return(<ChatComponent messages={this.props.messages} />)
  }
}

export default connect((state: IApplicationState) => {
  console.log(state)
  return {}
}, (dispatch) => ({
  loadMessages: () => {
    dispatch(Chat.Actions.LoadMessages())
  }
}))(Application)