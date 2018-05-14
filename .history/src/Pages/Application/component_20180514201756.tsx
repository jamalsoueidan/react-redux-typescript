import * as React from "react";
import * as ReactDOM from "react-dom";
import ChatComponent from 'Components/Chat'
import * as Chat from 'Store/Chat'

interface IApplicationProps {
  messages: Chat.Types.IMessage[],
  loadMessages: () => void
}

export default class Application extends React.Component<IApplicationProps> {
  componentDidMount() {
    this.props.loadMessages();
  }
  render() {
    return(<ChatComponent messages={this.props.messages} />)
  }
}
