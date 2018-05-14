import * as React from 'react'

interface IApiRequest {
    path: string,
    component: any,
    action: any
}

export default class Dispatch extends React.Component<IApiRequest, {}> {
    render() {
        const Component = this.props.component
        return <Component />
    }
}
