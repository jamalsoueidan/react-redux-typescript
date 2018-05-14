import * as React from 'react'

const ApiRequest = ({component: React.Component, ...rest}) => {
    console.log(component)

    return component
}

export default ApiRequest