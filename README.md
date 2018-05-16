# React Redux Typescript

Play ground for Typescript with React & Redux

## Store

Inside Store we have all the reducers that are configured for the Store.

```javascript
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
```

So each one of them have one folder.

1. Chat
2. Users
3. etc

Inside each folder we have 4 files, or more depending on how big the reducers become.

1. actions.ts
2. index.ts 
3. reducers.ts
4. types.ts

If we have too many actions or reducers we can split them up in folders.

1. Actions/index.ts
2. Actions/LoadUsers.ts
3. Actions/UpdateName.ts
4. etc.

## References:

https://dev.to/resir014/a-type-safe-approach-to-redux-stores-in-typescript--5ajm

https://github.com/StevenIseki/react-router-redux-example

https://github.com/Microsoft/TypeScript-React-Starter#adding-a-reducer