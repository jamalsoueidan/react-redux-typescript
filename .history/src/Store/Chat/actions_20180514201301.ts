import { CALL_API } from 'redux-api-middleware';
import { ActionCreator } from 'redux'
import * as Types from './types'

export const SendMessage: ActionCreator<Types.ISendMessageAction> = (message: Types.IMessage) => ({
  type: Types.SEND_MESSSAGE,
  payload: {
    message
  },
});


export const LoadMessages: ActionCreator<any> = () => ({
  [CALL_API]: {
    types: ['@@chat/LoadMessagesAction/Fetch', '@@chat/LoadMessagesAction/Success', '@@chat/LoadMessagesAction/Failure'],
    endpoint: '/dist/chat.json',
    method: 'GET',
  }
})