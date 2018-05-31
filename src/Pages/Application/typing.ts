import {Dispatch, Action} from "redux";
import * as Chat from 'Store/Chat'
import * as Users from 'Store/Users'

export interface IApplicationState {
	chat: {
		messages: Chat.Types.IMessage[]
	}
	users: Users.Types.IUsers
}

export interface IMapDispatchToProps {
	loadMessages: () => Action,
	loadUsers: () => Action,
	updateName: (current: Users.Types.IUser) => Action
}