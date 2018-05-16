## Refactoring fat reducers

It's very simple, each key in the state is handled in a new nested reducer.

Example from: https://github.com/jamalsoueidan/react-redux-typescript/blob/master/src/Store/Users/reducer.ts

```javascript
export const Reducer: R<Types.IUsers> = (state: Types.IUsers = initialState, action: Types.UsersActions) => {
  return {
    current: current(state.current, action),
    all: users(state.all, action)
  }
};
```

If the reducer.ts become to big, you can move each reducer in a new file.

1. Users/reducer/current.ts
2. Users/reducer/users.ts
3. etc.

Keep in mind the main reducer have to be inside the new reducer folder

1. Users/reducer/index.ts


