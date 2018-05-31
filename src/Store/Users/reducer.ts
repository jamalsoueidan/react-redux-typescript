import { Reducer as R } from 'redux';
import { ActionCreator } from 'redux'
import * as Types from './types'

export const initialState: Types.IUsers = {
  current: {
    name: '',
    id: 0,
  },
  all: []
};

const current: R<Types.IUser> = (state: Types.IUser, action: Types.IUpdateName):Types.IUser => {
  if(action.type === Types.UPDATE_NAME)
      return action.payload.current

  return state;
}

const users: R<Types.IUser[]> = (state: Types.IUser[], action: Types.ILoadUsersSuccessAction): Types.IUser[] => {
  if( action.type === Types.LOAD_USERS_SUCCESS )
      return action.payload;
      
  return state;
}

// export default can lead to problems
// https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
export const Reducer: R<Types.IUsers> = (state: Types.IUsers = initialState, action: Types.UsersActions): Types.IUsers => {
  return {
    current: current(state.current, action),
    all: users(state.all, action),
  }
};
