import PageApplication from './component'
import {connect} from 'react-redux'
import {Dispatch, Action} from "redux";
import * as Typing from './typing'
import * as Chat from 'Store/Chat'
import * as Users from 'Store/Users'

const mapStateToProps = ({chat, users}:Typing.IApplicationState): Typing.IApplicationState=> ({
  chat: {
    messages: chat.messages,
  },
  users: users
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): Typing.IMapDispatchToProps => ({
  loadMessages: () => dispatch(Chat.Actions.LoadMessages()),
  loadUsers: () => dispatch(Users.Actions.LoadUsers()),
  updateName: (current:Users.Types.IUser) => dispatch(Users.Actions.UpdateName(current))
})

export default connect(mapStateToProps, mapDispatchToProps)(PageApplication)