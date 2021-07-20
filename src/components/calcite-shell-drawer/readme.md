# calcite-alert

Single alert for toast notifications. To position the alert correctly and manage multiple alerts, it's recommended you wrap the alert inside the [calcite-alerts](../calcite-alerts/) component:

```html
<calcite-alerts>
  <calcite-alert>
    <div slot="alert-title">Title of alert</div>
    <div slot="alert-message">
      Message text of the alert
    </div>
    <a slot="alert-link" href="#">Retry</a>
  </calcite-alert>
</calcite-alerts>
```

## TODO

- tests
- verify aria
- document events

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                  | Type                | Default     |
| ------------------ | ------------------- | ---------------------------- | ------------------- | ----------- |
| `active`           | `active`            |                              | `boolean`           | `undefined` |
| `requestedContent` | `requested-content` |                              | `string`            | `undefined` |
| `theme`            | `theme`             | Select theme (light or dark) | `"dark" \| "light"` | `"light"`   |


## Dependencies

### Used by

 - [calcite-nav](../calcite-nav)
 - [calcite-nav-menu](../calcite-nav-menu)

### Graph
```mermaid
graph TD;
  calcite-nav --> calcite-nav-drawer
  calcite-nav-menu --> calcite-nav-drawer
  style calcite-nav-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
