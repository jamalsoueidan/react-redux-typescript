import * as React from 'react'
import { connect } from 'react-redux';

interface IApiRequest {
    path: string,
    component: any,
    action?: any
}

class Dispatch extends React.Component<IApiRequest, {}> {
    render() {
        const Component = this.props.component
        this.props.action();
        return <Component />
    }
}

export default connect()(Dispatch)