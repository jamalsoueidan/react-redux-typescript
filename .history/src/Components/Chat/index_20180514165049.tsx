import * as React from 'react'
import * as Chat from 'Store/Chat'

interface Props {
    messages: Array<any>
}

const ChatList: React.SFC<Props> = (props: Props): JSX.Element => {
    return <div>{props.messages.length}</div>
}

export default ChatList