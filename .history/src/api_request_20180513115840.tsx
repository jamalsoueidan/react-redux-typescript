import * as React from 'react'

const ApiRequest = ({component: React.Component, ...rest}) => {
    console.log(component)

    return <Component {...rest} />
}

export default ApiRequest