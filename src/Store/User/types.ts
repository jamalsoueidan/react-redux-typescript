import { Action } from 'redux'

export interface IUser {
    name: string
}

export const UPDATE_NAME = '@@user/UpdateName';
export type UPDATE_NAME = typeof UPDATE_NAME;

export interface IUpdateName extends Action {
    type: UPDATE_NAME,
    payload: {
        user: IUser
    }
}

export type UserActions = IUpdateName