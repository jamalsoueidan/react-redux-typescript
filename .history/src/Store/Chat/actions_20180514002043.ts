import { createApiAction } from 'redux-typed-async-actions';
const CALL_API = require 'redux-api-middleware';
import { ActionCreator } from 'redux'
import * as Types from './types'

export const SendMessage: ActionCreator<Types.ISendMessageAction> = (message: Types.IMessage) => ({
  type: '@@chat/SendMessageAction',
  payload: {
    message
  },
});

export const fetchClients = createApiAction<{}, IClientModel[]>('CLIENTS_FETCH', {
  CALL_API,
  method: 'GET',
  endpoint: `/api/clients`,
});