import * as React from 'react'
import { connect } from 'react-redux';
import { LoadMessages }  from 'Store/Chat'

interface IApiRequest {
    path: string,
    component: any,
    action?: any
}


export interface IDispatch {
    loadMessages: () => any;
}

class Dispatch extends React.Component<IApiRequest, {}> {
    render() {
        const Component = this.props.component
        console.log("ere", this.props)
        return <Component />
    }
}

export default connect((state: any) => ({
    messages: state.messages
}), (dispatch) => ({
    onLoadMessages: () => {
        dispatch(LoadMessages())
    }
}))(Dispatch)