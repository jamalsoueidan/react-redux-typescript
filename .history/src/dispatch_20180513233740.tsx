import * as React from 'react'
import { connect } from 'react-redux';

interface IApiRequest {
    path: string,
    component: Object,
    action: any
}

class Dispatch extends React.Component<IApiRequest, {}> {
    render() {
        const Component = this.props.component
        return <Component />
    }
}

export default connect()(Dispatch)