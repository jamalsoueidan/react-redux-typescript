import * as React from 'react'
import * as Chat from 'Store/Chat'

interface Props {
    messages: Chat.Types.IMessages
}

const MyClientComponent: React.SFC<Props> = (props: Props): JSX.Element => (
    <div>this.props.messages.length</div>
)