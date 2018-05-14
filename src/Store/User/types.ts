import { Action } from 'redux'

export interface IUser {
    name: string
}

export interface IUpdateName extends Action {
    type: '@@user/updatename',
    payload: {
        user: IUser
    }
}

export type UserActions = IUpdateName