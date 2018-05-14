import { CALL_API } from 'redux-api-middleware';
import { ActionCreator } from 'redux'
import * as Types from './types'

export const SendMessage: ActionCreator<Types.ISendMessageAction> = (message: Types.IMessage) => ({
  type: '@@chat/SendMessageAction',
  payload: {
    message
  },
});


export const LoadMessages: ActionCreator<any> = () => ({
  [CALL_API]: {
    types: ['msg_fetch', 'msg_success', 'msg_failure'],
    endpoint: '/dist/chat.json',
    method: 'GET',
  }
})