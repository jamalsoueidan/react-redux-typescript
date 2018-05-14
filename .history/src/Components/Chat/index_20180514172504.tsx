import * as React from 'react'
import * as Chat from 'Store/Chat'

interface Props {
    messages: Chat.Types.IMessage[]
}

const ChatList: React.SFC<Props> = (props: Props): JSX.Element => {
    if(props.messages) {
        return <div>hej med dig</div>
    }
    return <div>jamal</div>
}

export default ChatList