import { createApiAction } from 'redux-typed-async-actions';
import { CALL_API } from 'redux-api-middleware';
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


 
export const fetchClients = createApiAction<{}, IClientModel[]>('CLIENTS_FETCH', {
  CALL_API,
  method: 'GET',
  endpoint: `/api/clients`,
});