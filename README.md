# iconic

Simple React icon library with a small `Icon` component.

## Install

using the GitHub repo directly:

```bash
npm install github:CaptainUnderpants14/iconic
```

## Peer dependencies

Make sure your app already has:

```bash
npm install react react-dom
```

## Import

```jsx
import { Icon } from "iconic";
```

## Using className format (For tailwind users)

You can also pass the icon through `className`:

```jsx
<Icon className="business_chartLine" />
<Icon className="business_chartLine_40" />
<Icon className="dev_react_lg text-blue-500" />
```

Format:

```txt
group_iconName
group_iconName_size*
```

Examples:

```txt
business_chartLine
business_chartLine_40
dev_react_lg
```

## Basic usage (For those not using tailwind)

```txt
General Usage looks like:
<Icon group="group_name" name="icon_name" size*={icon_size} color*="color"/>
* optional parameter
```

Example:

```jsx
import { Icon } from "iconic";

export default function App() {
  return (
    <div>
      <Icon group="business" name="chartLine" />
      <Icon group="dev" name="react" size="lg" />
      <Icon group="action" name="add" size={28} color="tomato" />
    </div>
  );
}
```

## Size options

Preset sizes:

```txt
sm = 16
md = 20
lg = 28
xl = 36
```

You can also pass a number:

```jsx
<Icon group="business" name="chartLine" size={32} />
```

## Props (Mix usage of tailwind inspired code with props)

I encourage you to let tailwind handle the color property to avoid conflicts

```jsx
<Icon
  group="business"
  name="chartLine"
  size="md"
  className="text-red-600 hover:text-cyan-600"
/>
```

## Notes

- `group` and `name` work well for normal usage.
- `className` format is useful when you want to combine icon selection with utility classes.
- If an icon is not found, the component returns `null`.
- This library is not a final product it still has App.jsx, index.css, main.jsx for testing purposes.
