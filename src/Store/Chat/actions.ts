import { RSAA } from 'redux-api-middleware';
import { ActionCreator } from 'redux'
import * as Types from './types'

export const LoadMessages: ActionCreator<Types.ILoadMessage> = () => ({
  [RSAA]: {
    types: [
      Types.LOAD_MESSAGE_REQUEST, 
      Types.LOAD_MESSAGE_SUCCESS, 
      Types.LOAD_MESSAGE_FAILURE],
    endpoint: '/dist/chat.json',
    method: 'GET',
  }
})