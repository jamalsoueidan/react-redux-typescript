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
    types: [FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE],
    endpoint: 'http://0.0.0.0:3001/api/posts',
    method: 'GET',
  }
})