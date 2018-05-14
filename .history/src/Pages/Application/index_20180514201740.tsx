import Application from './component'
import {connect} from 'react-redux'
import {Dispatch} from "redux";
import * as Chat from 'Store/Chat'


interface IApplicationState {
  chat: {
    messages: Chat.Types.IMessage[]
  }
}

const mapStateToProps = ({chat}: IApplicationState) => ({
  messages: chat.messages
})

const mapDispatchToProps = (dispatch:Dispatch<Chat.Types.ChatActions>) => ({
  loadMessages: () => dispatch(Chat.Actions.LoadMessages())
})

export default connect(mapStateToProps, mapDispatchToProps)(Application)