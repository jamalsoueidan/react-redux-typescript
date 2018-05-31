import { RSAA, RSAAction } from 'redux-api-middleware';
import { ActionCreator, Action } from 'redux'
import * as Types from './types'

export const LoadMessages: ActionCreator<any> = () => ({
  [RSAA]: {
    types: [
      Types.LOAD_MESSAGE_REQUEST, 
      Types.LOAD_MESSAGE_SUCCESS, 
      Types.LOAD_MESSAGE_FAILURE],
    endpoint: '/dist/chat.json',
    method: 'GET',
  }
})