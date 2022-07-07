import type * as CSS from 'csstype'

import type { Config, Props, ThemeValues } from '../types'
import { compose } from '../utils'

export type SpaceProps = Props<{
  m: ThemeValues<'spaces'> | CSS.Property.Margin
  mt: ThemeValues<'spaces'> | CSS.Property.MarginTop
  mr: ThemeValues<'spaces'> | CSS.Property.MarginRight
  mb: ThemeValues<'spaces'> | CSS.Property.MarginBottom
  ml: ThemeValues<'spaces'> | CSS.Property.MarginLeft
  my: ThemeValues<'spaces'> | CSS.Property.Margin
  mx: ThemeValues<'spaces'> | CSS.Property.Margin
  p: ThemeValues<'spaces'> | CSS.Property.Padding
  pt: ThemeValues<'spaces'> | CSS.Property.PaddingTop
  pr: ThemeValues<'spaces'> | CSS.Property.PaddingRight
  pb: ThemeValues<'spaces'> | CSS.Property.PaddingBottom
  pl: ThemeValues<'spaces'> | CSS.Property.PaddingLeft
  py: ThemeValues<'spaces'> | CSS.Property.Padding
  px: ThemeValues<'spaces'> | CSS.Property.Padding
}>

export const spaceConfig: Config[] = [
  { jsxProperty: 'm', scope: 'spaces', cssProperties: ['margin'] },
  { jsxProperty: 'mt', scope: 'spaces', cssProperties: ['marginTop'] },
  { jsxProperty: 'mr', scope: 'spaces', cssProperties: ['marginRight'] },
  { jsxProperty: 'mb', scope: 'spaces', cssProperties: ['marginBottom'] },
  { jsxProperty: 'ml', scope: 'spaces', cssProperties: ['marginLeft'] },
  { jsxProperty: 'my', scope: 'spaces', cssProperties: ['marginTop', 'marginBottom'] },
  { jsxProperty: 'mx', scope: 'spaces', cssProperties: ['marginRight', 'marginLeft'] },
  { jsxProperty: 'p', scope: 'spaces', cssProperties: ['padding'] },
  { jsxProperty: 'pt', scope: 'spaces', cssProperties: ['paddingTop'] },
  { jsxProperty: 'pr', scope: 'spaces', cssProperties: ['paddingRight'] },
  { jsxProperty: 'pb', scope: 'spaces', cssProperties: ['paddingBottom'] },
  { jsxProperty: 'pl', scope: 'spaces', cssProperties: ['paddingLeft'] },
  { jsxProperty: 'py', scope: 'spaces', cssProperties: ['paddingTop', 'paddingBottom'] },
  { jsxProperty: 'px', scope: 'spaces', cssProperties: ['paddingRight', 'paddingLeft'] },
]

export const space = compose(spaceConfig)
