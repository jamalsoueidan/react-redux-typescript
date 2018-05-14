import * as React from 'react'
import * as Chat from 'Store/Chat'

interface Props {
    messages: Chat.Types.IMessage[]
}

const ChatList: React.SFC<Props> = (props: Props): JSX.Element => {
    if(!props.messages) {
        return <div>Vent et øjeblik</div>
    }
    return props.messages.map(value => <div key={value.id}>{value.message}</div>)
}

export default ChatList