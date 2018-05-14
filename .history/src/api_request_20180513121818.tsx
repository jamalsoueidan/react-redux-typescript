import * as React from 'react'

interface IApiRequest {
    path: string,
    component: React.Component,
    uri: string
}

class ApiRequest extends React.Component<IApiRequest, {}> {
    render() {
        const Component = this.props.component
        return <Component />
    }
}

export default ApiRequest