import { Reducer as R } from 'redux';
import { ActionCreator } from 'redux'
import * as Types from './types'

export const initialState: Types.IUser = {
  name: 'jamal'
};

// export default can lead to problems
// https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
export const Reducer: R<Types.IUser> = (state: Types.IUser = initialState, action) => {
  switch ((action as Types.UserActions).type) {
    case '@@user/updatename':
    return { ...state, user: action.payload.user };
      
  }
  return state;
};