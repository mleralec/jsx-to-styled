<div align="center">
  <h1><a href="https://www.npmjs.com/package/jsx-to-styled">JSX to Styled</a></h1>
  <p><strong>jsx-to-styled</strong> adds styled props to your React components</p>
</div>

## 📝 What it is ?

Inspired by [xstyled](https://xstyled.dev/) and [styled-system](https://styled-system.com/), **jsx-to-styled** adds styled props to your React styled-components. The main idea of this library is to stay really **simple** and **performant**.

> All styled props injected by **jsx-to-styled** are prefixed by `$` symbol to prevent forwarding props to html element, check the [styled-components transiant props section](https://styled-components.com/docs/api#transient-props) for more informations.

## 🔧 Installation

You must have `react` and `styled-components` already installed

```bash
npm i jsx-to-styled
# or
yarn add jsx-to-styled
```

## 💻 Usage

You can use **jsx-to-styled** without theme ([codesandbox example](https://codesandbox.io/s/simple-554sjy))

```tsx
import styled from 'styled-components'
import system from 'jsx-to-styled'

// create your styled component with system props
const Box = styled.div(system)

// now you can use all jsx-to-styled props
return (
  <Box $color="white" $backgroundColor="tomato" $p="30px" $borderRadius="50%">
    Hello World!
  </Box>
)
```

Or use with a theme to use custom values ([codesandbox example](https://codesandbox.io/s/theme-3xxgmk))

```tsx
import styled, { ThemeProvider } from 'styled-components'
import system from 'jsx-to-styled'

// create your styled component with system props
const Box = styled.div(system)

// create your theme
const theme = {
  colors: {
    primary: 'white',
    secondary: 'tomato',
  },
  spaces: {
    xl: '30px',
  },
  radii: {
    half: '50%',
  },
}

// now you can use all jsx-to-styled props with theme values
return (
  <ThemeProvider theme={theme}>
    <Box $color="primary" $backgroundColor="secondary" $p="xl" $borderRadius="half">
      Hello World!
    </Box>
  </ThemeProvider>
)
```

## ✨ Typescript

Thanks to [csstype](https://github.com/frenic/csstype), **jsx-to-styled** is fully typed. You will have autocomplete for all possible css values.

```tsx
import system, { SystemProps } from 'jsx-to-styled'

// don't forget to add SystemProps type to your styled-component definition
const Box = styled.div<SystemProps>(system)
```

If you want to access to your theme values, you have to redefine "Theme" interface with your custom theme like that:

```ts
// theme.d.ts
import 'jsx-to-styled'
import { theme } from './theme'

type MyTheme = typeof theme

declare module 'jsx-to-styled' {
  export interface Theme extends MyTheme {}
}
```

## 📱 Responsive (breakpoints)

You can use **breakpoints** in your styled props ([codesandbox example](https://codesandbox.io/s/breakpoints-lun0gq?file=/src/App.tsx))

```tsx
// add "breakpoints" key in your theme
const theme = {
  colors: {
    primary: 'white',
    secondary: 'tomato',
  },
  breakpoints: {
    sm: '600px',
  },
}

// flexDirection will be "column" by default and "row" on screens > 600px
return (
  <Box $display="flex" $flexDirection={{ _: 'column', sm: 'row' }}>
    <Box>A</Box>
    <Box>B</Box>
  </Box>
)
```

## 🍱 States

You can use **states** in your styled props ([codesandbox example](https://codesandbox.io/s/states-x587p5?file=/src/App.tsx))

```tsx
// add "states" key in your theme
const theme = {
  colors: {
    primary: 'white',
    secondary: 'tomato',
  },
  states: {
    hover: '&:hover',
  },
}

// color will be "white" by default and "tomato" on hover
return <Box $color={{ _: 'primary', hover: 'secondary' }}>Hello World!</Box>
```

## 📕 Props

> System is composed by all of props below

### Background

| JSX Property        | CSS property        | Theme key |
| ------------------- | ------------------- | --------- |
| $background         | background          |           |
| $backgroundImage    | background-image    |           |
| $backgroundSize     | background-size     |           |
| $backgroundPosition | background-position |           |
| $backgroundRepeat   | background-repeat   |           |

### Border

| JSX Property             | CSS property               | Theme key    |
| ------------------------ | -------------------------- | ------------ |
| $border                  | border                     |              |
| $borderWidth             | border-width               | borderWidths |
| $borderStyle             | border-style               |              |
| $borderColor             | border-color               | colors       |
| $borderRadius            | border-radius              | radii        |
| $borderTop               | border-top                 |              |
| $borderTopWidth          | border-top-width           | borderWidths |
| $borderTopStyle          | border-top-style           |              |
| $borderTopColor          | border-top-color           | colors       |
| $borderTopLeftRadius     | border-top-left-radius     | radii        |
| $borderTopRightRadius    | border-top-right-radius    | radii        |
| $borderRight             | border-right               |              |
| $borderRightWidth        | border-right-width         | borderWidths |
| $borderRightStyle        | border-right-style         |              |
| $borderRightColor        | border-right-color         | colors       |
| $borderBottom            | border-bottom              |              |
| $borderBottomWidth       | border-bottom-width        | borderWidths |
| $borderBottomStyle       | border-bottom-style        |              |
| $borderBottomColor       | border-bottom-color        | colors       |
| $borderBottomLeftRadius  | border-bottom-left-radius  | radii        |
| $borderBottomRightRadius | border-bottom-right-radius | radii        |
| $borderLeft              | border-left                |              |
| $borderLeftWidth         | border-left-width          | borderWidths |
| $borderLeftStyle         | border-left-style          |              |
| $borderLeftColor         | border-left-color          | colors       |

### Color

| JSX Property     | CSS property     | Theme key |
| ---------------- | ---------------- | --------- |
| $backgroundColor | background-color | colors    |
| $color           | color            | colors    |
| $opacity         | opacity          |           |

### Flex

| JSX Property    | CSS property    | Theme key |
| --------------- | --------------- | --------- |
| $flex           | flex            |           |
| $alignContent   | align-content   |           |
| $alignItems     | align-items     |           |
| $alignSelf      | align-self      |           |
| $justifyContent | justify-content |           |
| $justifyItems   | justify-items   |           |
| $justifySelf    | justify-self    |           |
| $flexBasis      | flex-basis      |           |
| $flexDirection  | flex-direction  |           |
| $flexGrow       | flex-grow       |           |
| $flexShrink     | flex-shrink     |           |
| $flexWrap       | flex-wrap       |           |
| $order          | order           |           |

### Grid

| JSX Property         | CSS property          | Theme key |
| -------------------- | --------------------- | --------- |
| $gap                 | gap                   | spaces    |
| $columnGap           | column-gap            | spaces    |
| $rowGap              | row-gap               | spaces    |
| $gridColumn          | grid-column           |           |
| $gridRow             | grid-row              |           |
| $gridArea            | grid-area             |           |
| $gridAutoFlow        | grid-auto-flow        |           |
| $gridAutoColumns     | grid-auto-columns     |           |
| $gridAutoRows        | grid-auto-rows        |           |
| $gridTemplateColumns | grid-template-columns |           |
| $gridTemplateRows    | grid-template-rows    |           |
| $gridTemplateAreas   | grid-template-areas   |           |

### Layout

| JSX Property   | CSS property   | Theme key |
| -------------- | -------------- | --------- |
| $w             | width          | sizes     |
| $h             | height         | sizes     |
| $minW          | min-width      | sizes     |
| $maxW          | max-width      | sizes     |
| $minH          | min-height     | sizes     |
| $maxH          | max-height     | sizes     |
| $display       | display        |           |
| $verticalAlign | vertical-align |           |
| $overflow      | overflow       |           |
| $overflowX     | overflow-x     |           |
| $overflowY     | overflow-y     |           |

### Position

| JSX Property | CSS property | Theme key |
| ------------ | ------------ | --------- |
| $position    | position     |           |
| $zIndex      | z-index      |           |
| $top         | op           | spaces    |
| $right       | right        | spaces    |
| $bottom      | bottom       | spaces    |
| $left        | left         | spaces    |

### Space

| JSX Property | CSS property                | Theme key |
| ------------ | --------------------------- | --------- |
| $m           | margin                      | spaces    |
| $mt          | margin-top                  | spaces    |
| $mr          | margin-right                | spaces    |
| $mb          | margin-bottom               | spaces    |
| $ml          | margin-left                 | spaces    |
| $my          | margin-top, margin-bottom   | spaces    |
| $mx          | margin-right, margin-left   | spaces    |
| $p           | padding                     | spaces    |
| $pt          | padding-top                 | spaces    |
| $pr          | padding-right               | spaces    |
| $pb          | padding-bottom              | spaces    |
| $pl          | padding-left                | spaces    |
| $py          | padding-top, padding-bottom | spaces    |
| $px          | padding-right, padding-left | spaces    |

### Typography

| JSX Property    | CSS property    | Theme key      |
| --------------- | --------------- | -------------- |
| $fontFamily     | font-family     | fonts          |
| $fontSize       | font-size       | fontSizes      |
| $fontWeight     | font-weight     | fontWeights    |
| $lineHeight     | line-height     | lineHeights    |
| $letterSpacing  | line-spacing    | letterSpacings |
| $textAlign      | text-align      |                |
| $fontStyle      | font-style      |                |
| $textDecoration | text-decoration |                |
| $textTransform  | text-transform  |                |

### Other

| JSX Property    | CSS property    | Theme key |
| --------------- | --------------- | --------- |
| $cusor          | cursor          |           |
| $float          | float           |           |
| $objectFit      | object-fit      |           |
| $objectPosition | object-position |           |
| $transform      | transform       |           |
| $visibility     | visibility      |           |
