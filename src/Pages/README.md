## Pages

Each page act as a container.

Keep the main container inside a component.ts file.


```javascript
//component.tsx
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
//index.tsx
export default connect(mapStateToProps, mapDispatchToProps)(PageApplication)
```

