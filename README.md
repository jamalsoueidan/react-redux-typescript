# React Redux Typescript

Play ground for Typescript with React & Redux

## Store

Inside Store folder we have all the reducers that are configured for Redux.

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

1. Store/Chat
2. Store/Users
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

Read more: https://github.com/jamalsoueidan/react-redux-typescript/tree/master/src/Store

## Components 

Component is very simple, they only accept props and actions!

Each folder have one component, and each component can have nested components if needed.

1. Components/Chat
2. Components/User
3. Components/UsersList`

All components should be exported in Components/index

```javascript
export { default as ComponentChat } from './Chat'
export { default as ComponentUser } from './User'
export { default as ComponentUsersList } from './UsersList'
```

This allow them to imported like this anywhere.

```javascript
import { ComponentChat, ComponentUser, ComponentUsersList } from 'Components'
```

We are using **[Component][Name]**, this way we always knows this is Component we are working with.

## Pages

Pages act as containers, and each url route correspond to one page.

**Pages are the only containers that connect to redux!**

```javascript
<Route path='/' component={PageApplication} />
```

## References:

https://dev.to/resir014/a-type-safe-approach-to-redux-stores-in-typescript--5ajm

https://github.com/StevenIseki/react-router-redux-example

https://github.com/Microsoft/TypeScript-React-Starter#adding-a-reducer

http://blog.krawaller.se/posts/a-redux-typescript-setup/