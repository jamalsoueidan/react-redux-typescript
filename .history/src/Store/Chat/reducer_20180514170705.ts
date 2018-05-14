import { Reducer as R } from 'redux';
import { ActionCreator } from 'redux'
import * as Types from './types'

export const initialState: Types.IMessages = {
  messages: [],
  status: ""
};

// export default can lead to problems
// https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
export const Reducer: R<Types.IMessages> = (state: Types.IMessages = initialState, action) => {
  console.log(action)
  switch ((action as Types.ChatActions).type) {
    case '@@chat/SendMessageAction':
      return { messages: [...state.messages, action.payload.message], status: action.type };
    case '@@chat/LoadMessagesAction/Success':
      return { messages: new Array<Types.IMessage>({...action.payload}), status: action.type };
  }
  return state;
};
