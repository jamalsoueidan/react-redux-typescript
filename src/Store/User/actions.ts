import { ActionCreator } from 'redux'
import * as Types from './types'

export const UpdateName: ActionCreator<Types.IUpdateName> = (user: Types.IUser) => ({
    type: Types.UPDATE_NAME,
    payload: {
        user
    }
})