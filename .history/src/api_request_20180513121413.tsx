import * as React from 'react'

interface IApiRequest {
    path: string,
    component: any
}

class ApiRequest extends React.Component<IApiRequest, {}> {
    render() {
        console.log(this.props)
        return <div>jamal</div>
    }
}

export default ApiRequest