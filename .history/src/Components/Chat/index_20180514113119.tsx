import * as React from 'react'
import * as Chat from 'Store/Chat'

interface Props {
    messages: Chat.Types.IMessages
}

const ChatList: React.SFC<Props> = (props: Props): JSX.Element => {
    <div>{props.messages.length}</div>
}

export default ChatList