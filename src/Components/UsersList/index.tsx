import * as React from 'react'
import * as Users from 'Store/Users'

interface Props {
    users: Users.Types.IUser[]
}

const ComponentUsersList: React.SFC<Props> = (props: Props):JSX.Element => {
    return(
        <div>
            <h3>Users list</h3>
            {props.users.map(user => {
                return <div key={user.id}>{user.name}</div>
            })}
        </div>
    )
}

export default ComponentUsersList