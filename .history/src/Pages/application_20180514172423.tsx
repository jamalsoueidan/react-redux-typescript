import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import UserComponent from 'Components/User'
import ChatComponent from 'Components/Chat'

import * as Chat from 'Store/Chat'

interface IApplicationProps {
  messages: Chat.Types.IMessage[],
  loadMessages: any
}

class Application extends React.Component<IApplicationProps> {
  componentDidMount() {
    this.props.loadMessages();
  }
  render() {
    return(<ChatComponent messages={this.props.messages} />)
  }
}

interface IApplicationState {
  chat: {
    messages: Chat.Types.IMessage[]
  }
}

export default connect((state: IApplicationState) => {
  return {messages: state.chat.messages}
}, (dispatch) => ({
  loadMessages: () => {
    dispatch(Chat.Actions.LoadMessages())
  }
}))(Application)