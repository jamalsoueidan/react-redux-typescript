import * as React from 'react'
import * as User from 'Store/User'

interface Props {
    name: string;
    updateName?: (user: User.Types.IUser) => void
}

const UserComponent: React.SFC<Props> = (props: Props):JSX.Element => {
    let input:HTMLInputElement;

    const onSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        props.updateName({name: input.value})
        input.value = "";
        input.focus();
    }

    return(
        <form onSubmit={onSubmit}>
            <input type="text" defaultValue={props.name} ref={ el => input = el }/>
            <div>{props.name}</div>
            <button>Update name</button>
        </form>
    )
}

export default UserComponent