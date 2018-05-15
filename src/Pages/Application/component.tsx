import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChatComponent, UserComponent } from 'Components'
import * as Chat from 'Store/Chat'
import * as User from 'Store/User'

interface IApplicationProps {
  messages: Chat.Types.IMessage[],
  user:  User.Types.IUser,
  loadMessages: () => void,
  updateName: (user: User.Types.IUser) => any
}

export default class Application extends React.Component<IApplicationProps> {
  componentDidMount() {
    this.props.loadMessages();
  }
  render() {
    return(
      <div>
        <UserComponent name={this.props.user.name} updateName={this.props.updateName} />
        <ChatComponent messages={this.props.messages} />
      </div>
    )
  }
}
