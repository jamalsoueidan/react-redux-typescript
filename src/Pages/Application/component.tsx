import * as React from "react";
import * as ReactDOM from "react-dom";
import { ComponentChat, ComponentUser, ComponentUsersList } from 'Components'
import * as Chat from 'Store/Chat'
import * as Users from 'Store/Users'

interface IApplicationProps {
  messages: Chat.Types.IMessage[],
  users: Users.Types.IUsers,
  loadMessages: () => void,
  loadUsers: () => void,
  updateName: (current: Users.Types.IUser) => any,
}

export default class PageApplication extends React.Component<IApplicationProps> {
  componentDidMount() {
    this.props.loadMessages();
    this.props.loadUsers();
  }

  render() {
    return(
      <div>
        <ComponentUser current={this.props.users.current} updateName={this.props.updateName} />
        <ComponentChat messages={this.props.messages} />
        <ComponentUsersList users={this.props.users.all} />
      </div>
    )
  }
}
