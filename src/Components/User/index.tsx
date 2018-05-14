import * as React from 'react'

interface IUser {
    name: string;
}
  
class UserComponent extends React.Component<IUser, {}> {
    render() {
        return(
            <div>
                <input type="text" defaultValue={this.props.name} />
                <button>Update name</button>
            </div>
        )
    }
}

export default UserComponent