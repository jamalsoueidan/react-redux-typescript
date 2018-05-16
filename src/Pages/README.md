## Pages

Each page act as a container, and each container inside a new folder!

1. /Pages/Application
2. /Pages/Application/index.tsx
3. /Pages/Application/component.tsx

Keep the main container inside a component.ts file.


```javascript
//Pages/Application/component.tsx
export default class PageApplication extends React.Component<IProps> {
  render() {
    return(
      <div>Keep it clean</div>
    )
  }
}
```

...and inside index.ts you will add the connect with Redux.

```javascript
//Pages/Application/index.tsx
export default connect(mapStateToProps, mapDispatchToProps)(PageApplication)
```

When you are done export the Page inside Pages/index.ts.

```javascript
//Pages/index.ts
export { default as PageApplication } from './Application'
```