## Refactoring fat reducers

It's very simple, each key in the state is handled in a new nested reducers.

```javascript
export const Reducer: R<Types.IUsers> = (state: Types.IUsers = initialState, action: Types.UsersActions) => {
  return {
    current: current(state.current, action),
    all: users(state.all, action)
  }
};
```

If the reducer.ts become to big, you can move each reducer in a new file.

1. current.ts
2. users.ts
3. etc.
