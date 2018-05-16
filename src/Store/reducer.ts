import * as Redux from 'redux'
import * as Chat from './Chat'
import * as Users from './Users'

// https://github.com/piotrwitek/react-redux-typescript-guide/blob/master/playground/src/redux/root-reducer.ts
import { routerReducer, RouterState } from 'react-router-redux';

// A type-safe approach to Redux stores in TypeScript
// shttps://dev.to/resir014/a-type-safe-approach-to-redux-stores-in-typescript--5ajm

export interface IApplicationState {
    chat: Chat.Types.IMessages,
    users: Users.Types.IUsers,
    router: RouterState 
}

export const reducers: Redux.Reducer<IApplicationState> = Redux.combineReducers<IApplicationState>({
    chat: Chat.Reducer,
    users: Users.Reducer,
    router: routerReducer
})