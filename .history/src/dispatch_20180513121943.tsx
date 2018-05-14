import * as React from 'react'

interface IApiRequest {
    path: string,
    component: any,
    uri: string
}

export default class Dispatch extends React.Component<IApiRequest, {}> {
    render() {
        const Component = this.props.component
        return <Component />
    }
}
