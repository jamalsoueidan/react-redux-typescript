import * as React from "react";
import * as ReactDOM from "react-dom";
import { ComponentChat, ComponentUser, ComponentUsersList } from 'Components'
import * as Typing from './typing'

export default class PageApplication extends React.Component<Typing.IApplicationState & Typing.IMapDispatchToProps> {
  componentDidMount() {
    this.props.loadMessages();
    this.props.loadUsers();
  }

  render() {
    return(
      <div>
        <ComponentUser current={this.props.users.current} updateName={this.props.updateName} />
        <ComponentChat messages={this.props.chat.messages} />
        <ComponentUsersList users={this.props.users.all} />
      </div>
    )
  }
}
