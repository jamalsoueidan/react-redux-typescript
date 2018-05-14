import { ActionCreator } from 'redux'
import * as Types from './types'

export const SendMessage: ActionCreator<Types.ISendMessageAction> = (message: Types.IMessage) => ({
  type: '@@chat/SendMessageAction',
  payload: {
    message
  },
});

export const LoadMessages: ActionCreator<Types.ILoadMessagesAction> = () => ({
  type: '@@chat/LoadMessagesAction',
  payload: {
    messages
  }
});