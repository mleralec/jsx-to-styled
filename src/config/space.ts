import type * as CSS from 'csstype'

import type { Config, ObjectProps, Props, ThemeValues } from '../types'
import { compose } from '../utils'

export type SpaceProps = Props<{
  m: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Margin>
  mt: ObjectProps<ThemeValues<'spaces'> | CSS.Property.MarginTop>
  mr: ObjectProps<ThemeValues<'spaces'> | CSS.Property.MarginRight>
  mb: ObjectProps<ThemeValues<'spaces'> | CSS.Property.MarginBottom>
  ml: ObjectProps<ThemeValues<'spaces'> | CSS.Property.MarginLeft>
  my: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Margin>
  mx: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Margin>
  p: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Padding>
  pt: ObjectProps<ThemeValues<'spaces'> | CSS.Property.PaddingTop>
  pr: ObjectProps<ThemeValues<'spaces'> | CSS.Property.PaddingRight>
  pb: ObjectProps<ThemeValues<'spaces'> | CSS.Property.PaddingBottom>
  pl: ObjectProps<ThemeValues<'spaces'> | CSS.Property.PaddingLeft>
  py: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Padding>
  px: ObjectProps<ThemeValues<'spaces'> | CSS.Property.Padding>
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
