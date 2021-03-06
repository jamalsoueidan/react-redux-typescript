import { Reducer as R } from 'redux';
import { ActionCreator } from 'redux'
import * as Types from './types'

export const initialState: Types.IMessages = {
  messages: [],
  status: ""
};

// export default can lead to problems
// https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
export const Reducer: R<Types.IMessages> = (state: Types.IMessages = initialState, action: Types.ChatActions): Types.IMessages => {
  switch ((action as Types.ChatActions).type) {
    case Types.LOAD_MESSAGE_SUCCESS:
      return { 
        messages: action.payload, 
        status: action.type 
      };
  }
  return state;
};
