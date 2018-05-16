import { ActionCreator } from 'redux'
import { RSAA, RSAAction } from 'redux-api-middleware';
import * as Types from './types'

export const UpdateName: ActionCreator<Types.IUpdateName> = (current: Types.IUser) => ({
    type: Types.UPDATE_NAME,
    payload: {
      current
    }
})


export const LoadUsers: ActionCreator<any> = () => ({
  [RSAA]: {
    types: [Types.LOAD_USERS_REQUEST, Types.LOAD_USERS_SUCCESS, Types.LOAD_USERS_FAILURE],
    endpoint: '/dist/users.json',
    method: 'GET'
  }
})