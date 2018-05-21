import PageApplication from './component'
import {connect} from 'react-redux'
import {Dispatch, Action} from "redux";
import * as Chat from 'Store/Chat'
import * as Users from 'Store/Users'

interface IApplicationState {
  chat: {
    messages: Chat.Types.IMessage[]
  },
  users: Users.Types.IUsers
}

const mapStateToProps = ({chat, users}: IApplicationState) => ({
  messages: chat.messages,
  users: users
})

export type DispatchActions = Chat.Types.ILoadMessage | Users.Types.ILoadUsers

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  loadMessages: () => dispatch(Chat.Actions.LoadMessages()),
  loadUsers: () => dispatch(Users.Actions.LoadUsers()),
  updateName: (current:Users.Types.IUser) => dispatch(Users.Actions.UpdateName(current))
})

export default connect(mapStateToProps, mapDispatchToProps)(PageApplication)