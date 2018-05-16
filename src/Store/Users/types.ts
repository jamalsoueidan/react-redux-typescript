import { Action } from 'redux'

export interface IUser {
    id: number,
    name: string
}

export interface IUsers {
    current: IUser,
    all: IUser[]
  }

export const UPDATE_NAME = '@@users/UpdateName';
export type UPDATE_NAME = typeof UPDATE_NAME;

export interface IUpdateName extends Action {
    readonly type: UPDATE_NAME,
    payload: {
        current: IUser
    }
}

export const LOAD_USERS_SUCCESS = '@@users/LoadUsersAction/Success';
export type LOAD_USERS_SUCCESS = typeof LOAD_USERS_SUCCESS;

export const LOAD_USERS_FAILURE = '@@users/LoadUsersAction/Failure';
export type LOAD_USERS_FAILURE = typeof LOAD_USERS_FAILURE;

export const LOAD_USERS_REQUEST = '@@users/LoadUsersAction/Request';
export type LOAD_USERS_REQUEST = typeof LOAD_USERS_REQUEST;

export interface ILoadUsersSuccessAction extends Action {
    readonly type: LOAD_USERS_SUCCESS,
    payload: {
        all: IUser[]
    }
}

export type UsersActions = IUpdateName | ILoadUsersSuccessAction