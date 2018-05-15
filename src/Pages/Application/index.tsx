import Application from './component'
import {connect} from 'react-redux'
import {Dispatch} from "redux";
import * as Chat from 'Store/Chat'
import * as User from 'Store/User'

interface IApplicationState {
  chat: {
    messages: Chat.Types.IMessage[]
  },
  user: User.Types.IUser
}

const mapStateToProps = ({chat, user}: IApplicationState) => ({
  messages: chat.messages,
  user: user
})

export type Actions = Chat.Types.ILoadMessagesSuccessAction | User.Types.IUpdateName

const mapDispatchToProps = (dispatch:Dispatch<Actions>) => ({
  loadMessages: () => dispatch(Chat.Actions.LoadMessages()),
  updateName: (user:User.Types.IUser) => dispatch(User.Actions.UpdateName(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Application)