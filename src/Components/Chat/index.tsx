import * as React from 'react'
import * as Chat from 'Store/Chat'

interface Props {
    messages: Chat.Types.IMessage[]
}

const ComponentChat: React.SFC<Props> = (props: Props): JSX.Element => {
    if(!props.messages) {
        return <div>Vent et øjeblik</div>
    }
    
    const messages = props.messages.map(value => <div key={value.id}>{value.message}</div>)
    
    return (
        <div>
            <h3>Chat messages</h3>
            {messages}
        </div>
    )
}

export default ComponentChat