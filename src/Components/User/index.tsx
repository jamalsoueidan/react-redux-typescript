import * as React from 'react'
import * as Users from 'Store/Users'

interface Props {
    current: Users.Types.IUser;
    updateName?: (current: Users.Types.IUser) => void
}

const ComponentUser: React.SFC<Props> = (props: Props):JSX.Element => {
    let input:HTMLInputElement;

    const onSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        props.updateName({name: input.value, id: 0})
        input.value = "";
        input.focus();
    }

    const name:string = props.current.name 

    return(
        <form onSubmit={onSubmit}>
            <input type="text" defaultValue={name} ref={ el => input = el }/>
            <div>{props.current.name}</div>
            <button>Update name</button>
        </form>
    )
}

export default ComponentUser