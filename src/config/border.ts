import type * as CSS from 'csstype'

import type { Props, Config, ThemeValues, ObjectProps } from '../types'
import { compose } from '../utils'

export type BorderProps = Props<{
  border: ObjectProps<CSS.Property.Border>
  borderWidth: ObjectProps<ThemeValues<'borderWidths'> | CSS.Property.BorderWidth>
  borderStyle: ObjectProps<CSS.Property.BorderStyle>
  borderColor: ObjectProps<ThemeValues<'colors'> | CSS.Property.BorderColor>
  borderRadius: ObjectProps<ThemeValues<'radii'> | CSS.Property.BorderRadius>
  borderTop: ObjectProps<CSS.Property.BorderTop>
  borderTopWidth: ObjectProps<ThemeValues<'borderWidths'> | CSS.Property.BorderTopWidth>
  borderTopStyle: ObjectProps<CSS.Property.BorderTopStyle>
  borderTopColor: ObjectProps<ThemeValues<'colors'> | CSS.Property.BorderTopColor>
  borderTopLeftRadius: ObjectProps<ThemeValues<'radii'> | CSS.Property.BorderTopLeftRadius>
  borderTopRightRadius: ObjectProps<ThemeValues<'radii'> | CSS.Property.BorderTopRightRadius>
  borderRight: ObjectProps<CSS.Property.BorderRight>
  borderRightWidth: ObjectProps<ThemeValues<'borderWidths'> | CSS.Property.BorderRightWidth>
  borderRightStyle: ObjectProps<CSS.Property.BorderRightStyle>
  borderRightColor: ObjectProps<ThemeValues<'colors'> | CSS.Property.BorderRightColor>
  borderBottom: ObjectProps<CSS.Property.BorderBottom>
  borderBottomWidth: ObjectProps<ThemeValues<'borderWidths'> | CSS.Property.BorderBottomWidth>
  borderBottomStyle: ObjectProps<CSS.Property.BorderBottomStyle>
  borderBottomColor: ObjectProps<ThemeValues<'colors'> | CSS.Property.BorderBottomColor>
  borderBottomLeftRadius: ObjectProps<ThemeValues<'radii'> | CSS.Property.BorderBottomLeftRadius>
  borderBottomRightRadius: ObjectProps<ThemeValues<'radii'> | CSS.Property.BorderBottomRightRadius>
  borderLeft: ObjectProps<CSS.Property.BorderLeft>
  borderLeftWidth: ObjectProps<ThemeValues<'borderWidths'> | CSS.Property.BorderLeftWidth>
  borderLeftStyle: ObjectProps<CSS.Property.BorderLeftStyle>
  borderLeftColor: ObjectProps<ThemeValues<'colors'> | CSS.Property.BorderLeftColor>
}>

export const borderConfig: Config[] = [
  { jsxProperty: 'border' },
  { jsxProperty: 'borderWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderStyle' },
  { jsxProperty: 'borderColor', scope: 'colors' },
  { jsxProperty: 'borderRadius', scope: 'radii' },
  { jsxProperty: 'borderTop' },
  { jsxProperty: 'borderTopWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderTopStyle' },
  { jsxProperty: 'borderTopColor', scope: 'colors' },
  { jsxProperty: 'borderTopLeftRadius', scope: 'radii' },
  { jsxProperty: 'borderTopRightRadius', scope: 'radii' },
  { jsxProperty: 'borderRight' },
  { jsxProperty: 'borderRightWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderRightStyle' },
  { jsxProperty: 'borderRightColor', scope: 'colors' },
  { jsxProperty: 'borderBottom' },
  { jsxProperty: 'borderBottomWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderBottomStyle' },
  { jsxProperty: 'borderBottomColor', scope: 'colors' },
  { jsxProperty: 'borderBottomLeftRadius', scope: 'radii' },
  { jsxProperty: 'borderBottomRightRadius', scope: 'radii' },
  { jsxProperty: 'borderLeft' },
  { jsxProperty: 'borderLeftWidth', scope: 'borderWidths' },
  { jsxProperty: 'borderLeftStyle' },
  { jsxProperty: 'borderLeftColor', scope: 'colors' },
]

export const border = compose(borderConfig)
